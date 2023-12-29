import Banner from "../../component/banner/Banner.tsx";
import Categories from "./Categories.tsx";
import SpecialDishes from "./SpecialDishes.tsx";
import Testimonials from "./Testimonials.tsx";
import OurServices from "./OurServices.tsx";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Categories/>
            <SpecialDishes/>
            <Testimonials/>
            <OurServices/>
        </div>
    );
};

export default Home;