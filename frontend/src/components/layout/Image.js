import React from "react";

const Image = ({ className, src }) => {
  return (
    <div >
      <picture>
        <img className={className} src={src} />
      </picture>
    </div>
  );
};

export default Image;
