import React from "react";

function Features({ features }) {
  return (
    <div className="flex max-w-[635px] flex-col gap-8">
      <h3>FEATURES</h3>
      <p className="body text-black opacity-50">{features}</p>
    </div>
  );
}

export default Features;
