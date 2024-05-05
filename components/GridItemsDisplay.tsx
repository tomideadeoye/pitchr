import { companyData } from "app/page"

interface GridItemProps {
  icon: string
  title: string
  description: string
}
export const GridItemsDisplay = () => {
  return (
    <div className="-m-4 flex w-full flex-wrap self-center">
      {companyData.Vision.map((item, index) => (
        <div className="flex  p-3 md:w-1/2 lg:w-1/4" key={item}>
          <div className="flex flex-col gap-3 rounded-md p-4">
            {/* <img src={`icons/${item.icon}`} className="w-11" /> */}
            <h3 className="text-md mb-2 font-bold">{item}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}
