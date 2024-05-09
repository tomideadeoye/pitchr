"use client"

import { companyData } from "app/Home"
import CountUp from "react-countup"

const Stats = () => {
  return (
    <div className="flex  w-full  items-center justify-center gap-16 bg-white">
      <div className="flex flex-col items-center">
        <h3 className="text-center text-5xl font-extrabold leading-tight text-primary">
          <CountUp end={companyData.Metrics.VCExperienceYears} duration={3} />+
        </h3>
        <p className="text-dark-grey-600 text-center text-base font-medium leading-7">Years of VC Experience</p>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-center text-5xl font-extrabold leading-tight text-primary">
          <CountUp end={companyData.Metrics.VCInvestorsNetwork} duration={3} />+
        </h3>
        <p className="text-dark-grey-600 text-center text-base font-medium leading-7">Network of VC Investors</p>
      </div>
    </div>
  )
}

export default Stats
