import React from 'react'
import { Counter } from '@/app/components/counter'
import { Link } from '@/i18n/routing'
import { LanguageSwitch } from '@/app/components/language-switch'
import { getTranslations } from 'next-intl/server'

const ExamplePage = async (): Promise<React.ReactNode> => {
  const t = await getTranslations('ExamplePage')

  return (
    <div className='flex size-full flex-col items-center gap-4 py-10'>
      <h1 className='w-full pb-5 text-center text-3xl'>{t('title')}</h1>
      <Counter />
      <LanguageSwitch />
      <Link className='text-blue-600 hover:underline' href='/'>
        {t('back')}
      </Link>
    </div>
  )
}
export default ExamplePage
