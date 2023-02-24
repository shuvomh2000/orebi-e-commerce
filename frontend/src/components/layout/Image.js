import React from "react";

const Image = ({ className, src }) => {
  return (
    <div className={className}>
      <picture>
        <img src={src} />
      </picture>
    </div>
  );
};

export default Image;
