"use client";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CartItem from "./CartItem";

function CartMenu({ children }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <button className="group content-end" onClick={openModal}>
        {children}
      </button>
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

          <div className="fixed inset-0 overflow-y-auto pb-8">
            <div className="container flex min-h-full flex-row-reverse items-start text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="mt-[130px] w-[377px] transform overflow-hidden rounded-lg bg-white p-8 text-left transition-all">
                  <div className="flex justify-between text-black">
                    <h6>Cart ({3})</h6>
                    <button className="underline opacity-50">Remove all</button>
                  </div>
                  <div className="mb-8 mt-8 flex flex-col gap-6">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                  </div>
                  <div className="flex justify-between text-black">
                    <p className="body opacity-50">TOTAL</p>
                    <h6 className="text-right">$ 5,446</h6>
                  </div>
                  <Link
                    href="/checkout"
                    onClick={closeModal}
                    className="mt-6 flex w-full items-center justify-center bg-[#D87D4A] pb-[15px] pt-[15px] text-white hover:bg-[#FBAF85]"
                  >
                    CHECKOUT
                  </Link>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default CartMenu;
