import { Link } from "kiru/router";

export default function NotFoundPage() {
  return (
    <div className={"text-center"}>
      <h1 className={"text-[4rem] font-bold"}>404</h1>
      <h2 className={"text-lg"}>Where do you think you're going?</h2>
      <Link to={"/"} className={"text-yellow-500 underline"}>Go Home</Link>
    </div>
  )
}
