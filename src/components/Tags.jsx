import React from "react";

const Tags = ({ tag, type }) => {
  const types = ["info", "error", "success", "warning"];
  return <div className={`badge badge-neutral gap-2`}>{tag}</div>;
};

export default Tags;
