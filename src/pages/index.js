import React, { useState } from "react";
import Layout from "../components/layout";

const Home = () => {
    const [effectButtonOne, setEffectButtonOne] = useState(false);
    const [effectButtonTwo, setEffectButtonTwo] = useState(false);
    return (
        <Layout>

        </Layout>
);
};

export default Home;

export const Head = () => (
  <>
    <title>Bonaparte | Your Digital Strategist</title>
    <link
      as="font"
      crossorigin="anonymous"
      href="/fonts/Mulish.woff2"
      rel="preload"
      type="font/woff2"
    />
  </>
);