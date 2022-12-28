import ContactUsForm from "./ContactUsForm";
import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";

const GetInTouch = () => {
  return (
    <div className="bg-[#FEFBEA] py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto font-primary my-10">
        <div className="col-span-1 md:col-span-2 text-center w-3/4 mx-auto">
          <p className="text-2xl font-semibold mb-5">Get In Touch</p>
          <p className="text-base mb-5 font-extralight">
            Lets create something great!
          </p>
          <p className="md:text-xl mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            odit officia tenetur debitis eveniet ducimus. A iure, minus, aliquam
            asperiores animi quas totam esse placeat sint, sunt quis culpa
            odio?.
          </p>
        </div>
        <div className="px-10 py-10 md:py-24 border-2 shadow-xl bg-white">
          <p className="text-2xl font-bold">{"Let's connect"}</p>

          <div className="flex gap-x-4 mt-10">
            <FiMail className="text-3xl font-extralight" />
            <p className="text-lg">info@Binary</p>
          </div>

          <div className="flex gap-x-4 mt-10">
            <FiPhoneCall className="text-3xl font-extralight" />
            <p className="text-lg">+1-347-849-7449</p>
          </div>

          <div className="flex gap-x-4 mt-10">
            <FiMapPin className="text-3xl font-extralight" />
            <p className="text-lg">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <ContactUsForm className="mx-auto" />
      </div>
    </div>
  );
};

export default GetInTouch;
