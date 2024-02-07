import React, { Fragment, ReactNode } from "react";

import { Dialog, Transition } from "@headlessui/react";
import Portal from "../Portal";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  children: ReactNode | any;
  overflowHidden?: boolean;
  rounded?: boolean;
};

const Modal = ({
  isOpen,
  onClose,
  title = "",
  description = "",
  size = "sm",
  children,
  overflowHidden = true,
  rounded = false,
}: ModalProps) => {
  const sizes = {
    sm: "max-w-[400px]",
    md: "max-w-[600px]",
    lg: "max-w-[800px]",
    xl: "max-w-[1000px]",
    "2xl": "max-w-[1200px]",
  };

  return (
    <Portal>
      <Transition appear show={isOpen} as={Fragment}>
        {isOpen ? (
          <Dialog as="div" className="relative z-50" onClose={onClose}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex items-center justify-center min-h-full p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel
                    className={`flex w-full transform flex-col gap-4 bg-white p-6 text-left align-middle shadow-xl transition-all 
                    ${rounded ? "rounded-md" : "rounded-none"}
                    ${sizes[size]} ${overflowHidden && "overflow-hidden"}`}
                  >
                    {title && (
                      <Dialog.Title
                        as="h3"
                        className={`text-3xl font-medium leading-6 text-gray-900`}
                      >
                        {title}
                      </Dialog.Title>
                    )}
                    {description && (
                      <Dialog.Description
                        as="h4"
                        className={`text-lg font-medium leading-6 text-gray-900`}
                      >
                        {description}
                      </Dialog.Description>
                    )}

                    {children}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        ) : (
          <div></div>
        )}
      </Transition>
    </Portal>
  );
};

export default Modal;
