export default function Experience() {
  return (
    <main className="text-sm mt-10 flex flex-col gap-4" style={"view-transition-name: homepage"}>
      <p>Companies I've worked at and maybe where I'm currently working if I can convince someone to give me money in exchange for some code.</p>
      <ul>
        <Work href="" comp="Your Company Here" time="Immediately" focus/>
        <Work href="https://ventrahealth.com/" comp="Ventra Health" time="2023 - 2025" />
        <Work href="https://www.randstadusa.com/" comp="Randstad Technologies" time="2021 - 2023" />
        <Work href="https://damianoglobal.com/" comp="Damiano Global Corp." time="2021" />
        <Work href="" comp="Makers Ladder LLC" time="2020" />
      </ul>
      <div>
        <h2 className={"font-bold text-gray-400"}>Freelance Work</h2>
        <p className={"text-gray-400"}>My experience freelancing was cool! 10/10 would do again.</p>
      </div>
      <ul>
        <Work href="https://www.upwork.com/freelancers/~018467e8cbe2f71382" comp="Upwork" time="$40,000+" />
      </ul>
    </main>
  )
}

function Work({ comp, time, href, focus=false }: { comp: string, time: string, href: string, focus: boolean }) {
  const unmutedLink = "text-gray-700", mutedLink = "text-gray-400"
  const isMutedLink = href ? unmutedLink : mutedLink
  const isFocused = focus ? "animate-pulse" : ""

  return (
    <a href={href} target={"_blank"} className={`${isMutedLink} ${isFocused}`}>
      <li className={"flex w-full items-center gap-1"}>
        <span className={""}>{comp}</span>
        <span className={"h-full border border-dashed flex-1 border-gray-400"}></span>
        <span className={"text-sm italic"}>{time}</span>
      </li>
    </a>
  )
}
