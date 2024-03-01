import Link from "next/link";

function GoBack() {
  return (
    <div className="pb-6 pt-[38px]">
      <Link href={""} className="body opacity-50">
        Go back
      </Link>
    </div>
  );
}

export default GoBack;
