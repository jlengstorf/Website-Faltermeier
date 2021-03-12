import React from "react";

import Herosection from "../components/Herosection";
import News from "../components/News";
import Benefits from "../components/Benefits";
import Services from "../components/Services";
import Methods from "../components/Methods";
import Contact from "../components/Contact";

export const IndexPageTemplate = ({
  herosection,
  news,
  benefits,
  services,
  methods,
  contact,
}) => {
  return (
    <React.Fragment>
      <Herosection herosection={herosection} />
      <News news={news} />
      <Benefits benefits={benefits} />
      <Services services={services} />
      <Methods methods={methods} />
      <Contact contact={contact} herosection={herosection} />
    </React.Fragment>
  );
};
