import { useEffect } from "react";
import style from "../Assets/style.module.css";
import { FaStarOfLife } from "react-icons/fa";
import { useForm } from "react-hook-form";

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ something: "" });
    }
    // eslint-disable-next-line
  }, [isSubmitSuccessful]);

  return (
    <div className={style["contactUsForm-wrapper"]}>
      <p className="text-2xl font-bold">Send us a message</p>

      <form
        name="contactUsForm"
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-x-4"
      >
        <div className="col-span-2  mt-4">
          <label htmlFor="name" className="text-lg">
            First &amp; Last Name
          </label>
          <FaStarOfLife className={style["contactUsForm-label-icon"]} />
          <input
            type="text"
            id="name"
            className="w-full h-12 focus:outline-none rounded-md p-4 mt-1"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-600">Name is required</span>
          )}
        </div>

        <div className="col-span-2 lg:col-span-1 mt-4">
          <label htmlFor="phone" className="text-lg">
            Phone Number
          </label>
          <FaStarOfLife className={style["contactUsForm-label-icon"]} />
          <input
            type="text"
            id="phone"
            className="w-full h-12 focus:outline-none rounded-md p-4 mt-1"
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <span className="text-red-600">Phone number is required</span>
          )}
        </div>

        <div className="col-span-2 lg:col-span-1 mt-4">
          <label htmlFor="email" className="text-lg">
            Email address
          </label>
          <FaStarOfLife className={style["contactUsForm-label-icon"]} />
          <input
            type="text"
            id="email"
            className="w-full h-12 focus:outline-none rounded-md p-4 mt-1"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-600">Email address is required</span>
          )}
        </div>

        <div className="col-span-2 mt-4">
          <label htmlFor="message" className="text-lg">
            Message
          </label>
          <FaStarOfLife className={style["contactUsForm-label-icon"]} />
          <textarea
            className="w-full h-24 focus:outline-none rounded-md resize-none p-4 mt-1"
            id="message"
            {...register("message", { required: true })}
          ></textarea>
          {errors.message && (
            <span className="text-red-600">Message is required</span>
          )}
        </div>

        <p className="col-span-2 mt-4">
          <FaStarOfLife className={style["contactUsForm-label-icon"]} />
          Fields required
        </p>

        <button className={style["contactUsForm-submit-btn"]} type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
