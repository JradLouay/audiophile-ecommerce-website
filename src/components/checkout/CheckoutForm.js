"use client";
import { useFormContext } from "react-hook-form";

function CheckoutForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="col-span-2 rounded-lg bg-white pb-12 pl-12 pr-12 pt-[54px]">
      <h3 className="mb-10">Checkout</h3>
      <p className="subtitle text-[#D87D4A]">Billing Details</p>
      <div className="mb-[53px] mt-4 grid gap-x-4 gap-y-6 md:grid-cols-2">
        <div className="relative flex flex-col gap-[9px]">
          <label htmlFor="name" className="label">
            Name
          </label>
          {errors.name && (
            <span className="label absolute right-0 top-0 text-[#CD2C2C]">
              Name is Required
            </span>
          )}
          <input
            className={`${errors.name && "border-2 border-red-600"}`}
            {...register("name", { required: true })}
            id="name"
            placeholder="Alexei Ward"
          />
        </div>
        <div className="relative flex flex-col gap-[9px]">
          <label htmlFor="email" className="label">
            Email Address
          </label>
          {errors.email && (
            <span className="label absolute right-0 top-0 text-[#CD2C2C]">
              {errors.email.type === "required"
                ? "Email is Required"
                : "Wrong format"}
            </span>
          )}
          <input
            className={`${errors.email && "border-2 border-red-600"}`}
            id="email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            placeholder="jrad.louay@outlook.com"
          />
        </div>
        <div className="relative flex flex-col gap-[9px]">
          <label htmlFor="phone" className="label">
            Phone Number
          </label>
          {errors.phoneNumber && (
            <span className="label absolute right-0 top-0 text-[#CD2C2C]">
              Phone Number is required
            </span>
          )}
          <input
            className={`${errors.phoneNumber && "border-2 border-red-600"}`}
            type="number"
            {...register("phoneNumber", { required: true })}
            id="phone"
            placeholder="+1 (202) 555-0136"
          />
        </div>
      </div>
      <p className="subtitle text-[#D87D4A]">shipping info</p>
      <div className="mb-[53px] mt-4 grid gap-x-4 gap-y-6 md:grid-cols-2">
        <div className="flex flex-col gap-[9px] md:col-span-2">
          <label htmlFor="address" className="label">
            Address
          </label>
          <input
            className={`${errors.address && "border-2 border-red-600"}`}
            {...register("address", { required: true })}
            id="address"
            placeholder="1137 Williams Avenue"
          />
        </div>
        <div className="flex flex-col gap-[9px]">
          <label htmlFor="zip" className="label">
            ZIP Code
          </label>
          <input
            className={`${errors.zipCode && "border-2 border-red-600"}`}
            {...register("zipCode", { required: true })}
            id="zip"
            placeholder="10001"
          />
        </div>
        <div className="flex flex-col gap-[9px]">
          <label htmlFor="city" className="label">
            City
          </label>
          <input
            className={`${errors.city && "border-2 border-red-600"}`}
            {...register("city", { required: true })}
            id="city"
            placeholder="New york"
          />
        </div>
        <div className="flex flex-col gap-[9px]">
          <label htmlFor="country" className="label">
            Country
          </label>
          <input
            className={`${errors.country && "border-2 border-red-600"}`}
            {...register("country", { required: true })}
            id="country"
            placeholder="United States"
          />
        </div>
      </div>
      <p className="subtitle text-[#D87D4A]">payment details</p>
      <div className="mb-[53px] mt-4 grid gap-x-4 gap-y-6 md:grid-cols-2">
        <label className="label md:row-span-2">Payment Method</label>
        {/* <fieldset> */}
        <label
          className={`flex gap-4 rounded-lg border border-stone-300 pb-[18px] pl-4 pr-4 pt-[18px] ${false && "border-2 border-red-600"}`}
          htmlFor="emoney"
        >
          <input
            type="radio"
            id="emoney"
            name="payment-method"
            value="emoney"
          />
          <span className="label">e-Money</span>
        </label>
        <label
          htmlFor="cashondelivery"
          className="flex gap-4 rounded-lg border border-stone-300 pb-[18px] pl-4 pr-4 pt-[18px]"
        >
          <input
            type="radio"
            id="cashondelivery"
            name="payment-method"
            value="cash"
          />
          <span className="label">Cash on delivery</span>
        </label>
        {/* </fieldset> */}
        <div className="flex flex-col gap-[9px]">
          <label htmlFor="emoney-number" className="label">
            e-Money Number
          </label>
          <input
            className={`${errors.emoneyNumber && "border-2 border-red-600"}`}
            {...register("emoneyNumber")}
            id="emoney-number"
            placeholder="238521993"
          />
        </div>
        <div className="flex flex-col gap-[9px]">
          <label htmlFor="emoney-pin" className="label">
            e-Money PIN
          </label>
          <input
            className={`${errors.emoneyPin && "border-2 border-red-600"}`}
            {...register("emoneyPin")}
            id="emoney-pin"
            placeholder="238521993"
          />
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
