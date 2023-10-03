import { marked } from 'marked'
import { gfmHeadingId } from 'marked-gfm-heading-id'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

marked.use(gfmHeadingId({}))

export default function Doc() {
  const { id } = useParams()
  const [doc, setDoc] = useState('')

  useEffect(() => {
    !async function () {
      const response = await fetch(`/docs/${id}.md`)
      const result = await response.text()

      setDoc(result)
    }()
  }, [id])

  return (
    <div dangerouslySetInnerHTML={{ __html: marked.parse(doc) }} className="max-w-none prose dark:prose-invert prose-a:text-blue-600 hover:prose-a:text-blue-500" />
  )
}
