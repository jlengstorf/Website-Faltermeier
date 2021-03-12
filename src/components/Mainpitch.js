import React from "react"

import remark from "remark";
import recommended from "remark-preset-lint-recommended";
import remarkHtml from "remark-html";

//import { useStaticQuery, graphql } from "gatsby";

const Mainpitch = ({ gridItems }) => {
  /* const data = useStaticQuery(graphql`
    query MainpitchQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
        frontmatter {
          mainpitch
        }
      }
    }
  `); */

  const content = remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(data.markdownRemark.frontmatter.mainpitch)
    .toString();

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};
export default Mainpitch;
