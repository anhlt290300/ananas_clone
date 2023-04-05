import React from "react";
import PropTypes from "prop-types";

const HomeBanner = ({ image, href }) => {
  return (
    <div className="mt-12 m-auto">
      <a href={href}>
        <img src={image} alt="" />
      </a>
    </div>
  );
};

HomeBanner.propTypes = {
  image: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default HomeBanner;
