"use client";

import Image from "next/image";
import { Fragment, useState } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { useForm, FormProvider } from "react-hook-form";

import CheckoutForm from "@/components/checkout/CheckoutForm";

function FormComponent({ children }) {
  const methods = useForm();
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function onSubmit(data) {
    console.log(data);
    setIsOpen(true);
  }
  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-[30px] lg:grid-cols-3"
        >
          <CheckoutForm />
          {children}
        </form>
      </FormProvider>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black opacity-40" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-6 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="max-w-[540px] transform overflow-hidden rounded-lg bg-white p-8 text-left transition-all md:p-12">
                  <Image
                    className="mb-8"
                    src={"/assets/checkout/icon-order-confirmation.svg"}
                    height={64}
                    width={64}
                    alt="order confirmation"
                  />
                  <h3 className="mb-6">THANK YOU FOR YOUR ORDER</h3>
                  <p className="body mb-6 text-black opacity-50">
                    You will receive an email confirmation shortly.
                  </p>
                  <div className="flex flex-col rounded-lg bg-zinc-100 md:flex-row">
                    <div className="flex flex-col gap-3 p-6 md:w-[246px]">
                      <div className="flex justify-between">
                        <div className="flex gap-4">
                          <Image
                            src={
                              "/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
                            }
                            alt="product"
                            width={50}
                            height={50}
                          />
                          <div className="flex flex-col">
                            <p className="body !font-bold">XX99 MK II</p>
                            <p className="subtitle text-black opacity-50 ">
                              $ 2,999
                            </p>
                          </div>
                        </div>
                        <p className="body !font-bold">x1</p>
                      </div>
                      <div className="h-px bg-black opacity-10" />
                      <button className="label font-bold !lowercase text-black opacity-50">
                        and 2 other item(s)
                      </button>
                    </div>
                    <div className="flex flex-grow flex-col items-start justify-center gap-2 rounded-bl-lg rounded-br-lg bg-black pb-[19px] pl-6 pt-[15px] md:rounded-e-lg">
                      <p className="body text-white opacity-50">GRAND TOTAL</p>
                      <p className="body text-right text-white">$ 5,446</p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="mt-[46px] w-full bg-[#D87D4A] pb-[15px] pt-[15px] text-white"
                  >
                    Back to home
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default FormComponent;
