import { configure } from 'vee-validate';

export default defineNuxtPlugin(() => {
  configure({
    generateMessage: (context) => {
      const messages = {
        required: `The field ${context.field} is required.`,
        // Add more validation messages as needed
      };

      return messages[context.rule.name] || `The field ${context.field} is invalid.`;
    },
  });
});
