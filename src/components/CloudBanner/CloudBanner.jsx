import React from "react";

// todo why is the image squished?
export const CloudBanner = ({ cloudImgUrl }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end"
      }}
    >
      <div>
        <img src={cloudImgUrl} height="50" width="120" />
      </div>
    </div>

  )
}

export default CloudBanner;