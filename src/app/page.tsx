import fs from 'fs'
import path from 'path'
import { remark } from 'remark'
import html from 'remark-html'

const HomePage = async (): Promise<React.ReactNode> => {
  const readmePath = path.join(process.cwd(), 'README.md')
  const fileContent = fs.readFileSync(readmePath, 'utf-8')
  const processedContent = await remark().use(html).process(fileContent)
  const contentHtml = processedContent.toString()

  return (
    <div className='markdown-body size-full' style={{ padding: '1rem' }}>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  )
}

export default HomePage
