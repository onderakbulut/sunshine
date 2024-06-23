import Header from '@/components/header';
import Footer from '@/components/footer';
import PageBanner from '@/components/page-banner';
import Hero from '@/components/hero';
import Services from '@/components/services';
import OurTeam from '@/components/our-team';
import Contact from '@/components/contact';

import AboutData from "@/data/about.json";

function AboutPage() {
    return ( 
        <div>
            <Header/>
            <PageBanner title="About Us" link="About us"/>
            <Hero title={AboutData.section_title} subTitle={AboutData.section_subtitle} desc={AboutData.section_desc} divider={true} />
            <div className="container">
                <div className="flex flex-wrap -mx-3 gap-y-3">
                    <div className="w-full md:w-1/2 px-3">
                        <img src={AboutData.section_img} alt="about" className="w-full" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <img src={AboutData.section_img_1} alt="about" className="w-full" />
                    </div>
                </div>
            </div>
            <Services/>
            <div className="container">
                <img src={AboutData.section_img_2} alt="about" className="w-full" />
            </div>
            <OurTeam data={AboutData.team} />
            <Contact/>
            <Footer/>
        </div>
    );
}

export default AboutPage;