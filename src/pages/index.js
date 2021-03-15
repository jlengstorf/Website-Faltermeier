import React from "react";

import { graphql } from "gatsby";

import { IndexPageTemplate } from "../templates/index-page";
import Layout from "../components/Layout";

import { Helmet } from "react-helmet";
import useSiteMetadata from "../components/SiteMetadata";
import { withPrefix } from "gatsby";

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { title, description } = useSiteMetadata();

  return (
    <React.Fragment>
      <Helmet>
        <html lang="de" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/Dr-Faltermeier.jpeg`}
        />
      </Helmet>
      <Layout>
        <IndexPageTemplate
          herosection={frontmatter.herosection}
          news={frontmatter.news}
          benefits={frontmatter.benefits}
          services={frontmatter.services}
          methods={frontmatter.methods}
          contact={frontmatter.contact}
        />
      </Layout>
    </React.Fragment>
  );
};

export default IndexPage;

export const query = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        benefits {
          benefitsLink {
            linkText
            linkUrl
          }
          blurbs {
            imageObject {
              alt
              title
              image {
                publicURL
              }
            }
            title
          }
          description1
          description2
          mobileCta
          subtitle
          title
        }
        contact {
          googleMapsLink
          subtitle
          title
          appointment {
            appointmentWishText
            title
            cta
          }
          attributes {
            description
            imageObject {
              alt
              title
              image {
                publicURL
              }
            }
          }
          openingHours {
            days {
              day
              times {
                time
              }
            }
            title
          }
        }
        footer {
          copyright
        }
        herosection {
          address
          contactText
          cta
          email
          subtitle
          telephone
          telephoneLink
          title
          imageObject {
            title
            alt
            image {
              childImageSharp {
                gatsbyImageData(quality: 80, formats: [AVIF, WEBP, AUTO])
              }
            }
          }
        }
        methods {
          method {
            description
            title
            imageObject {
              alt
              title
              image {
                childImageSharp {
                  gatsbyImageData(
                    formats: [AVIF, WEBP, AUTO]
                    quality: 80
                    layout: CONSTRAINED
                  )
                }
              }
            }
          }
          subtitle
          title
        }
        news {
          content
          subtitle
          title
        }
        services {
          subtitle
          title
          service {
            description
            title
            imageObject {
              alt
              title
              image {
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    quality: 80
                    formats: [AVIF, WEBP, AUTO]
                  )
                }
              }
            }
            serviceLink {
              linkText
              linkUrl
            }
          }
          servicesLink {
            linkText
            linkUrl
          }
        }
        templateKey
      }
    }
  }
`;
