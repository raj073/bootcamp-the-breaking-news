import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-sm rounded-none btn-warning ml-7">
        Latest News
      </button>
      <Marquee
        pauseOnHover={true}
        className="hover:text-indigo-500 transition duration-500 ease-in-out"
      >
        Breaking: Major Earthquake Strikes City Center, Emergency Services
        Responding!
      </Marquee>
    </div>
  );
};

export default BreakingNews;
