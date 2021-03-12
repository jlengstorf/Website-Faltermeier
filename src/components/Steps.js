import React from "react"

import PropTypes from "prop-types";

const Steps = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={item.title}>
          <div>
            <p>{index + 1}.</p>
          </div>
          <div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

Steps.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      description: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

export default Steps;
