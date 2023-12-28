import Banner from "../../component/banner/Banner.tsx";
import Categories from "./Categories.tsx";
import SpecialDishes from "./SpecialDishes.tsx";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Categories/>
            <SpecialDishes/>
        </div>
    );
};

export default Home;