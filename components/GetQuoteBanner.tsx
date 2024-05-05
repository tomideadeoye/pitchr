import GetQuoteButton from "./GetQuoteButton"

interface GetQuoteBannerProps {
  title?: string
  description: string
  image: string
  position?: "left" | "right"
}
export const GetQuoteBanner = ({ props }: { props: GetQuoteBannerProps }) => {
  const isImageOnLeft = props.position === "left"

  return (
    <div className={`flex items-center ${isImageOnLeft ? "flex-row-reverse" : ""}`}>
      <div className="flex max-w-screen-xl flex-col items-start justify-start px-4 py-8 lg:py-16">
        <h2 className="mb-4 max-w-2xl">{props.title}</h2>
        <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400">{props.description}</p>
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
