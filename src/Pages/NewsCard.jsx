import { FaShareAlt, FaRegBookmark, FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, image_url, rating, total_view, author, details } = news;

  return (
    <div>
      <div
        className="transition duration-300 rounded-md 
          overflow-hidden shadow-lg"
      >
        <div>
          {/* Card Header */}
          <div className="flex justify-between items-center bg-slate-800 py-4 px-8 border border-gray-700">
            <div className="flex">
              <img
                src="https://tailwindcss.com/img/jonathan.jpg"
                className="rounded-full h-12 w-12 mb-2"
              />
              <div className="ml-3">
                {" "}
                <h2 className="text-sm">Jonathon</h2>
                <span className="text-sm">2022-20-02</span>
              </div>
            </div>

            <div className="flex">
              <FaShareAlt size={20} />
              <FaRegBookmark className="ml-4" size={20} />
            </div>
          </div>
          <h4 className="text-lg mt-3 font-semibold py-4 px-8">{title}</h4>
          <img src={image_url} className="w-full rounded-md px-8" />
          <p className="text-sm text-gray-400 text-justify py-3 px-8">
            {details}
          </p>

          {/* Card Footer */}
          <div className="flex justify-between items-center bg-slate-800 py-6 px-8 border border-gray-700 mt-5">
            <div className="flex">
              <FaStar size={25} color="orange" />
              <span className="ml-2">4.5</span>
            </div>
            <div className="flex">
              <FaEye size={20} />
              <span className="ml-4">488</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
