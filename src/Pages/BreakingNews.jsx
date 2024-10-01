import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-warning">Latest News</button>
      <Marquee pauseOnHover={true}>
        Breaking News: Major Earthquake Strikes
      </Marquee>
    </div>
  );
};

export default BreakingNews;
