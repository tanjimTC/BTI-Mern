import React, { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import axios from "axios";
import { handleToastNotification } from "../helper";
import { ToastContainer } from "react-toastify";

const Hero = ({ user }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log("data is submitted", data);
    if (data) {
      // send data
      axios
        .post("http://localhost:3500/binary/blog/create", data)
        .then((res) => {
          handleToastNotification(res.data.message, "success");
          reset();
        })
        .catch((err) => {
          handleToastNotification("Something went wrong", "error");
        });
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section className="px-3  bg-neutral-100 lg:py-10 ">
      <ToastContainer />
      <div className="grid md:grid-cols-2 lg:grid-cols-2 items-center justify-items-center gap-5 min-h-[80vh]">
        <div className="p-3 order-2 lg:order-1 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold md:text-5xl lg:7xl text-[#EDA0A8]">
            Lorem Ipsum
          </p>
          <p className="text-xl font-bold"> Lorem ipsum dolor </p>
          <p className="mt-2 text-sm">Lorem ipsum dolor sit amit dolor.</p>
          <div className="flex gap-2">
            <button className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">
              Blogs
            </button>
            {user && (
              <button
                className="text-lg md:text-2xl bg-[#EDA0A8] text-white py-2 px-5 mt-10 hover:bg-zinc-800"
                onClick={openModal}
              >
                write a blog
              </button>
            )}
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <img
            className="h-52 w-52 object-cover md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px]"
            src="https://img.freepik.com/free-photo/joyful-black-author-works-writing-new-book-readers_273609-28047.jpg?w=1800&t=st=1670850961~exp=1670851561~hmac=967ec92f4241cca229c0950c53c726aba72dfe494867dfa06b7efa7d1398eefa"
            alt=""
          />
        </div>
      </div>

      {/* Modal Body */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <img
          onClick={closeModal}
          className="float-right cursor-pointer"
          src="https://cdn1.iconfinder.com/data/icons/warnings-and-dangers/400/Warning-01-16.png"
          alt=""
        />
        <div className="font-mono bg-white">
          <div className="container mx-auto">
            <div className="flex justify-center">
              <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-2xl text-center">Write a Blog!</h3>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="px-8 pt-6 pb-8 mb-4 bg-white"
                >
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="firstName"
                      >
                        First Name
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        {...register("firstName", { required: true })}
                        defaultValue={user && user.firstName}
                      />
                      {errors.firstName && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>

                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="lastName"
                      >
                        Last Name
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        defaultValue={user && user.lastName}
                        {...register("lastName", { required: true })}
                      />
                      {errors.lastName && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Email"
                      defaultValue={user && user.email}
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="email"
                    >
                      Image URL
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="imageUrl"
                      type="text"
                      placeholder="www.image.com"
                      {...register("imageUrl", { required: true })}
                    />
                    {errors.imageUrl && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="category"
                    >
                      Category
                    </label>

                    <select
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      name="category"
                      id="category"
                      {...register("category", { required: true })}
                    >
                      <option value="travel">Travel</option>
                      <option value="beauty">Beauty</option>
                      <option value="health">Helath</option>
                      <option value="sprts">Sports</option>
                      <option value="tech">Technology</option>
                    </select>
                    {errors.category && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="email"
                    >
                      Blog Title
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="blogTitle"
                      type="text"
                      placeholder="Title of your blog"
                      {...register("blogTitle", { required: true })}
                    />
                    {errors.blogTitle && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="email"
                    >
                      Blog
                    </label>
                    <textarea
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="textField"
                      rows={7}
                      placeholder="Write your blog here"
                      {...register("blog", { required: true })}
                    />
                    {errors.blog && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      post
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default Hero;
