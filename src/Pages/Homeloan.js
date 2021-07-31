import React, { useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/Homeloan/Banner";
import CurrentIntrestRate from "../Components/PagesComponents/Homeloan/CurrentIntrestRate";
import Faq from "../Components/PagesComponents/Homeloan/Faq";
import HowItWorks from "../Components/PagesComponents/Homeloan/HowItWorks";

const Homeloan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Banner />
      <CurrentIntrestRate />
      <HowItWorks />
      <Faq />
    </Layout>
  );
};

export default Homeloan;
