"use client";

import CheckoutForm from "@/components/checkout/CheckoutForm";
import Summary from "@/components/checkout/Summary";
import { useForm, FormProvider } from "react-hook-form";

function FormComponent() {
  const methods = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-[30px] lg:grid-cols-3"
      >
        <CheckoutForm />
        <Summary />
      </form>
    </FormProvider>
  );
}

export default FormComponent;
