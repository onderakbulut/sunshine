import { useEffect, useRef } from 'react';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import './index.scss';
import BlogData from '@/data/blog.json';
import { Link } from 'react-router-dom';

function Bloglist() {
    const masonryRef = useRef(null);
    let posts = BlogData.content.posts;
  
    useEffect(() => {
        let elem = masonryRef.current;
        var msnry = new Masonry(elem, {
            itemSelector: '.blog-list__item',
            percentPosition: true,
        });

        var imgLoad = new imagesLoaded(elem);

        imgLoad.on('progress', () => {
            msnry.layout();
        }); 

    }, []);
    return (  
        <div className="blog-list">
            <div className="blog-list__container">
                <div className="blog-list__inner" ref={masonryRef}>
                    <div className="grid-sizer"></div>
                    {posts.map((item, index) => (
                        <div className="blog-list__item" key={index}>
                            <div className="blog-list__item-img">
                                <img src={item.image} alt="blog" />
                            </div>
                            <div className="blog-list__item-content">
                                <h3>{item.title}</h3>
                                <Link to='/blog-detail'>{item.content}</Link>
                                <span>
                                    {item.date}
                                </span>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
            
        </div>
    );
}

export default Bloglist;