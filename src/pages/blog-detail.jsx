import Header from "@/components/header";
import Footer from "@/components/footer";
import PageBanner from "@/components/page-banner";
import BlogDetail from "@/components/blog-detail";

function BlogDetailPage() {
    return (  
        <div>
            <Header />
            <PageBanner title="BLOG DETAILS" link="Blog Details" />
            <BlogDetail />
            <Footer />
        </div>
    );
}

export default BlogDetailPage;