"use client"
import { GetQuoteBanner } from "../components/GetQuoteBanner"
import { GridItemsDisplay } from "../components/GridItemsDisplay"
import GetQuoteButton from "components/GetQuoteButton"
import { Badge } from "@/components/ui/badge"
import Stats from "components/Stats"
import { Tooltip } from "components/Tooltip/Tooltip"
import { Team } from "../components/Team"
import FadeAnimations from "components/Animations"

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

  Stat: "Most founders get to close less than 5x of the investors they pitch to - we can help you 10x that outcome",
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
      twitter: "https://twitter.com/timmy_idowu",
    },
    {
      name: "Olumide Ashade",
      linkedin: "https://www.linkedin.com/in/olumide-ashade-7b4089162/",
      twitter: "https://twitter.com/OlumideAshade",
    },
    {
      name: "Carl Macaulay",
      linkedin: "https://www.linkedin.com/in/carlmacaulay/",
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

    Cost: [
      "Commitment to the process",
      "1% of successful fundraise donated to a program/initiative/NGO of choice",
      "To be agreed upon by the end of the first call.",
    ],
  },
}

export function Home() {
  return (
    <section className="mx-auto mt-[100px] flex max-w-screen-xl flex-col gap-[120px]  overflow-hidden bg-white  p-10 dark:bg-gray-900">
      <div className="flex max-w-screen-xl flex-col  items-start justify-start px-4 py-8  lg:py-16">
        <h1 className={`mb-4 max-w-3xl font-monument`}>{companyData.taglines[0]}</h1>
        <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
          {companyData.taglines[1]}
        </p>
        <GetQuoteButton />
      </div>
      <GridItemsDisplay />
      <div className="flex flex-col justify-between md:flex-row">
        <div className="flex max-w-lg flex-col items-start justify-start gap-8 px-4  py-8 lg:py-16">
          <p className="font-bold text-gray-500 dark:text-gray-400 md:text-lg lg:text-2xl">
            Why {companyData.companyName}?
          </p>
          <h1 className="text-lg md:text-2xl">{companyData.Stat}?</h1>
          <p className="font-light text-gray-500 dark:text-gray-400">{companyData.Description}</p>
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
            <Tooltip explainer={company.name} key={company.website}>
              <a href={company.website} className="flex w-[150px]  flex-col bg-[#ffffff]  shadow-xl">
                <figure className="flex items-center justify-center">
                  <img src={company.logo} alt="Card Preview" className="h-14 invert filter" />
                </figure>
              </a>
            </Tooltip>
          )
        })}
      </div>
      <hr className="border-gray-200 dark:border-gray-700" />
      <FadeAnimations fadeDirection="up">
        <GetQuoteBanner
          props={{
            title: "Value Added",
            description: companyData.ValueAdd,
            image: "/images/value.jpeg",
            position: "right",
            sectionId: "Value Added",
          }}
        />
      </FadeAnimations>

      <hr className="border-gray-200 dark:border-gray-700" />
      <div className="mx-auto w-full max-w-7xl bg-transparent px-4" aria-label="Progress steps" id="process">
        <ol className="grid auto-cols-fr grid-flow-col gap-5">
          {companyData.OurProcess.map((step, index) => (
            <li key={step} className="col-span-full sm:col-auto">
              <a
                href="/contact"
                className="group flex flex-col items-start gap-4 border-l-4 border-primary p-4 hover:border-primary-foreground sm:border-l-0 sm:border-t-4"
              >
                <p className="text-xl font-semibold uppercase tracking-wide text-primary group-hover:text-blue-900">{`STEP ${
                  index + 1
                }`}</p>

                <span className="text-base font-semibold text-gray-700">{step}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
      <hr className="border-gray-200 dark:border-gray-700" />
      <FadeAnimations fadeDirection="up">
        <Team />
      </FadeAnimations>
      <hr className="border-gray-200 dark:border-gray-700" />
      <FadeAnimations fadeDirection="up">
        <GetQuoteBanner
          props={{
            title: "A great fit?",
            description: companyData.TargetStartups.Criteria,
            image: "/images/match.jpeg",
            position: "right",
            sectionId: "fit",
            actionButton: <GetQuoteButton />,
          }}
        />
      </FadeAnimations>
      <hr className="border-gray-200 dark:border-gray-700" />
      <FadeAnimations fadeDirection="up">
        <GetQuoteBanner
          props={{
            title: "What will this cost you?",
            description: companyData.TargetStartups.Cost,
            image: "/images/costs.jpg",
            position: "left",
            sectionId: "cost",
            actionButton: <GetQuoteButton />,
          }}
        />
      </FadeAnimations>
      {/* <JoinUsBanner /> */}
    </section>
  )
}
