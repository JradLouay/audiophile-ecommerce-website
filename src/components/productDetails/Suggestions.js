import React from "react";
import SuggestionItem from "./SuggestionItem";

function Suggestions() {
  return (
    <div className="container grid md:grid-cols-3 gap-y-[56px] gap-x-[11px] lg:gap-x-[30px]">
      <SuggestionItem />
      <SuggestionItem />
      <SuggestionItem />
    </div>
  );
}

export default Suggestions;
