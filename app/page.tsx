import { Metadata } from "next"
import { companyData } from "./Home"

export const metadata: Metadata = {
  title: "PitchR",
  applicationName: "PitchR",
  metadataBase: new URL("https://pitchr.africa"),
  creator: "Tomide Adeoye",
  authors: [{ name: "Tomide Adeoye", url: "https://twitter.com/tomideadeoye" }],
  keywords: ["Pitch", "Venture Funding", "Fundraise", "Founder", "investment"],
  twitter: {
    card: "summary_large_image",
    title: "PitchR",
    description: "Deliver your best Pitch to Investors with PitchR",
    creator: "@timmy_idowu",
    images: ["https://raw.githubusercontent.com/tomideadeoye/pitchr/main/public/og-image.png"],
  },
  openGraph: {
    url: "https://www.pitchr.africa/",
    title: "PitchR",
    description: "Deliver your best Pitch to Investors with PitchR",
    siteName: "PitchR",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/tomideadeoye/pitchr/main/public/og-image.png",
      },
      {
        width: 1200,
        height: 630,
        url: "https://github.com/tomideadeoye/pitchr/blob/main/app/opengraph-image.jpg?raw=true",
      },
    ],
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  other: {},
}
import { Home } from "./Home"

export default function Web() {
  console.log(metadata.title)
  return <Home />
}
