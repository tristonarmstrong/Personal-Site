export default function Now() {
  return (
    <main className="text-sm mt-10 flex flex-col gap-4">
      <h1 className={"text-xl"}>What am I up to?</h1>
      <p>Aside from my day job, I greatly enjoy building utility apps/tools for myself. I build these tools
        to better help me in my day to day life. All of my projects are very much a "work in progress".</p>
      <h2 className={"text-lg"}>Projects:</h2>
      <ul>
        <Item label="Ferro" href="https://github.com/tristonarmstrong/ferro" />
        <Item label="Rage" href="https://github.com/tristonarmstrong/Rage" />
        <Item label="Ollamy" href="https://github.com/tristonarmstrong/Ollamy" />
        <Item label="EHarvest" href="https://github.com/tristonarmstrong/EHarvest" />
        <Item label="Web-Window-Manager" href="https://github.com/tristonarmstrong/web-window-manager" />
      </ul>

      <p>I also enjoy contributing to open source projects when the opportunity presents itself!</p>
      <h2 className={"text-lg"}>OSS Contribs:</h2>
      <ul>
        <Item label="BinCode" href="https://github.com/asadbek064/bincode" />
        <Item label="Kaioken" href="https://github.com/CrimsonChi/kaioken" />
        <Item label="Typescript" href="https://github.com/microsoft/TypeScript" />
      </ul>

      <p>Sometimes I have knowledge I find worth sharing, and thus I write up a little something something from time to time</p>
      <p className={"text-lg"}>Blogs:</p>
      <ul>
        <Item label="temp" href="#" />
      </ul>
    </main>
  )
}


function Item({ label, href }: { label: string, href: string }) {
  return (
    <a href={href} target={"_blank"} className={href ? "text-gray-400 hover:text-yellow-500" : ""}>
      <li className={"flex w-full items-center gap-1"}>
        <span className={""}>{label}</span>
        <span className={"h-full border border-dashed flex-1 border-gray-400"}></span>
        <span className={"text-sm italic"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg>
        </span>
      </li>
    </a>
  )
}
