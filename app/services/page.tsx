import { Metadata } from "next"
import { JoinUsBanner } from "components/JoinUsBanner"
import { GetQuoteBanner } from "components/GetQuoteBanner"
import { qtfServices } from "./qtfServices"

export const metadata: Metadata = {
  title: "About Us",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <section className="mx-auto flex max-w-screen-xl flex-col items-center gap-14  bg-white p-16 dark:bg-gray-900">
      <h1 className="mb-4 flex flex-col self-start">
        <span>Go Green,</span>
        <span>Breathe Clean</span>
      </h1>
      <div className="flex flex-col gap-8">
        {qtfServices.map((item, index) => (
          <GetQuoteBanner
            key={index}
            props={{
              title: item.title,
              description: item.description,
              image: item.image,
              position: index % 2 === 0 ? "left" : "right",
            }}
          />
        ))}
      </div>
      <JoinUsBanner />
    </section>
  )
}
