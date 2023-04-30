import type { Preview } from "@storybook/react";
import React, { Suspense, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from '../src/i18n';


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'ru', title: 'Russian' },
        { value: 'en', title: 'English' }
      ],
      showName: true,
    },
  },
};


const withI18next = (Story, context) => {
  const { locale } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);
  
  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n} >
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};