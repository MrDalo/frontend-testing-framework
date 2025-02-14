import fs from 'fs'
import path from 'path'
import { remark } from 'remark'
import html from 'remark-html'

// Since we're in the App Router, this component is a server component by default.
const HomePage = async (): Promise<React.ReactNode> => {
  // 1. Define the path to your README.md
  const readmePath = path.join(process.cwd(), 'README.md')

  // 2. Read the file content
  const fileContent = fs.readFileSync(readmePath, 'utf-8')

  // 3. Convert Markdown to HTML
  const processedContent = await remark().use(html).process(fileContent)

  const contentHtml = processedContent.toString()

  // 4. Render the HTML
  return (
    <div className='markdown-body size-full' style={{ padding: '1rem' }}>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  )
}

export default HomePage
