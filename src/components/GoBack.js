"use client";

function GoBack() {
  function goBack() {
    window.history.back();
  }
  return (
    <button
      onClick={goBack}
      className="body normal-case opacity-50 hover:text-[#D87D4A] hover:opacity-100"
    >
      Go back
    </button>
  );
}

export default GoBack;
