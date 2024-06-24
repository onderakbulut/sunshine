import Header from '@/components/header';
import Footer from '@/components/footer';
import PageBanner from '@/components/page-banner';
import Bloglist from '@/components/blog-list';

function BlogPage() {
    return (  
        <div>
            <Header/>
            <PageBanner title="Blog" link="Blog"/>
            <Bloglist/>
            <Footer/>
        </div>
    );
}

export default BlogPage;