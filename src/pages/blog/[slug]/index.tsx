import { useFileRouter } from "kiru/router"
import { allPosts } from 'content-collections'

export default function Page() {
  const { state: { params } } = useFileRouter()

  const post = allPosts.find(x => x.slug == params.slug)
  return <article className={"blogpost"} innerHTML={post?.html}></article>
}
