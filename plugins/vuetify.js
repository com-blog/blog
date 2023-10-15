import { defineNuxtPlugin } from 'nuxt/app';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const appLightTheme = {
  colors: {
    default: '#ffffff',
    primary: '#1565C0',
    secondary: '#03DAC6',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: 'appLightTheme',
      themes: {
        appLightTheme,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
