import Banner from "../../component/banner/Banner.tsx";
import Categories from "./Categories.tsx";
import SpecialDishes from "./SpecialDishes.tsx";
import Testimonials from "./Testimonials.tsx";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Categories/>
            <SpecialDishes/>
            <Testimonials/>
        </div>
    );
};

export default Home;