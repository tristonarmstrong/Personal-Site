import { allThangs } from "content-collections"
import { useMemo } from "kiru"
import { Link } from "kiru/router"
import generateLowResImagePath from "../../utils/generateLowResImagePath"

export default function Now() {
  allThangs.forEach((x) => {
    console.log(x.slug)
  })
  return (
    <main className="text-sm mt-10 flex flex-col gap-6">
      <h1 className={"text-2xl"}>Heres some things I like and use</h1>
      <i className={"text-yellow-500 underline opacity-50"}>
        NOTE: Im still working on filling these in
      </i>

      <h2 className={"text-xl font-bold"}>Tech</h2>
      <FilteredThangsList group={"Tech"} />
      <br />
      <h2 className={"text-xl font-bold"}>Kitchen2</h2>
      <FilteredThangsList group={"Kitchen"} />
      <br />
      <h2 className={"text-xl font-bold"}>Day</h2>
      <FilteredThangsList group={"Day"} />
      <br />
      <h2 className={"text-xl font-bold"}>Furniture</h2>
      <FilteredThangsList group={"Furniture"} />
      <br />
      <h2 className={"text-xl font-bold"}>Travel</h2>
      <div className={"text-gray-500"}>who travels these days?</div>
      {/*      <FilteredThangsList group={"Travel"} />*/}
      <br />
      <h2 className={"text-xl font-bold"}>Languages</h2>
      <FilteredThangsList group={"Lang"} />

      <br />
      <i>
        Idea for this page completely stolen from{" "}
        <a
          className={"text-yellow-500 underline"}
          href={"https://favorite.emnudge.dev/"}
          target={"_blank"}
          rel={"noopener"}
        >
          Emnudge.dev
        </a>
      </i>
      <br />
    </main>
  )
}

function FilteredThangsList({
  group,
}: {
  group: (typeof allThangs)[number]["type"]
}) {
  const filteredThangs = useMemo(() => {
    return allThangs.filter((x) => x.type === group)
  }, [group])

  return (
    <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"}>
      {filteredThangs.map((thang) => {
        return (
          <Link
            to={`/thangs/${thang.slug}`}
            className={
              "transition dark:bg-[#fff1] bg-gray-100 bg-opacity-20 rounded-lg shadow hover:shadow-xl hover:scale-105 cursor-pointer"
            }
          >
            <div
              className={"h-40 rounded-t-lg"}
              style={`
              view-transition-name: image-${thang.slug};
              background-image: url(${thang.img}), url(${generateLowResImagePath(thang.img)});
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center;
            `}
            ></div>
            <div className={"p-2"}>
              <h2
                style={`view-transition-name: link-h-${thang.slug}`}
                className={"text-md font-bold w-fit"}
              >
                {thang.item}
              </h2>
              <p>{thang.type}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
