import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>TITLE</h1>
      <p>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => (
  <>
  <html lang="en" />
  <title>Bonaparte | Not Found</title>
  <meta name="description" content="We're not just a digital marketing agency; we're your strategic partners in world-class branding and digital domination. Forget buzzwords and fluff. We deliver hard-hitting results that last. Ready to conquer?" />
  </>
)