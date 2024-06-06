// auto global declaration
// useSwal: () => any;
// useToaster: () => any;
// useLocaleDate: (date: Date) => string;
// useLocaleOnlyTime: (date: Date) => string;
// useLocaleDateWithTime: (date: Date) => string;
// getCurrentGMTOffset: () => string;

declare global {
  interface useSwal {
    (title: string, message: string, type: string): any
  }
  interface useToaster {
    (title: string, message: string, type: string): any
  }
}

export { };
