import Link from "next/link";
import FormComponent from "@/components/checkout/FormComponent";
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
        <FormComponent>
          <Summary />
        </FormComponent>
      </div>
    </div>
  );
}

export default CheckoutPage;
