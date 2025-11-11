export default function Home() {
  return (
    <main className="text-sm mt-10 flex flex-col gap-4" style={"view-transition-name: homepage"}>
      <section>
        <h1 className="text-lg text-yellow-500">Triston Armstrong</h1>
        <p className="text-sm text-gray-400 italic">Senior Software Engineer</p>
      </section>

      <section className="flex flex-col gap-4">
        <p>Software Developer with <span className={"yearthing"} title={"I started programming professionally in year 2020"}>{Math.abs(new Date().getFullYear() - 2020)} years</span> of experience, father to 3, and husband to 1 (not in that order) with a passion for building utility apps for myself to make my dev day-to-day easier. I also greatly enjoy,
          {' '}<a className="text-yellow-500 underline" href={"https://automatetheboringstuff.com/"} target="_blank" rel="noopener">automating the boring stuff</a> when the opertunity presents itself.</p>
      </section>


      <section className="flex flex-col gap-4 dark:bg-[#fff2] rounded-lg p-2 dark:opacity-50 border border-dashed border-[#0003] dark:border-[#fff3]">
        <small style={"color: var(--color-gray-400);"}>This is a "living site". I push half-baked chunks of UI to showcase its development in realtime, just... cause.. i find it interesting</small>
      </section>
    </main>
  )
}

