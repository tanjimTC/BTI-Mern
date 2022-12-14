import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUpIn = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("http://localhost:3500/binary/user", data)
      .then((res) => {
        console.log(res);
        if (res.data.success === true) {
          alert("User created successfully");
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    reset();
  };

  return (
    <div>
      <div className="bg-gray-900 min-h-[70vh]">
        <div className="flex justify-center min-h-[70vh]">
          <div className="hidden lg:block lg:w-2/5">
            <img
              className="h-full w-full object-cover"
              src="https://img.freepik.com/free-photo/joyful-black-author-works-writing-new-book-readers_273609-28047.jpg?w=1800&t=st=1670850961~exp=1670851561~hmac=967ec92f4241cca229c0950c53c726aba72dfe494867dfa06b7efa7d1398eefa"
              alt=""
            />
          </div>

          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full mt-8">
              <h1 className="text-2xl font-semibold tracking-wider text-gray-200 capitalize ">
                Get your free account now.
              </h1>

              <p className="mt-4 text-gray-500">
                Let’s get you all set up so you can verify your personal account
                and setting up your profile.
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
              >
                <div>
                  <label className="block mb-2 text-sm text-gray-400">
                    First Name
                  </label>
                  <input
                    {...register("firstName", { required: true })}
                    type="text"
                    placeholder="John"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-[#ed9fa8] focus:outline-none"
                  />
                  {errors.firstName && (
                    <span className="text-red-400">This field is required</span>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-400">
                    Last Name
                  </label>
                  <input
                    {...register("lastName", { required: true })}
                    type="text"
                    placeholder="Doe"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-[#ed9fa8] focus:outline-none"
                  />
                  {errors.lastName && (
                    <span className="text-red-400">This field is required</span>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-400">
                    Email address
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="johnsnow@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-[#ed9fa8] focus:outline-none"
                  />
                  {errors.email && (
                    <span className="text-red-400">This field is required</span>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-400">
                    Password
                  </label>
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    placeholder="Enter your password"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-[#ed9fa8] focus:outline-none"
                  />
                  {errors.password && (
                    <span className="text-red-400">This field is required</span>
                  )}
                </div>

                <button className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#ed9fa8] rounded-md focus:outline-noneopacity-50">
                  <span>Sign Up </span>
                </button>
              </form>
              <p className="text-gray-200 mt-3 text-sm">
                already have an account?
                <Link to="/sign-in" className="text-blue-500 ml-1">
                  sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpIn;
