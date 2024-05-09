import GetQuoteButton from "./GetQuoteButton"

interface GetQuoteBannerProps {
  title?: string
  description: string | string[]
  image: string
  position?: "left" | "right"
}
export const GetQuoteBanner = ({ props }: { props: GetQuoteBannerProps }) => {
  const isImageOnLeft = props.position === "left"

  const renderDescription = () => {
    if (Array.isArray(props.description)) {
      return (
        <div className="flex flex-col gap-3">
          {props.description.map((step, index) => (
            <div className="flex items-center md:-mx-4 md:flex ">
              <div className="px-4 text-3xl font-extralight text-primary">0{index + 1}.</div>
              <p className=" text-gray-500 dark:text-gray-300">{step}</p>
            </div>
          ))}
        </div>
      )
    } else {
      return <p className="max-w-2xl font-light text-gray-500 dark:text-gray-400">{props.description}</p>
    }
  }

  return (
    <div className={`flex items-center ${isImageOnLeft ? "flex-row-reverse" : ""}`}>
      <div className="flex max-w-screen-xl flex-col items-start justify-start gap-4 px-4 py-8 lg:py-16">
        <h2 className="mb-4 max-w-2xl">{props.title}</h2>
        {renderDescription()}
        <GetQuoteButton />
      </div>
      <img
        src={props.image}
        alt="Solar Panels"
        className={`hidden max-w-[50%] object-contain p-5 md:block ${isImageOnLeft ? "order-2" : ""}`}
      />
    </div>
  )
}
