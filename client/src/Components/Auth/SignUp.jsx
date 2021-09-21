import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FcGoogle } from "react-icons/fc";

export default function SignIn({ isOpen, setIsOpen }) {

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                </Dialog.Title>
                                <div className="mt-2 flex flex-col gap-3 w-full">
                                    <button className="py-2 justify-center rounded-lg flex items-center gap-2 w-full border border-gray-400 bg-white  text-gray-700 hover:bg-gray-100">
                                        Sign up with google <FcGoogle />
                                    </button>

                                    <form className="flex flex-col -gap-2">

                                        <div className="w-full flex flex-col gap-2">
                                            <label htmlFor="email">Fullname</label>
                                            <input type="text" name="" id="fullname"placeholder="John Doe" rows="5" className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-zomato-400" />
                                        </div>

                                    
                                        <div className="w-full flex flex-col gap-2">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" name="" id="email"placeholder="email@email.com" rows="5" className="w-fullborder border-gray-400 px-3 py-2 rounded-lgfocus:outline-none focus:border-zomato-400" />
                                        </div>

                                        <div className="w-full flex flex-col gap-2">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" name="" id="password"placeholder="********" rows="5" className="w-full borderborder-gray-400 px-3 py-2 rounded-lg focus:outline-nonefocus:border-zomato-400" />
                                        </div>

                                        <div className="w-full text-center  bg-zomato-400 text-whitepy-2 rounded-lg">
                                            Sign Up
                                        </div>                                      
                                    </form>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={closeModal}
                                    >
                                        Got it, thanks!
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
