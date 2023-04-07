import React from "react";
import PropTypes from "prop-types";

const HomeBanner = ({ image, href }) => {
  return (
    <div className=" desktop-L:mt-12 desktop:mt-2 m-auto tablet:px-3">
      <a href={href} className="block">
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
