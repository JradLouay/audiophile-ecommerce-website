import GoBack from "@/components/GoBack";
import FormComponent from "@/components/checkout/FormComponent";
import Summary from "@/components/checkout/Summary";

function CheckoutPage() {
  return (
    <div className="bg-zinc-100 pb-24 md:pb-[116px] lg:pb-[141px]">
      <div className="container">
        <div className="pb-[38px] pt-20">
          <GoBack />
        </div>
        <FormComponent>
          <Summary />
        </FormComponent>
      </div>
    </div>
  );
}

export default CheckoutPage;
