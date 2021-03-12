import React from "react";

import PreviewCompatibleImage from "./PreviewCompatibleImage";

//import { useStaticQuery, graphql } from "gatsby";

const TeamGrid = ({ items }) => {
  /* const data = useStaticQuery(graphql`query TeamQuery {
  markdownRemark {
    frontmatter {
      team {
        title
        teamMember {
          description
          fullName
          imageObject {
            alt
            title
            image {
              childImageSharp {
                gatsbyImageData(layout: FLUID)
              }
            }
          }
        }
      }
    }
  }
}
`); */

  return (
    <div id="Praxisteam">
      <div>
        <h2>{data.markdownRemark.frontmatter.team.title}</h2>
      </div>
      <div>
        <div>
          {data.markdownRemark.frontmatter.team.teamMember.map((item) => (
            <div>
              <div>
                <PreviewCompatibleImage
                  title={item.imageObject.title}
                  alt={item.imageObject.alt}
                  childImageSharp={item.imageObject.image.childImageSharp}
                  image={item.imageObject.image}
                />
              </div>
              <div className="teamDescription">
                <h4>{item.fullName}</h4>
                {!!item.description && <p>{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamGrid;
