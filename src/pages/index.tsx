import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import Logo from '../images/logo_bonaparte.svg'
import PFP from '../images/logo_pfp_bonaparte.svg'

const Home: React.FC<PageProps> = () => {
  return (
    <main id='content' className="bg-gradient-to-b from-olive from-50% via-olive via-50% to-green to-100% gradient h-screen flex flex-col justify-center max-w">
      <div className="flex flex-col justify-center items-center space-y-6">
        <h1 className="flex flex-col text-4xl font-semibold text-green  items-center">
          <Logo className='m-2' />
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
      <footer className="text-gray-400 body-font absolute bottom-0 inset-x-0 text-center py-5">
        <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
          <a id="logo_pfp" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-400">
{/*
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>            
*/}
            <span className="ml-3 text-xl">Bonaparte</span>
          </a>
          <p id="copyright" className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">Copyrght © {new Date().getFullYear()} Bonaparte</p>
          <p id="address" className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">1309 Coffeen Avenue STE 1200, Sheridan, Wyoming 82801</p>
          <span id="social-media" className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a id="x" className="ml-3 text-gray-500" href="https://twitter.com/HelloBonaparte">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a id="linkedin" className="ml-3 text-gray-500" href="https://www.linkedin.com/company/bonapartedigital/">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
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