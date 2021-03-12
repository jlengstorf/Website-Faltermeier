import React from "react";

import remark from "remark";
import recommended from "remark-preset-lint-recommended";
import remarkHtml from "remark-html";

const News = ({ news }) => {

  if (news.content !== "") {
    const content = remark()
      .use(recommended)
      .use(remarkHtml)
      .processSync(news.content)
      .toString()
      .replace("<h1>", "<h3>")
      .replace("</h1>", "</h3>")
      .replace("<h1>", "<h3>")
      .replace("</h1>", "</h3>")
      .replace("<h1>", "<h3>")
      .replace("</h1>", "</h3>")
      .replace("<h1>", "<h3>")
      .replace("</h1>", "</h3>")
      .replace("<h1>", "<h3>")
      .replace("</h1>", "</h3>");

    return (
      <div id="aktuelles" class="px-5 mini:px-25p pt-100p sm:pt-80p max-w-1000p mx-auto mt-96 midi:mt-80 sm:mt-72 md:mt-27rem lg:mt-0">
        <h2 class="mb-15p sm:mb-30p text-primary font-bold text-center text-25p sm:text-40p">{news.title}</h2>
        <h3 class="mb-40p sm:mb-80p text-secondary font-medium text-center text-20p sm:text-25p">{news.subtitle}</h3>
        <div class="markdown text-center" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    );
  }
  return <div class="pt-96 midi:pt-80 sm:pt-72 md:pt-27rem lg:pt-0"/>
};
export default News;
