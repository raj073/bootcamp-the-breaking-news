import { useLoaderData } from "react-router-dom";
import BreakingNews from "../../BreakingNews";
import Header from "../Header/Header";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import Navbar from "../Navbar/Navbar";
import NewsCard from "../../NewsCard";
import RightSideNav from "../RightSideNav/RightSideNav";

const Home = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <div>
          <LeftSidebar></LeftSidebar>
        </div>
        <div className="md:col-span-2 mt-6">
          {news.map((singleNews) => (
            <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
          ))}
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
