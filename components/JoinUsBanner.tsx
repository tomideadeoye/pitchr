import { companyData } from "app/page"
import GetQuoteButton from "./GetQuoteButton"

export const JoinUsBanner = () => {
  return (
    <div className="flex w-fit flex-col items-center justify-between self-center rounded-3xl bg-primary px-10 py-[80px] text-center text-white">
      <h1 className="mb-4 max-w-2xl text-xl sm:text-3xl">Join Us in the Solar Revolution</h1>
      <p className="mb-6 max-w-xl font-light dark:text-gray-400">
        {companyData.companyName} is your trusted partner in the solar revolution. Together, let's harness the power of
        the sun for a sustainable, brighter tomorrow.
      </p>
      <GetQuoteButton className="bg-accent p-7" />
    </div>
  )
}
