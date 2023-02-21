import React, { useEffect, useState } from "react";
import { useAuth } from "../../Contexts/AuthContextProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin, error, setError } = useAuth();

  function handleSave(e) {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      alert("заполните все поля");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      handleLogin(formData, email);
    }
  }

  useEffect(() => {
    setError(false);
  }, []);

  return (
    <div className="mt-6  m-auto max-w-md text-center pb-12">
      <div className="">
        <h2 className="text-3xl font-bold text-gray-900">Войти в аккаунт</h2>
      </div>
      {error ? <h2>{error}</h2> : null}

      <div className=" bg-white/80 backdrop-blur-xl mt-10 mx-auto  rounded-xl shadow-xl p-10 w-full max-w-md">
        <form
          action="#"
          autoComplete="off"
          className="space-y-6"
          onSubmit={handleSave}
        >
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
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className=" text-gray-500 mt-5 w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <input
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                minLength="8"
                className="border-gray-300 rounded-md focus:border-green-500 focus:ring-green-500
                text-sm pl-10 w-full"
                placeholder="Password"
              />
            </div>
          </div>
          <button>Вход</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
