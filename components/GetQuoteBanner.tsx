import { ReactNode } from "react"
import GetQuoteButton from "./GetQuoteButton"

interface GetQuoteBannerProps {
  title?: string
  description: string | string[]
  image: string
  position?: "left" | "right"
  actionButton?: ReactNode
}
export const GetQuoteBanner = ({ props }: { props: GetQuoteBannerProps }) => {
  const isImageOnLeft = props.position === "left"

  const renderDescription = () => {
    if (Array.isArray(props.description)) {
      return (
        <div className="flex flex-col gap-8">
          {props.description.map((step, index) => (
            <div className="flex items-center gap-4 md:flex">
              <div className="text-2xl font-extralight text-primary md:text-5xl">0{index + 1}.</div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      )
    } else {
      return <p className="max-w-2xl font-light">{props.description}</p>
    }
  }

  return (
    <div className={`flex w-full items-center justify-between ${isImageOnLeft ? "flex-row-reverse" : ""}`}>
      <div className="flex flex-col gap-8">
        <h2 className="max-w-2xl">{props.title}</h2>
        <div>
          <span className="inline-block h-1 w-40 rounded-full bg-primary"></span>
          <span className="ml-1 inline-block h-1 w-3 rounded-full bg-primary"></span>
          <span className="ml-1 inline-block h-1 w-1 rounded-full bg-primary"></span>
        </div>
        {renderDescription()}
        {props.actionButton}
      </div>

      <img
        src={props.image}
        alt="Solar Panels"
        className={`hidden h-[28rem] max-h-[50%] w-[28rem] max-w-[50%] rounded-full border-[1px] border-primary object-cover shadow-lg md:block xl:h-[34rem] xl:w-[34rem] ${
          isImageOnLeft ? "order-2" : ""
        }`}
      />
    </div>
  )
}
