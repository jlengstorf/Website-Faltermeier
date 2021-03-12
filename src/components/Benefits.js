import React from "react";

import { Link } from "gatsby";

import remark from "remark";
import recommended from "remark-preset-lint-recommended";
import remarkHtml from "remark-html";

const Benefits = ({ benefits }) => {
  const [mobileShowAll, setMobileShowAll] = React.useState(false);

  function toggleMobileShowAll() {
    setMobileShowAll(!mobileShowAll);
  }

  const description1 = remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(benefits.description1)
    .toString();
  const description2 = remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(benefits.description2)
    .toString();

  return (
    <div
      id="konzept"
      class="px-5 mini:px-25p mt-100p sm:mt-200p max-w-1000p mx-auto text-center"
    >
      <h2 class="mb-15p sm:mb-30p text-primary font-bold text-25p sm:text-40p">
        {benefits.title}
      </h2>
      <h3 class="mb-40p sm:mb-80p text-secondary font-medium text-20p sm:text-25p">
        {benefits.subtitle}
      </h3>
      <div class="flex flex-col sm:flex-row sm:justify-around w-full">
        {benefits.blurbs.map((item) => (
          <div key={item.text} class="w-full sm:w-1/3 sm:mb-50p">
            <img
              class="mx-auto w-1/4 mb-20p sm:mb-30p"
              loading="lazy"
              src={item.imageObject.image.publicURL}
              alt={item.imageObject.alt}
            />
            <h4 class="mb-35p sm:mb-0 text-primary font-semibold text-18p sm:text-25p">
              {item.title}
            </h4>
          </div>
        ))}
      </div>
      <div
        class="markdown text-center"
        dangerouslySetInnerHTML={{ __html: description1 }}
      />
      <div
        class={`${
          !mobileShowAll ? "hidden" : "block"
        } md:block markdown text-center mb-50p`}
        dangerouslySetInnerHTML={{ __html: description2 }}
      />
      <button
        onClick={toggleMobileShowAll}
        onKeyDown={toggleMobileShowAll}
        class={`${mobileShowAll ? "hidden": "block"} md:hidden text-15p mini:text-16p sm:text-18p text-secondary font-semibold mt-25p mx-auto `}
      >
        {benefits.mobileCta}
      </button>

      <Link
        class={`${!mobileShowAll ? "hidden" : "block"} md:block text-cta font-semibold text-20p sm:text-25p`}
        to={benefits.benefitsLink.linkUrl}
      >
        {benefits.benefitsLink.linkText}
      </Link>
    </div>
  );
};

export default Benefits;
