function CheckoutForm() {
  return (
    <div className="col-span-2 rounded-lg bg-white pb-12 pl-12 pr-12 pt-[54px]">
      <h3 className="mb-10">Checkout</h3>
      <p className="subtitle text-[#D87D4A]">Billing Details</p>
      <div className="mb-[53px] mt-4 grid gap-x-4 gap-y-6 md:grid-cols-2">
        <div className="flex flex-col gap-[9px]">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input id="name" placeholder="Alexei Ward" />
        </div>
        <div className="flex flex-col gap-[9px]">
          <label htmlFor="email" className="label">
            Email Address
          </label>
          <input id="email" placeholder="jrad.louay@outlook.com" />
        </div>
        <div className="flex flex-col gap-[9px]">
          <label htmlFor="phone" className="label">
            Phone Number
          </label>
          <input id="phone" placeholder="+1 (202) 555-0136" />
        </div>
      </div>
      <p className="subtitle text-[#D87D4A]">shipping info</p>
      <div className="mb-[53px] mt-4 grid gap-x-4 gap-y-6 md:grid-cols-2">
        <div className="flex flex-col gap-[9px] md:col-span-2">
          <label htmlFor="address" className="label">
            Address
          </label>
          <input id="address" placeholder="1137 Williams Avenue" />
        </div>
        <div className="flex flex-col gap-[9px]">
          <label htmlFor="zip" className="label">
            ZIP Code
          </label>
          <input id="zip" placeholder="10001" />
        </div>
        <div className="flex flex-col gap-[9px]">
          <label htmlFor="city" className="label">
            City
          </label>
          <input id="city" placeholder="New york" />
        </div>
        <div className="flex flex-col gap-[9px]">
          <label htmlFor="country" className="label">
            Country
          </label>
          <input id="country" placeholder="United States" />
        </div>
      </div>
      <p className="subtitle text-[#D87D4A]">payment details</p>
      <div className="mb-[53px] mt-4 grid gap-x-4 gap-y-6 md:grid-cols-2">
        <label className="label md:row-span-2">Payment Method</label>
        {/* <fieldset> */}
        <div className="flex gap-4 rounded-lg border border-stone-300 pb-[18px] pl-4 pr-4 pt-[18px]">
          <input
            type="radio"
            id="emoney"
            name="payment-method"
            value="emoney"
          />
          <label htmlFor="emoney" className="label">
            e-Money
          </label>
        </div>
        <div className="flex gap-4 rounded-lg border border-stone-300 pb-[18px] pl-4 pr-4 pt-[18px]">
          <input
            type="radio"
            id="cashondelivery"
            name="payment-method"
            value="cash"
          />
          <label htmlFor="cashondelivery" className="label">
            Cash on delivery
          </label>
        </div>
        {/* </fieldset> */}
        <div className="flex flex-col gap-[9px]">
          <label htmlFor="emoney-number" className="label">
            e-Money Number
          </label>
          <input id="emoney-number" placeholder="238521993" />
        </div>
        <div className="flex flex-col gap-[9px]">
          <label htmlFor="emoney-pin" className="label">
            e-Money PIN
          </label>
          <input id="emoney-pin" placeholder="238521993" />
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
