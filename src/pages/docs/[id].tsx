import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.min.css'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-graphql'
import { marked } from 'marked'
import { gfmHeadingId } from 'marked-gfm-heading-id'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

marked.use(gfmHeadingId({}))

const MEMOIZED_DOCS = new Map()

export default function Doc() {
  const { id } = useParams()
  const [doc, setDoc] = useState('')

  useEffect(() => {
    !async function () {
      if (MEMOIZED_DOCS.has(id)) return setDoc(MEMOIZED_DOCS.get(id))

      const response = await fetch(`/docs/${id}.md`)
      const result = await response.text()

      setDoc(result)
      MEMOIZED_DOCS.set(id, result)
    }()
  }, [id])

  useEffect(() => {
    Prism.highlightAll()
  }, [doc])

  return (
    <div dangerouslySetInnerHTML={{ __html: marked.parse(doc) }} className="max-w-none prose dark:prose-invert prose-a:text-blue-600 hover:prose-a:text-blue-500" />
  )
}
