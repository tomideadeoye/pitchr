import { Metadata } from "next"
import { FAQAccordion } from "components/FAQAccordion"
import { JoinUsBanner } from "components/JoinUsBanner"

export const metadata: Metadata = {
  title: "{companyData.companyName} FAQ",
  openGraph: {
    url: "https://www.qtfenergy.com/faq",
    title: "{companyData.companyName}",
    description: "Get Quote from {companyData.companyName}",
    siteName: "{companyData.companyName}",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://github.com/QorePay-Technology-Solutions/qtf-energy-webapp/blob/main/public/logo.svg",
      },
    ],
  },
}

export default function Web() {
  return (
    <section className="mx-auto flex max-w-screen-xl flex-col items-center gap-14  bg-white p-16 dark:bg-gray-900">
      <div className="w-full">
        <h1 className="mb-4 w-full max-w-3xl self-start">You have questions, we have answers</h1>
        <p className="font-light">Frequently Asked Questions</p>
      </div>
      <img src="/icons/adoredarrow.svg" className="mt-[-40px] h-14 w-14" />
      <FAQAccordion />
      <JoinUsBanner />
    </section>
  )
}
