import React from "react";

import Layout from "../components/Layout";

import { graphql, Link } from "gatsby";

import { ReactComponent as Zahnlücke } from "../img/zahnlücke.svg";

const NotFoundPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout
      herosection={frontmatter.herosection}
      content={frontmatter.news.content}
      contact={frontmatter.contact}
      footer={frontmatter.footer}
    >
      <div class="px-5 mini:px-25p mt-50p sm:mt-100p mx-auto text-center">
        <h1 class="mb-15p sm:mb-30p text-primary font-bold text-25p sm:text-40p">
          Diese Seite existiert nicht.
        </h1>
        <div class="mb-40p sm:mb-80p text-secondary font-medium text-center text-20p sm:text-25p">
          Es kann sein, dass sich diese Seite noch im Aufbau befindet. Wir
          bitten um ihre Geduld.
        </div>
        <Zahnlücke class="mb-40p sm:mb-80p w-4/12 mx-auto" />
        <Link class="text-cta font-semibold text-20p sm:text-25p" to="/">
          Zurück zum Start
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const notFoundQuery = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        contact {
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
          email
          subtitle
          telephone
          telephoneLink
        }
        news {
          content
        }
        templateKey
      }
    }
  }
`;
