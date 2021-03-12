import React from "react";

export const ImpressumPageTemplate = ({ html }) => {
  return (
    <React.Fragment>
      <section>
        <div>
          <div
            class="markdown px-5 mini:px-25p"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </section>
    </React.Fragment>
  );
};
