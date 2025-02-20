'use client'

import { usePathname, useRouter } from '@/i18n/routing'
import { useLocale } from 'next-intl'
import React, { useEffect, useState } from 'react'
import { Switch } from '../switch'

const LanguageSwitch = (): React.ReactNode => {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale()
  const [isGerman, setIsGerman] = useState(currentLocale === 'de')

  useEffect(() => {
    setIsGerman(currentLocale === 'de')
  }, [currentLocale])

  const handleToggle = (checked: boolean): void => {
    setIsGerman(checked)
    const newLocale = checked ? 'de' : 'en'

    router.replace({ pathname }, { locale: newLocale })
  }

  return (
    <div className='flex flex-row gap-2 px-6 py-4'>
      <span>EN</span>
      <Switch checked={isGerman} onCheckedChange={handleToggle} />
      <span>DE</span>
    </div>
  )
}

export default LanguageSwitch
