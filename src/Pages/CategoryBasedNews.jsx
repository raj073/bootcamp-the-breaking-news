import BreakingNews from "./BreakingNews";
import Header from "./Shared/Header/Header";
import Navbar from "./Shared/Navbar/Navbar";
import LeftSideNavbar from "./Shared/LeftSidebar/LeftSidebar";
import RightSideNavbar from "./Shared/RightSideNav/RightSideNav";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const CategoryBasedNews = () => {
  const categoryBasedNews = useLoaderData();
  console.log(categoryBasedNews);
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <div>
          <LeftSideNavbar></LeftSideNavbar>
        </div>

        {/* News Card */}
        <div className="md:col-span-2 mt-4">
          <div className="bg-slate-600 py-3 mb-2 rounded-tl-lg rounded-br-lg">
            <h5 className="text-center font-semibold text-lg">
              This Category has {categoryBasedNews.length} News
            </h5>
          </div>

          {categoryBasedNews.map((singleCategory) => (
            <NewsCard key={singleCategory._id} news={singleCategory}></NewsCard>
          ))}
        </div>

        {/* News Card End */}

        <div>
          <RightSideNavbar></RightSideNavbar>
        </div>
      </div>
    </div>
  );
};

export default CategoryBasedNews;
