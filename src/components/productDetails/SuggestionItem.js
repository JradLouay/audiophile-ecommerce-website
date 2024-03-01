import Link from "next/link";
import Image from "next/image";

function SuggestionItem({ suggestion }) {
  const link = `/${suggestion.category}/${suggestion.slug}`;
  return (
    <div className="flex flex-col">
      <div className="relative mb-10 h-[120px] place-items-center rounded-lg sm:h-[318px]">
        <Image
          className="rounded-lg"
          src={suggestion.image.desktop}
          fill
          alt={suggestion.name}
        />
      </div>
      <h5 className="mb-8 text-center text-black">{suggestion.name}</h5>
      <Link
        href={link}
        className="subtitle flex h-12 w-40 items-center justify-center place-self-center bg-[#D87D4A] text-white hover:bg-[#FBAF85]"
      >
        See Product
      </Link>
    </div>
  );
}

export default SuggestionItem;
