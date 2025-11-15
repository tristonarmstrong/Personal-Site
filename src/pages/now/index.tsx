import { allPosts, allProjects } from 'content-collections'
import { useId } from "kiru"
import { Link } from "kiru/router"

export default function Now() {
  return (
    <main className="text-sm mt-10 flex flex-col gap-6">
      <h1 className={"text-2xl"}>What am I up to?</h1>
      <p>
        I greatly enjoy building utility apps/tools for myself. I build these tools
        to better help me in my day to day life. All of my projects are very much a work-in-progress. To be honest, I dont think
        I'll ever finish them!
      </p>
      <div>
        <div className={"mb-2"}>
          <h2 className={"text-xl text-yellow-500"}>Projects</h2>
          <p>These are pojects that i actively work on. I have a graveyard too</p>
        </div>
        <span className={"font-bold text-gray-400"}>Web</span>
        <div className={"mx-4"}>
          {allProjects.filter(x => x.type === 'Web').map(x => {
            return (
              <Item label={x.title} href={`/project/${x.slug}`} transitionId={x.slug} />
            )
          })}
        </div>

        <span className={"font-bold text-gray-400"}>Tool</span>
        <div className={"mx-4"}>
          {allProjects.filter(x => x.type === 'Tool').map(x => {
            return (
              <Item label={x.title} href={`/project/${x.slug}`} transitionId={x.slug} />
            )
          })}
        </div>
      </div>

      <div>
        <div className={"mb-2"}>
          <h2 className={"text-xl text-yellow-500"}>OSS Contribs</h2>
          <p>I also enjoy contributing to open source projects when the opportunity presents itself! I've contributed to some, and a few that never made it through.</p>
        </div>
        <div className={"flex flex-col gap-1"}>
          <span className={"font-bold text-gray-400"}>Successful</span>
          <div className={"mx-4"}>
            <Item label="BinCode" href="https://github.com/asadbek064/bincode/pull/1" />
            <Item label="Dissent" href="https://github.com/diamondburned/dissent/pull/371" />
            <Item label="Kiru" href="https://github.com/CrimsonChi/kiru" />
            <Item label="ChaiLauncher (Window Control)" href="https://github.com/Chai-Foundation/ChaiLauncher/pull/13" />
            <Item label="ChaiLauncher (Mod Loader)" href="https://github.com/Chai-Foundation/ChaiLauncher/pull/18" />
            <Item label="Chai-MCVM" href="https://github.com/tristanpoland/Chai-MCVM/pull/1" />
          </div>
          <span className={"font-bold text-gray-400"}>UnSuccessful</span>
          <div className={"mx-4"}>
            <Item label="Omarchy (Flatpak Support)" href="https://github.com/basecamp/omarchy/issues/1881" />
            <Item label="Omarchy (Auto Fetch Icons)" href="https://github.com/basecamp/omarchy/pull/1905" />
            <Item label="Typescript" href="https://github.com/microsoft/TypeScript/pull/60269" />
            <Item label="NX" href="https://github.com/nrwl/nx/pull/31846" />
          </div>
        </div>
      </div>

      <div >
        <div className={"mb-2"}>
          <h2 className={"text-xl text-yellow-500"}>Blogs</h2>
          <p>Sometimes I have knowledge I find worth sharing, and thus I write up a little something something from time to time</p>
        </div>
        <ul className={"mx-4"}>
          {allPosts.map(x => (
            <Item label={x.title} href={`/blog/${x.slug}`} transitionId={`${x.slug}`} />
          ))}
        </ul>
      </div>
    </main>
  )
}


function Item({ label, href, transitionId }: { label: string, href: string, transitionId?: string }) {
  if (href.includes("http")) {
    return (
      <a href={href}>
        <LinkBody {...{ label, transitionId }} external />
      </a>
    )
  }

  return (
    <Link to={href}>
      <LinkBody {...{ label, transitionId }} />
    </Link>
  )
}

function LinkBody({ label, transitionId, external = false }: { label: string, transitionId?: string, external?: boolean }) {
  const id = useId()
  const linkLabelTransitionId = `link-h-${transitionId ?? id}`

  return (
    <li className={"flex w-full items-center gap-1 transition"}>
      <span className={"w-fit"} style={`view-transition-name: ${linkLabelTransitionId}`}>{label}</span>
      <span className={"h-full border border-dashed flex-1 border-gray-400"}></span>
      <span className={"text-sm italic"}>
        {external ?
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=""><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg> :
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=""><path d="M3 5v14" /><path d="M21 12H7" /><path d="m15 18 6-6-6-6" /></svg>
        }
      </span>
    </li>
  )
}
