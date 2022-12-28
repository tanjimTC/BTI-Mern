import { whyWeData } from "../Assets/data";
import WhyWeCard from "../components/WhyWeCard";

const WhyUsContainer = () => {
  return (
    <div className="py-16 bg-[#FEFBEA]">
      <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
        <h1 className="text-4xl text-center mb-10 font-semibold text-[#ED9FA8]">
          Why we?
        </h1>
        <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
          {whyWeData.map((data, index) => (
            <WhyWeCard key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUsContainer;
