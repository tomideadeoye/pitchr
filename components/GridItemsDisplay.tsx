import { Separator } from "@/components/ui/separator"
import { companyData } from "app/page"

interface GridItemProps {
  icon: string
  title: string
  description: string
}
export const GridItemsDisplay = () => {
  return (
    <div className="-m-4 flex w-full justify-between self-center">
      {companyData.Vision.map((item, index) => (
        <div className="flex  p-3 " key={item}>
          <div className="flex flex-col gap-3 rounded-md p-4">
            <h3 className="text-md mb-2 font-bold">{item}</h3>
          </div>
          <Separator className="w-5" />
        </div>
      ))}
    </div>
  )
}
