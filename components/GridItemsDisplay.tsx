import { companyData } from "app/Home"

interface GridItemProps {
  icon: string
  title: string
  description: string
}
export const GridItemsDisplay = () => {
  return (
    <div>
      <div className="p-4 text-gray-600">
        <h1 className="mb-8 text-center text-xl font-bold text-primary md:text-3xl">What we do!</h1>
        <ul className="grid place-content-center gap-8 sm:grid-cols-2">
          {companyData.Vision.map((item, index) => (
            <li className="flex">
              <div className="px-4 text-5xl font-extralight text-primary">0{index + 1}.</div>
              <div>
                <div className="text-xl font-bold ">Research</div>
                <p className="max-w-xs py-2 text-sm ">{item}.</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
