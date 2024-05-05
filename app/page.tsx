import { Metadata } from "next"
import Link from "next/link"
import { FAQAccordion } from "../components/FAQAccordion"
import { GetQuoteBanner } from "../components/GetQuoteBanner"
import { GridItemsDisplay } from "../components/GridItemsDisplay"
import GetQuoteButton from "components/GetQuoteButton"
import { JoinUsBanner } from "components/JoinUsBanner"
import { Badge } from "@/components/ui/badge"

export const companyData = {
  companyName: "PitchR Africa",
  contact: {
    websites: ["www.pitchr.africa"],
    emails: ["info@pitchr.africa"],
    phones: ["08157083837"],
    addresses: ["Co-Working Space X"],
    socialMedia: [],
  },
  taglines: ["Fundraise with Ease", `Deliver your best Pitch to Investors with PitchR, Fundraise with Ease`],

  Stat: "Most founders get to close less than 5x of the investors they pitch to - we can help you 10x that outcome.",
  Description:
    "Our aim is to improve fundraising outcomes for founders and get you to give your best pitch to the next investors you engage with.",
  Mission: "To prepare and set up founders for a successful fundraiser.",
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
      name: "Timilehin Idowu",
      Bio: "djv.kaljfbfjdl;kajsgblwekr;fasbfne",
      linkedin: "https://www.linkedin.com/in/timileyin-idowu-507523146/",
      twitter: "",
    },
    {
      name: "Olumide Ashade",
      Bio: "full/partial Bio",
      linkedin: "https://www.linkedin.com/in/olumide-ashade-7b4089162/",
      twitter: "https://twitter.com/OlumideAshade",
    },
    {
      name: "Carl Macaulay",
      Bio: "full/partial Bio",
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
  FoundersOfficeHours: {
    ValueAdd: [
      "Review and get Feedback on your startup Pitch to investors",
      "6-Months fundraising support",
      "VC ecosystem support",
      "Fundraising database management",
      "Extensive Investment network",
    ],
    Metrics: {
      VCExperienceYears: "5+",
      VCInvestorsNetwork: "30+",
    },
    OurScope: "A list of 30+ investors",
    Cost: {
      Commitment: "Commitment to the process",
      Donation: "1% of successful fundraise donated to a program/initiative/NGO of choice",
      Agreement: "To be agreed upon by the end of the first call.",
    },
    TargetStartups: {
      Criteria: [
        "Founders with a proven track record of building something helpful.",
        "Already begun fundraising journey/progress",
        "Raising $300k+ for Pre-Seed round, $1m+ for Seed Round, $3m+ Series A.",
      ],
    },
    ActionButtons: ["Reach out to us", "Recommend a startup"],
  },
  AdditionalInformation: {
    ValueAddDetails: [
      "Pitch Feedback/Pitch Review",
      "Knowledge of What to do: Dataroom, how to share resources, how to send cold emails and connect with VCs",
      "Create a knowledge-valuable database for startups e.g., sample data room, financial model, market sizing, how to send cold emails.",
      "Successful founders will be connected to our co-investing networks and visibility on our platform.",
    ],
    TeamSetup: {
      VCTeam: "Diverse people from different African markets and external markets",
      IndustryBasedExperience: [
        "Consultants",
        "CFO",
        "Operators",
        "Human Resources",
        "Venture Legals",
        "Media",
        "Marketing",
      ],
    },
    QualityControl: {
      Hours: "Stipulate number of hours",
      Skills: "Outline Individual skill sets",
      Documentation: [
        "Create a system such as documentation",
        "Process of interacting with founders and closing the loop",
        "Create a level of standardisation",
        "System for enlisting third parties",
        "Systems for external communications",
      ],
    },
    RecommendedNames: [
      "VentureZen Network",
      "GrowthBridge Collective",
      "GrowthPulse Africa",
      "Emerge Circle",
      "TechFusion Hub",
      "Pitchr",
      "Duzi",
      "Tilt",
    ],
    KnowledgeDatabase: [
      "Pitchdeck 101",
      "Pitching 101",
      "Investor Database & Emails",
      "Hiring your first set of employees",
      "Navigating Co-founder conflicts",
    ],
    BarrelAsks: [
      "Investor Deck",
      "Hiring engineer, PM",
      "Intro to customers",
      "Setting Valuation",
      "Thinking through the business model",
    ],
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
  const qtfAchievements: { icon: string; title: string; description: string }[] = [
    {
      icon: "sun.svg",
      title: "Over 15 years of solar expertise",
      description:
        "Our seasoned professionals leverage this knowledge to deliver cutting-edge solar solutions, ensuring efficiency, reliability, and innovation in every project.",
    },
    {
      icon: "headphone.svg",
      title: "Impeccable customer service",
      description:
        "At {companyData.companyName}, our commitment goes beyond solar panels. We prioritize impeccable customer service, ensuring a seamless experience from consultation to installation.",
    },
    {
      icon: "solar.svg",
      title: "Reliable and sustainable energy at any scale",
      description:
        "Whether for organizations or apartment complexes, our tailored solar systems are designed to meet your specific energy requirements, providing a consistent and eco-friendly power source for a greener future.",
    },
    {
      icon: "solarhome.svg",
      title: "Absolute autonomy without the hassel",
      description:
        "{companyData.companyName} simplifies the transition to solar power, offering user-friendly solutions that grant you independence from traditional energy sources.",
    },
  ]

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

      <Badge className="w-fit self-center rounded-full px-4" variant="outline">
        TRUSTED BY MODERN COMPANIES
      </Badge>
      <div className="mx-auto flex w-full items-center justify-center gap-4 bg-black px-4 py-10">
        {companyData.PortfolioStartups.map((company) => {
          return (
            <a href={company.website}>
              <img src={company.logo} alt="" className="max-h-8 " />
            </a>
          )
        })}
      </div>

      <div>
        <div className="flex items-center justify-center bg-muted">
          <div className="flex max-w-screen-2xl flex-col items-start justify-start gap-6 px-4 py-8 lg:py-16 ">
            <p className="font-bold dark:text-gray-400">Projects </p>
            <h1 className="max-w-2xl text-3xl">Get a glimpse of our incredible works</h1>
            <div className="flex flex-col items-center justify-end md:flex-row">
              <img
                src="images/electro.png"
                alt="Solar Panels"
                className="order-2 max-w-[50%] object-contain p-5 md:block"
              />
              <img
                src="images/zure.png"
                alt="qtf projects"
                className={`order-2 max-w-[50%] object-contain p-5 md:block`}
              />
            </div>

            <div className="flex items-center justify-end gap-2 self-end">
              <img src="icons/leftprojectnav.svg" alt="Solar Panels" className="w-20" />
              <img
                src="icons/leftprojectnav.svg"
                alt="Solar Panels"
                className="w-20"
                style={{ transform: "scaleX(-1)" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p>Our Customers</p>
        <h3 className="max-w-md text-xl font-extrabold dark:text-white">
          Solar farms, Apartments, organisations & homes
        </h3>
      </div>

      <GetQuoteBanner
        props={{
          title: "Experience the ultimate Personalized Services we have to offer",
          description:
            "Discover the ultimate in personalized services as we tailor our solutions to meet your unique energy needs. At {companyData.companyName}, we go beyond the conventional, ensuring your experience is not just efficient but precisely crafted to fit your goals and aspirations.",
          image: "/images/panels1.png",
          position: "left",
        }}
      />
      <GetQuoteBanner
        props={{
          title: "Regardless of your needs our custom solar designs have you covered",
          description: `Your energy needs, our custom solutions. {companyData.companyName} ensures that, regardless of your requirements, our custom solar designs have you covered. From tailored solutions for organizations to efficient designs for apartment complexes, our commitment is to provide comprehensive and personalized solar solutions that perfectly match your unique needs.`,
          image: "/images/panels2.png",
          position: "right",
        }}
      />
      <GetQuoteBanner
        props={{
          title: "The ultimate guarantee for years to come, no need to worry",
          description: `Our commitment to reliability and sustainability ensures that your investment in solar energy is backed by a steadfast promise of long-term performance. Rest easy knowing that with {companyData.companyName}, your energy future is secure, and there's no need for concerns.`,
          image: "/images/panels3.png",
          position: "left",
        }}
      />
      <FAQAccordion />
      <Link href="/faq" className="self-center">
        Read more FAQ
      </Link>
      <JoinUsBanner />
      <div className="mb-5" />
    </section>
  )
}
