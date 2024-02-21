import React from "react";
import SuggestionItem from "./SuggestionItem";

function Suggestions() {
  return (
    <div className="container grid grid-cols-3 gap-[30px]">
      <SuggestionItem />
      <SuggestionItem />
      <SuggestionItem />
    </div>
  );
}

export default Suggestions;
