import Lottie from 'lottie-react';
import React, { useRef, useState } from 'react';
import animationData from '../assets/Lotties/loginAnimation.json';
const SignIn = () => {
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
                            <p className="mb-4 text-gray-300">Please login to your account</p>
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
                            <div className="mb-12 pb-1 pt-1 text-center text-gray-300">
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
                                    Log in
                                </button>

                                {/* <!--Forgot password link--> */}
                                <a href="#!">Forgot password?</a>
                            </div>

                            {/* <!--Register button--> */}
                            <div className="flex items-center justify-between pb-6 text-gray-300">
                                <p className="mb-0 mr-2">Don't have an account?</p>
                                <a href="/register"
                                    className="text-gray-300 inline-block rounded border-2 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                >
                                    Register
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SignIn;
