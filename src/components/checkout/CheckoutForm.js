"use client";
import { useFormContext } from "react-hook-form";
import Image from "next/image";

function CheckoutForm() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  const paymentMethod = watch("paymentMethod");

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
        <div className="relative flex flex-col gap-[9px] md:col-span-2">
          <label htmlFor="address" className="label">
            Address
          </label>
          {errors.address && (
            <span className="label absolute right-0 top-0 text-[#CD2C2C]">
              Address is required
            </span>
          )}
          <input
            className={`${errors.address && "border-2 border-red-600"}`}
            {...register("address", { required: true })}
            id="address"
            placeholder="1137 Williams Avenue"
          />
        </div>
        <div className="relative flex flex-col gap-[9px]">
          <label htmlFor="zip" className="label">
            ZIP Code
          </label>
          {errors.zipCode && (
            <span className="label absolute right-0 top-0 text-[#CD2C2C]">
              ZIP Code is required
            </span>
          )}
          <input
            className={`${errors.zipCode && "border-2 border-red-600"}`}
            {...register("zipCode", { required: true })}
            id="zip"
            placeholder="10001"
          />
        </div>
        <div className="relative flex flex-col gap-[9px]">
          <label htmlFor="city" className="label">
            City
          </label>
          {errors.city && (
            <span className="label absolute right-0 top-0 text-[#CD2C2C]">
              City is required
            </span>
          )}
          <input
            className={`${errors.city && "border-2 border-red-600"}`}
            {...register("city", { required: true })}
            id="city"
            placeholder="New york"
          />
        </div>
        <div className="relative flex flex-col gap-[9px]">
          <label htmlFor="country" className="label">
            Country
          </label>
          {errors.country && (
            <span className="label absolute right-0 top-0 text-[#CD2C2C]">
              Country is required
            </span>
          )}
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
        <label
          className={`flex cursor-pointer gap-4 rounded-lg border border-stone-300 pb-[18px] pl-4 pr-4 pt-[18px] hover:border hover:border-[#D87D4A] ${paymentMethod == "emoney" && "!border-[#D87D4A]"}`}
          htmlFor="emoney"
        >
          <input
            type="radio"
            id="emoney"
            value="emoney"
            {...register("paymentMethod")}
          />
          <span className="label">e-Money</span>
        </label>
        <label
          htmlFor="cashondelivery"
          className={`flex cursor-pointer gap-4 rounded-lg border border-stone-300 pb-[18px] pl-4 pr-4 pt-[18px] hover:border hover:border-[#D87D4A] ${paymentMethod == "cash" && "!border-[#D87D4A]"}`}
        >
          <input
            type="radio"
            id="cashondelivery"
            value="cash"
            {...register("paymentMethod")}
          />
          <span className="label">Cash on delivery</span>
        </label>
        {paymentMethod == "cash" && (
          <div className="flex items-center gap-6 md:col-span-2">
            <Image
              height={48}
              width={48}
              src="/assets/checkout/icon-cash-on-delivery.svg"
              alt="icon-cash-on-delivery"
            />
            <p className="body text-black opacity-50">
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        )}
        {paymentMethod === "emoney" && (
          <>
            {" "}
            <div className="relative flex flex-col gap-[9px]">
              <label htmlFor="emoney-number" className="label">
                e-Money Number
              </label>
              {errors.emoneyNumber && (
                <span className="label absolute right-0 top-0 text-[#CD2C2C]">
                  Country is required
                </span>
              )}
              <input
                className={`${errors.emoneyNumber && "border-2 border-red-600"}`}
                {...register("emoneyNumber", { required: true })}
                id="emoney-number"
                placeholder="238521993"
              />
            </div>
            <div className="relative flex flex-col gap-[9px]">
              <label htmlFor="emoney-pin" className="label">
                e-Money PIN
              </label>
              {errors.emoneyPin && (
                <span className="label absolute right-0 top-0 text-[#CD2C2C]">
                  Country is required
                </span>
              )}
              <input
                className={`${errors.emoneyPin && "border-2 border-red-600"}`}
                {...register("emoneyPin", { required: true })}
                id="emoney-pin"
                placeholder="238521993"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CheckoutForm;
