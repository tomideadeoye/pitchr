"use client"
import { GetQuoteBanner } from "../components/GetQuoteBanner"
import { GridItemsDisplay } from "../components/GridItemsDisplay"
import GetQuoteButton from "components/GetQuoteButton"
import { Badge } from "@/components/ui/badge"
import Stats from "components/Stats"
import { Tooltip } from "components/Tooltip/Tooltip"
import { companyData } from "./page"

export function Home() {
  return (
    <section className="mx-auto mt-[100px] flex max-w-screen-xl flex-col gap-14  overflow-hidden bg-white p-10  dark:bg-gray-900">
      <div className="flex max-w-screen-xl flex-col  items-start justify-start px-4 py-8  lg:py-16">
        <h1 className={`mb-4 max-w-3xl font-monument`}>{companyData.taglines[0]}</h1>
        <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
          {companyData.taglines[1]}
        </p>
        <GetQuoteButton />
      </div>
      <GridItemsDisplay />
      <div className="flex">
        <div className="flex max-w-screen-xl flex-col  items-start justify-start px-4 py-8  lg:py-16">
          <p className="mb-6 max-w-2xl font-bold text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            Why {companyData.companyName}?
          </p>

          <h1 className="mb-4 max-w-2xl text-3xl">{companyData.Stat}?</h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400">{companyData.Description}</p>
          <GetQuoteButton variant="outline" className="bg-primary" buttonText="Reach out to us" />
        </div>
        <img
          src="/images/blackfounder.jpeg"
          alt={companyData.Stat}
          className="h-[28rem] w-[28rem] rounded-full object-cover xl:h-[34rem] xl:w-[34rem]"
        />
      </div>
      <Stats />
      <Badge className="w-fit self-center rounded-full px-4" variant="outline">
        TRUSTED BY
      </Badge>
      <div className="mx-auto flex w-full items-center justify-center gap-4 px-4" id="process">
        {companyData.PortfolioStartups.map((company) => {
          return (
            <Tooltip explainer={company.name}>
              <a href={company.website} className="flex w-[150px]  flex-col bg-[#ffffff]  shadow-xl">
                <figure className="flex items-center justify-center">
                  <img src={company.logo} alt="Card Preview" className="h-14 invert filter" />
                </figure>
              </a>
            </Tooltip>
          )
        })}
      </div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-10">
          <div className="lg:flex lg:items-center">
            <div className="w-full space-y-12 lg:w-1/2 ">
              <div>
                <h1 className="text-2xl font-semibold capitalize text-gray-800 dark:text-white lg:text-3xl">
                  Value Added
                </h1>

                <div className="mt-2">
                  <span className="inline-block h-1 w-40 rounded-full bg-primary"></span>
                  <span className="ml-1 inline-block h-1 w-3 rounded-full bg-primary"></span>
                  <span className="ml-1 inline-block h-1 w-1 rounded-full bg-primary"></span>
                </div>
              </div>

              {companyData.ValueAdd.map((value, index) => (
                <div className="md:-mx-4 md:flex md:items-start">
                  <div className="px-4 text-5xl font-extralight text-primary">0{index + 1}.</div>
                  <p className="mt-3 text-gray-500 dark:text-gray-300">{value}</p>
                </div>
              ))}
            </div>

            <div className="hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center">
              <img
                className="h-[28rem] w-[28rem] rounded-full object-cover xl:h-[34rem] xl:w-[34rem]"
                src="/images/value.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>{" "}
      <hr className="my-12 border-gray-200 dark:border-gray-700" />
      <div className="mx-auto w-full max-w-7xl bg-transparent px-4" aria-label="Progress steps" id="process">
        <ol className="grid auto-cols-fr grid-flow-col gap-5">
          {companyData.OurProcess.map((step, index) => (
            <li key={step} className="col-span-full sm:col-auto">
              <a
                href={step}
                className="group flex flex-col items-start border-l-4 border-primary p-4 hover:border-primary-foreground sm:border-l-0 sm:border-t-4"
              >
                <h1 className="text-sm font-semibold uppercase tracking-wide text-primary group-hover:text-blue-900">{`STEP ${
                  index + 1
                }`}</h1>

                <span className="text-base font-semibold text-gray-700">{step}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
      <GetQuoteBanner
        props={{
          title: "A great fit?",
          description: companyData.TargetStartups.Criteria,
          image: "/images/match.jpeg",
          position: "right",
        }}
      />
      <GetQuoteBanner
        props={{
          title: "What will this cost you?",
          description: [
            "Commitment to the process",
            "1% of successful fundraise donated to a program/initiative/NGO of choice",
            "To be agreed upon by the end of the first call.",
          ],
          image: "/images/costs.jpeg",
          position: "left",
        }}
      />
      {/* <JoinUsBanner /> */}
      <div className="mb-5" />
    </section>
  )
}
