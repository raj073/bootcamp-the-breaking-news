import moment from "moment";

const Header = () => {
  return (
    <div className="text-center py-6">
      <h1 className="font-edu text-5xl hover:text-indigo-600 transition duration-500 ease-in-out">
        The Breaking News
      </h1>
      <h2 className="text-xl mt-5">
        Bold, Unbiased Reporting for a Better Informed World
      </h2>
      <p className="mt-2">{moment().format("dddd, MMMM YYYY, h:mm:ss a")}</p>
    </div>
  );
};

export default Header;
