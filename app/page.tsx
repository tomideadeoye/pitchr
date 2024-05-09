import { Metadata } from "next"
import { companyData } from "./Home"

export const metadata: Metadata = {
  title: "PitchR",
  twitter: {
    card: "summary_large_image",
  },

  openGraph: {
    url: "https://www.pitchr.africa/",
    title: "PitchR",
    description: "Venture funding for your startup",
    siteName: "PitchR",

    images: [
      {
        width: 1200,
        height: 630,
        url: "https://www.pitchr.africa/",
      },
    ],
  },
  other: {
    companyData: JSON.stringify(companyData),
  },
}
import { Home } from "./Home"

export default function Web() {
  return <Home />
}
