import { Link } from '@/i18n/routing'
import fs from 'fs'
import { getTranslations } from 'next-intl/server'
import path from 'path'
import { remark } from 'remark'
import html from 'remark-html'

const HomePage = async (): Promise<React.ReactNode> => {
  const readmePath = path.join(process.cwd(), 'README.md')
  const fileContent = fs.readFileSync(readmePath, 'utf-8')
  const processedContent = await remark().use(html).process(fileContent)
  const contentHtml = processedContent.toString()
  const t = await getTranslations('HomePage')

  return (
    <main className='markdown-body size-full' style={{ padding: '1rem' }}>
      <nav>
        <Link
          className='rounded-lg bg-blue-600 px-4 py-2 !text-white hover:bg-blue-800'
          href='/example'
        >
          {t('example')}
        </Link>
      </nav>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  )
}

export default HomePage
