/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable security/detect-object-injection */
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'
import { ReactNode } from 'react'
import enMessages from '../../../messages/en.json'
import deMessages from '../../../messages/de.json'
import { render } from '@testing-library/react'
import { SupportedLocales } from '@/types/global'

const locales: { [key: string]: AbstractIntlMessages } = {
  en: enMessages,
  de: deMessages,
}

export const NextIntlWrapper = ({
  children,
  locale = 'en',
}: {
  children: ReactNode
  locale?: string
}): JSX.Element => {
  const messages = locales[locale] || locales['en']

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}

export const nextIntlRenderer = (
  ui: React.ReactElement,
  locale: SupportedLocales = 'en'
) => {
  const messages = locales[locale] || locales['en']

  return render(
    <NextIntlClientProvider locale={locale} messages={messages}>
      {ui}
    </NextIntlClientProvider>
  )
}
