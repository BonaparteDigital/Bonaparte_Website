import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const Home: React.FC<PageProps> = () => {
  return (
    <main id='content' className="bg-gradient-to-b from-olive from-50% via-olive via-50% to-green to-100% gradient h-screen flex flex-col justify-center max-w">
      <div className="flex flex-col justify-center items-center space-y-6">
        <h1 className="flex flex-col text-4xl font-semibold text-green  items-center">
          <span className="font-mulish-700 text-8xl">BONAPARTE</span>
          <span className="font-raleway text-5xl">DIGITAL STRATEGIST</span>
        </h1>
        <h2>
          <button className='text-gray-100 font-raleway rounded-full bg-orange hover:bg-green transition duration-300 border-0 py-2 px-8 focus:outline-nonerounded text-lg'>
            <a href='https://calendly.com/hellobonaparte/meet-greet'>Book a RDV</a>
          </button>
        </h2>
        <div id='SemRush Agency Badge' className="flex flex-col justify-center items-center mt-20">
          <a href="https://www.semrush.com/agencies/bonaparte/" rel="noreferrer noopener" target="_blank" >
            <img src="https://static.semrush.com/agency-directory/shared/badge.svg" width="90" height="90" alt="Semrush certified agency partner badge" />
          </a>
        </div>
      </div>
      <footer className="text-gray-400 absolute bottom-0 inset-x-0 text-center py-5">
          <p>Copyrght © {new Date().getFullYear()} Bonaparte</p>
      </footer>
    </main>
    
  )
}

export default Home

export const Head: HeadFC = () => (
<>
<title>Bonaparte | Your Digital Strategist</title>
<meta name="description" content="We're not just a digital marketing agency; we're your strategic partners in world-class branding and digital domination. Forget buzzwords and fluff. We deliver hard-hitting results that last. Ready to conquer?" />
</>
)