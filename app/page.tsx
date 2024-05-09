"use client"
import { Metadata } from "next"
import { GetQuoteBanner } from "../components/GetQuoteBanner"
import { GridItemsDisplay } from "../components/GridItemsDisplay"
import GetQuoteButton from "components/GetQuoteButton"
import { Badge } from "@/components/ui/badge"
import Stats from "components/Stats"
import { Tooltip } from "components/Tooltip/Tooltip"

export const companyData = {
  companyName: "PitchR Africa",
  contact: {
    websites: ["www.pitchr.africa"],
    emails: ["info@pitchr.africa"],
    phones: ["+234 815 708 3837"],
    addresses: ["Co-Working Space X"],
    socialMedia: {
      twitter: null,
      linkedin: null,
      instagram: null,
    },
  },
  taglines: ["Fundraise with Ease", `Deliver your best Pitch to Investors with PitchR`],

  Stat: "Most founders get to close less than 5x of the investors they pitch to - we can help you 10x that outcome.",
  Description:
    "Our aim is to improve fundraising outcomes for founders and get you to give your best pitch to the next investors you engage with.",
  Mission: "to prepare and set up founders for a successful fundraiser.",
  Vision: [
    "To be the leading ecosystem where founders and startups can find the highest quality support materials, guidance, and resources for founders and their startups.",
    "To democratize access and knowledge to investor preparedness.",
    "To play a leading role and be the connecting point between founders and investors in Africa.",
  ],
  PortfolioStartups: [
    {
      name: "JuiceLife.io",
      logo: "https://pbs.twimg.com/profile_images/1709340903305818112/7Iu8BM1D_400x400.jpg",
      website: "www.juicelife.io",
      description: "JuiceLife makes exercise routines fun like playing video games and rewards you for playing.",
      twitter: "https://twitter.com/JuiceLife_io",
    },
    {
      name: "Barrel",
      logo: "https://www.usebarrel.io/assets/barrel-logo.svg",
      website: "https://www.usebarrel.io",
      description: "",
      socialMedia: [
        {
          name: "linkedin",
          url: "https://www.linkedin.com/company/usebarrel/",
        },
      ],
    },
  ],
  team: [
    {
      name: "Timileyin Idowu",
      linkedin: "https://www.linkedin.com/in/timileyin-idowu-507523146/",
      twitter: "",
    },
    {
      name: "Olumide Ashade",
      linkedin: "https://www.linkedin.com/in/olumide-ashade-7b4089162/",
      twitter: "https://twitter.com/OlumideAshade",
    },
    {
      name: "Carl Macaulay",
      linkedin: "https://www.linkedin.com/in/timileyin-idowu-507523146/",
      twitter: "",
    },
  ],
  advisors: [],
  OurProcess: [
    "Sign up by filling out our form.",
    "Intro call to learn more about what you’re building and the specific support you need.",
    "A second call to further understand your needs and develop a tailor-made solution/plan",
    "Bi-Weekly calls to keep updated and provide continued support.",
  ],
  Metrics: {
    VCExperienceYears: 5,
    VCInvestorsNetwork: 30,
  },
  ValueAdd: [
    "Review and get Feedback on your startup Pitch to investors",
    "6-Months fundraising support",
    "VC ecosystem support",
    "Fundraising database management",
    "Extensive Investment network",
  ],
  TargetStartups: {
    Criteria: [
      "Founders with a proven track record of building something helpful.",
      "Already begun fundraising journey/progress",
      "Raising $300k+ for Pre-Seed round, $1m+ for Seed Round, $3m+ Series A.",
    ],

    Cost: {
      Commitment: "Commitment to the process",
      Donation: "1% of successful fundraise donated to a program/initiative/NGO of choice",
      Agreement: "To be agreed upon by the end of the first call.",
    },
  },
}

const metadata: Metadata = {
  title: companyData.companyName,
  twitter: {
    card: "summary_large_image",
  },

  openGraph: {
    url: "https://www.qtfenergy.com/",
    title: companyData.companyName,
    description: "Solar energy solutions for your business",
    siteName: companyData.companyName,

    images: [
      {
        width: 1200,
        height: 630,
        url: "https://github.com/QorePay-Technology-Solutions/qtf-energy-webapp/blob/main/public/logo.svg",
      },
    ],
  },
  other: {},
}

export default function Web() {
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
          src="/images/panelcars.png"
          alt="Solar Panels"
          className="hidden max-w-[50%] object-contain p-5 md:block"
        />
      </div>
      <Stats />
      <Badge className="w-fit self-center rounded-full px-4" variant="outline">
        TRUSTED BY
      </Badge>
      <div className="mx-auto flex w-full items-center justify-center gap-4 px-4 py-10" id="process">
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
          title: "Are you a great fit for us?",
          description: companyData.TargetStartups.Criteria,
          image: "/images/panels3.png",
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
          image: "/images/panels3.png",
          position: "left",
        }}
      />
      {/* <JoinUsBanner /> */}
      <div className="mb-5" />
    </section>
  )
}
