import Hero from "../components/Hero"
import Categories from "../components/Categories"
import Testimonials from "../components/Testimonials"
function Home(){
    return (
        <div className="container">      
        <Hero/>
        <Categories/>
        <Testimonials/>
        </div>
    )
}

export default Home