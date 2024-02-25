import Link from "next/link";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import Summary from "@/components/checkout/Summary";

function CheckoutPage() {
  return (
    <div className="bg-zinc-100 pb-24 md:pb-[116px] lg:pb-[141px]">
      <div className="container">
        <div className="pt-[38px]">
          <Link href={""} className="body opacity-50">
            Go back
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-[30px] lg:grid-cols-3">
          <CheckoutForm />
          <Summary />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
