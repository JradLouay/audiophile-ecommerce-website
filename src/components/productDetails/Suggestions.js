import React from "react";
import SuggestionItem from "./SuggestionItem";

function Suggestions({ suggestions }) {
  return (
    <div className="container grid gap-x-[11px] gap-y-[56px] md:grid-cols-3 lg:gap-x-[30px]">
      {suggestions.map((suggestion) => (
        <SuggestionItem key={suggestion.slug} suggestion={suggestion} />
      ))}
    </div>
  );
}

export default Suggestions;
