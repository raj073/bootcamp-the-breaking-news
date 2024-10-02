import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(
      `https://bootcamp-the-breaking-news-server-a0ryls1kt-raj073s-projects.vercel.app/categories`
    )
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2
        className="text-3xl text-center mt-2 
      mb-3 hover:text-indigo-600 transition duration-500 ease-in-out"
      >
        All Category: {categories.length}
      </h2>

      {categories.map((category) => (
        <NavLink
          to={`/category/${category.id}`}
          className="block p-2 font-semibold"
          key={category.id}
        >
          <button className="btn btn-outline border-slate-500 text-md w-full rounded-sm">
            {category.name}
          </button>
        </NavLink>
      ))}
    </div>
  );
};

export default LeftSidebar;
