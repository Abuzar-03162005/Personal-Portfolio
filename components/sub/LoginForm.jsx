"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // function to handle the form submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res.error) {
        setError("Invalid Credentials");
        return;
      }
      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#f0f8ff] h-screen relative z-50">
      <div className="px-10 py-5 text-2xl text-indigo-600 font-extrabold absolute top-6 left-4">
        <Link href="/">{"<-"}</Link>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-[4.5rem] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl pb-10">
            Login To Your Account
          </h1>
          <form
            onSubmit={handleSubmit}
            action="#"
            className="mb-0 mt-6 space-y-4 rounded-3xl p-4 shadow-lg sm:p-6 lg:p-8 bg-white"
          >
            <p className="text-center text-lg font-medium">
              Login your account
            </p>

            {/* Email field */}

            <div>
              <div className="relative">
                <input
                  type="email"
                  className="outline-none w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xl"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password field */}
            <div>
              <div className="relative">
                <input
                  type="password"
                  className="outline-none w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xl "
                  placeholder="Enter password"
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
            </div>

            {/* Error field */}
            {error && (
              <div>
                <div className="relative">
                  <h1 className="bg-transparent text-red-600 px-2 rounded-lg text-[16px] font-bold text-center">
                    {error} {"‼️"}
                  </h1>
                </div>
              </div>
            )}
            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Login
            </button>

            {/* link to register form in case of no account */}

            <p className="text-center text-sm text-gray-500">
              Dont have an account ?
              <Link
                className="underline pl-2 text-blue-500 font-bold"
                href="/register"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
