import React from "react";

const Register = () => {
  return (
    <div className="mt-6  m-auto max-w-md text-center pb-12">
      <div className="">
        <h2 className="text-3xl font-bold text-gray-900">Создать аккаунт</h2>
      </div>

      <div className=" bg-white/80 backdrop-blur-xl mt-10 mx-auto  rounded-xl shadow-xl p-10 w-full max-w-md">
        <form action="#" autoComplete="off" className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className=" float-left block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <div className="mx-auto relative rounded-md shadow-sm mt-1 ">
              <div className="absolute left-0 pl-3 inset-y-0 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className=" text-gray-500 mt-5 w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="name"
                required
                className="border-gray-300 rounded-md focus:border-green-500 focus:ring-green-500
                text-sm pl-10 w-full"
                placeholder="Name"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className=" float-left block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mx-auto relative rounded-md shadow-sm mt-1 ">
              <div className="absolute left-0 pl-3 inset-y-0 flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className=" text-gray-500 mt-5 w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <input
                type="email"
                id="email"
                required
                className="border-gray-300 rounded-md focus:border-green-500 focus:ring-green-500
                text-sm pl-10 w-full"
                placeholder="Email"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="float-left block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mx-auto relative rounded-md shadow-sm mt-1 ">
              <div className="absolute left-0 pl-3 inset-y-0 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className=" text-gray-500 mt-5 w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <input
                type="password"
                id="password"
                minLength="8"
                className="border-gray-300 rounded-md focus:border-green-500 focus:ring-green-500
                text-sm pl-10 w-full"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="Confirm passsword"
              className="float-left block text-sm font-medium text-gray-700"
            >
              Confirm password
            </label>
            <div className="mx-auto relative rounded-md shadow-sm mt-1 ">
              <div className="absolute left-0 pl-3 inset-y-0 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className=" text-gray-500 mt-5 w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <input
                type="password"
                id="password_confirmation"
                required
                className="border-gray-300 rounded-md focus:border-green-500 focus:ring-green-500
                text-sm pl-10 w-full"
                placeholder="Confirm password"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
