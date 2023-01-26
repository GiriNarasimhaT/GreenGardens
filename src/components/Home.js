import Hero from "./Hero"
import Footer from "./Footer"
import data from "../data"
import Service from "./Service"
function Home() {

    const Services = data.map(item => {
        return (
            <Service 
                img={item.img}
                title={item.title}
                description={item.description}
            />
        )
      }) 

    return ( 
        <>
            <Hero/>
            <h1 className="section-title">Our Services</h1>
            <section className="cards-list">
                {Services}
            </section>
            <Footer/>
        </>
     );
}

export default Home;