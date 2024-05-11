import { companyData } from "app/Home"

interface GridItemProps {
  icon: string
  title: string
  description: string
}
export const GridItemsDisplay = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <h1 className="text-center text-xl font-bold text-primary md:text-3xl">Our Mission</h1>
      <ul className="flex flex-col gap-4 md:flex-row">
        {companyData.Vision.map((item, index) => (
          <li className="flex" key={item}>
            <div className="px-4 text-5xl font-extralight text-primary">0{index + 1}.</div>
            <div>
              {/* <div className="text-xl font-bold ">Research</div> */}
              <p className="max-w-xs">{item}.</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
