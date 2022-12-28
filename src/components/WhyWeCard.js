const WhyWeCard = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
      <div className="mb-12 space-y-4">
        <h3 className="text-2xl font-semibold text-[#ED9FA8]">{title}</h3>
        <p className="mb-6">{description}</p>
        <a href="/#" className="block font-medium text-purple-600">
          Know more
        </a>
      </div>
      <img
        src={image}
        className="w-2/3 ml-auto -mb-12"
        alt="illustration"
        loading="lazy"
        width="900"
        height="600"
      />
    </div>
  );
};

export default WhyWeCard;
