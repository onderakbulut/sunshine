import Header from '@/components/header';
import Hero from '@/components/hero';
import Gallery from '@/components/gallery'
import Footer from '@/components/footer';
import IndexData from "@/data/index.json";

function HomePage() {
    return (
        <div>
            <Header />
            <Hero title={IndexData.hero_title} subTitle={IndexData.hero_subtitle} divider={false} />
            <Gallery />
            <Footer />
        </div>
    );
}

export default HomePage;
