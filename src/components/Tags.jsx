import React from "react";

const Tags = ({ tag, type }) => {
  const types = ["info", "error", "success", "warning"];
  return (
    <div className={`badge badge-${types[type % types.length]} gap-2`}>
      {tag}
    </div>
  );
};

export default Tags;
