import CategoryList from "../../components/categories-list/categories-list.component";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div>
      {/* <Outlet></Outlet> */}
      <CategoryList />
    </div>
  );
};

export default Home;
