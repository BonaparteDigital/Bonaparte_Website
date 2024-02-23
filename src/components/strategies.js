import * as React from "react"

import Step1 from "../assets/enhance_visibility.svg";
import Step2 from "../assets/optimize_engagement.svg";
import Step3 from "../assets/streamline_operations.svg";
import Step4 from "../assets/boost_sales.svg";

const Strategies = () => {
    return (
        <div id="strategies" className="container text-green">
            <div className="text-center md:text-left md:w-[520px]">
              <h2 className="text-5xl font-bold mb-10 md:text-5xl">Accelerate Your Business <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange relative inline-block">
            <span className="relative text-white">Growth</span>
            </span></h2>
              <p className="text-lg">Unlock your business's full potential and command the battlefield with our comprehensive digital marketing services.</p>
            </div>
        <div className="max-w-4xl md:max-w-full mx-auto md:space-y-0 space-y-8 md:flex md:flex-row gap-8 md:gap-4">
          <div className="bg-green text-olive shadow-lg rounded-3xl p-8">
            <img src={Step1} alt="a magnifying glass" className="mb-2" />
            <h3 className="text-2xl font-semibold mb-2 md:text-xl">Enhance Visibility</h3>
            <p className="text-olive-light">Seize the spotlight and stand out from the competition with our comprehensive branding solutions that catapult your brand to the forefront.</p>
          </div>
          <div className="bg-green text-olive shadow-lg rounded-3xl p-8">
            <img src={Step2} alt="two people side by side" className="mb-2"/>
            <h3 className="text-2xl font-semibold mb-2 md:text-xl">Optimize Engagement</h3>
            <p className="text-olive-light">Rally a devoted audience with our engaging social media and killer content marketing, forging bonds that transform followers into ambassadors.</p>
          </div>
          <div className="bg-green text-olive shadow-lg rounded-3xl p-8">
            <img src={Step3} alt="two cogs working" className="mb-2"/>
            <h3 className="text-2xl font-semibold mb-2 md:text-xl">Streamline Operations</h3>
            <p className="text-olive-light">Sharpen efficiency and slash expenses with strategic insights and analytics, charting a course for smarter, cost-effective business decisions.</p>
          </div>
          <div className="bg-green text-olive shadow-lg rounded-3xl p-8">
            <img src={Step4} alt="an upwards trend on a chart" className="mb-2"/>
            <h3 className="text-2xl font-semibold mb-2 md:text-xl">Boost Sales</h3>
            <p className="text-olive-light">Launch an offensive on the market with precision-targeted SEO and impactful advertising campaigns, capturing leads and escalating customer acquisition.</p>
          </div>
        </div>
      </div>
  )
}

export default Strategies;