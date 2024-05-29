import type { Ref, ComputedRef } from 'vue';
import { useI18n } from 'vue-i18n';
import { ref, computed, unref } from 'vue';

// Interface for the locale object
interface LocaleObject {
  value: string;
}

// Interface for the locales array
interface LocalesArray {
  value: string[];
}

// Interface for the useLocale function
interface UseLocaleFunction {
  (): LocaleObject;
}

// Interface for the useDefaultLocale function
interface UseDefaultLocaleFunction {
  (fallback?: string): LocaleObject;
}

// Interface for the useLocales function
interface UseLocalesFunction {
  (): LocalesArray;
}

// Interface for the useLocaleDate function
interface UseLocaleDateFunction {
  (date: Ref<Date> | Date, locale?: LocaleObject): ComputedRef<string>;
}

// Interface for the useLocaleDateWithTime function
interface UseLocaleDateWithTimeFunction {
  (date: Ref<Date> | Date, locale?: LocaleObject): ComputedRef<string>;
}

// Interface for the useLocaleOnlyTime function
interface UseLocaleOnlyTimeFunction {
  (date: Ref<Date> | Date, locale?: LocaleObject): ComputedRef<string>;
}

// Define the functions with the defined interfaces
export const useLocale: UseLocaleFunction = () => {
  const { locale } = useI18n();
  return locale;
};

export const useDefaultLocale: UseDefaultLocaleFunction = (fallback = 'en-US') => {
  const { locale, setLocaleMessage } = useI18n();
  const defaultLocale = ref(fallback);

  if (process.server) {
    const reqLocale = useRequestHeaders()['accept-language']?.split(',')[0];
    if (reqLocale) {
      defaultLocale.value = reqLocale;
      setLocaleMessage(reqLocale, {}); // Set the locale messages if needed
    }
  } else if (process.client) {
    const navLang = navigator.language;
    if (navLang) {
      defaultLocale.value = navLang;
      setLocaleMessage(navLang, {}); // Set the locale messages if needed
    }
  }

  locale.value = defaultLocale.value;
  return locale;
};

export const useLocales: UseLocalesFunction = () => {
  const { locale, availableLocales } = useI18n();
  const locales = ref(availableLocales);

  if (!locales.value.includes(locale.value)) {
    locales.value.unshift(locale.value);
  }

  return locales;
};

export const useLocaleDate = (date: Ref<Date> | Date, locale = useLocale()) => {
  return computed(() =>
    new Intl.DateTimeFormat(locale.value, {
      dateStyle: 'full',
    }).format(unref(date))
  );
};

export const useLocaleDateWithTime: UseLocaleDateWithTimeFunction = (
  date,
  locale = useLocale()
) => {
  return computed(() =>
    new Intl.DateTimeFormat(locale.value, {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      // second: 'numeric',
    }).format(unref(date))
  );
};

export const useLocaleOnlyTime: UseLocaleOnlyTimeFunction = (date, locale = useLocale()) => {
  return computed(() =>
    new Intl.DateTimeFormat(locale.value, {
      hour: 'numeric',
      minute: 'numeric',
      // second: 'numeric',
      timeZone: 'Asia/Dubai',
    }).format(unref(date))
  );
};
