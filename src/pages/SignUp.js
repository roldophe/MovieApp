import Lottie from 'lottie-react';
import React, { useRef, useState } from 'react';
import animationData from '../assets/Lotties/loginAnimation.json';

const SignUp = () => {
    const prodRef = useRef(null);
    const [reverseCount, setReverseCount] = useState(0);
    const maxReverseCount = 1; // Set the maximum number of reverse repetitions

    const handleAnimationComplete = () => {
        if (reverseCount < maxReverseCount) {
            prodRef.current?.setDirection(-1);
            prodRef.current?.play();
            setReverseCount(reverseCount + 1);
        } else {
            prodRef.current?.setDirection(1); // Set the direction to forward
            prodRef.current?.play();
            setReverseCount(0); // Reset the reverse count
        }
    };
    return (
        <div className="container mx-auto px-5 sm:flex items-center max-w-screen-xl mt-5">
            <div className="sm:w-1/2 p-5">
                <Lottie
                    onComplete={handleAnimationComplete}
                    lottieRef={prodRef}
                    loop={false}
                    animationData={animationData}
                />
            </div>
            <div className="sm:w-1/2">
                <div className="px-4 md:px-0">
                    <div className="md:mx-6 md:p-12">
                        {/* <!--Logo--> */}
                        <div className="text-center">
                            <img
                                className="mx-auto w-48"
                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                alt="logo" />
                            <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold text-white">
                                We are The Lotus Team
                            </h4>
                        </div>
                        <form>
                            <p className="mb-4 text-gray-300">Please enter your information to register</p>
                            {/* <!--Username input--> */}
                            <div className="relative mb-4 text-gray-300" data-te-input-wrapper-init>
                                <input
                                    type="text"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput1"
                                    placeholder="Username"
                                />
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                >Username
                                </label>
                            </div>
                            <div className="relative mb-4 text-gray-300" data-te-input-wrapper-init>
                                <input
                                    type="email"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput1"
                                    placeholder="Email"
                                />
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                >Email
                                </label>
                            </div>
                            {/* <!--Password input--> */}
                            <div className="relative mb-4" data-te-input-wrapper-init>
                                <input
                                    type="password"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput11"
                                    placeholder="Password" />
                                <label
                                    htmlFor="exampleFormControlInput11"
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                >Password
                                </label>
                            </div>

                            {/* <!--Submit button--> */}
                            <div className="pb-1 pt-1 text-center text-gray-300">
                                <button
                                    className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]
                                    bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%
                                    "
                                    type="button"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                // style={{
                                //     background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593) "
                                // }}
                                >
                                    Register
                                </button>

                                {/* <!--Forgot password link--> */}
                                {/* <a href="#!">Forgot password?</a> */}
                            </div>
                            <div
                                className="flex flex-row items-center justify-center lg:justify-start text-white my-5">
                                <p className="mb-0 mr-4 text-lg text-white">Sign in with</p>

                                {/* <!-- Facebook --> */}
                                <button
                                    type="button"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    className="mx-1 h-9 w-9 rounded-full bg-sky-500 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                    {/* <!-- Facebook --> */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mx-auto h-3.5 w-3.5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                    </svg>
                                </button>

                                {/* <!-- Twitter --> */}
                                <button
                                    type="button"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    className="mx-1 h-9 w-9 rounded-full bg-sky-500 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                    {/* <!-- Twitter --> */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mx-auto h-3.5 w-3.5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </button>

                                {/* <!-- Linkedin --> */}
                                <button
                                    type="button"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    className="mx-1 h-9 w-9 rounded-full bg-sky-500 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                    {/* <!-- Linkedin --> */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mx-auto h-3.5 w-3.5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
