import { Link, useFileRouter } from "kiru/router"
import { Avatar } from "./Avatar"

export function AutoHiddenAvatar({ handleNavigate }: { handleNavigate: (route: string) => () => void }) {
  const { state } = useFileRouter()

  if (state.path.includes('blog')) return <this-element-takes-up-space />

  return (
    <Link style={"view-transition-name: nav"} to="/" onclick={handleNavigate("/")}><Avatar /></Link>
  )
}
