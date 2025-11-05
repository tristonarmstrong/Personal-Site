export default function Home() {
  return (
    <main className="text-sm mt-10 flex flex-col gap-4" style={"view-transition-name: homepage"}>
      <section>
        <h1 className="text-lg text-yellow-500">Triston Armstrong</h1>
        <p className="text-sm text-gray-400 italic">Senior Software Engineer</p>
      </section>

      <section className="flex flex-col gap-4">
        <p>Software Developer with <span className={"yearthing"} title={"I started programming professionally in year 2020"}>{Math.abs(new Date().getFullYear() - 2020)} years</span> of experience, currently building internal applications for my employer by day, and building utility apps for myself by night!</p>
      </section>
    </main>
  )
}

