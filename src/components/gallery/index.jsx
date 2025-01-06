import "./index.scss";
import PortfolioData from "@/data/portfolio.json";
import { useState, useEffect, useRef } from 'react';
import Isotope from "isotope-layout";
import imagesLoaded from 'imagesloaded';

import { LiaSpinnerSolid } from "react-icons/lia";

import Fancybox from '../fancybox';


export default function Gallery() {
    const isotopeRef = useRef();
    // state for storing the isotope object, with an initial value of null
    const [isotope, setIsotope] = useState(null);
    // state for storing the filter keyword, with an initial value of *, which matches everything
    const [filterKey, setFilterKey] = useState('*');

    
    useEffect(() => {
        imagesLoaded(isotopeRef.current, () => {
            setIsotope(
                new Isotope('.gallery-grid', {
                    // filter-container: className of the parent of the isotope elements
                    itemSelector: '.gallery-grid__item', // filter-item: className of the isotope elements
                    percentPosition: true,
                    masonry: {
                        columnWidth: '.grid-sizer'
                    }
                })
            );
        });
        
    }, []); // [] makes this useEffect work like a componentDidMount in a class component


    useEffect(() => {
        if (isotope) {
          // sanity check
          filterKey === '*'
            ? isotope.arrange({ filter: `*` })
            : isotope.arrange({ filter: `.${filterKey}` });
        }
    }, [isotope, filterKey]); // this useEffect will run every time the filterKey changes

    return (
        <section className="gallery">
            <div className="gallery__filter">
                <button className={`gallery__filter-item ${filterKey === '*' ? '-active' : ''}`} onClick={() => setFilterKey('*')}>
                    All
                </button>
                <button className={`gallery__filter-item ${filterKey == 'photo' ? '-active' : ''}`} onClick={() => setFilterKey('photo')}>
                    PHOTOGRAPHY
                </button>
                <button className={`gallery__filter-item ${filterKey == 'travel' ? '-active' : ''}`} onClick={() => setFilterKey('travel')}>
                    TRAVEL
                </button>
                <button className={`gallery__filter-item ${filterKey == 'natural' ? '-active' : ''}`} onClick={() => setFilterKey('natural')}>
                    NATURE
                </button>
                <button className={`gallery__filter-item ${filterKey == 'fashion' ? '-active' : ''}`} onClick={() => setFilterKey('fashion')}>
                    FASHION
                </button>
                <button className={`gallery__filter-item ${filterKey == 'life-style' ? '-active' : ''}`} onClick={() => setFilterKey('life-style')}>
                    LIFE STYLE
                </button>
            </div>

            <div className="gallery-grid" ref={isotopeRef}>
                <div className="grid-sizer"></div>
                <Fancybox>
                    {PortfolioData &&
                        PortfolioData.map((portfolio) => (
                            <div
                                key={portfolio.id}
                                className={`gallery-grid__item ${portfolio.categories
                                    .map((cat) => cat)
                                    .join(" ")}`}
                            >
                                <div className="gallery-grid__item-inner">
                                {/*  <img src={portfolio.homeImage} alt="" className="w-full" /> */}
                                    <div className="thumbnail" data-fancybox="gallery" data-src={portfolio.homeImage}>
                                        <div className="overlay">
                                            <img
                                                src={portfolio.homeImage}
                                                alt="portfolio"
                                            />
                                        </div>
                                    </div>
                                    <div className="gallery-grid__item-content">
                                        <h3>{portfolio.title}</h3>
                                        <p>{portfolio.categories.join(", ")}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </Fancybox>
            </div>
            <div className="gallery__loading">
                <LiaSpinnerSolid />
            </div>
        </section>
    );
}
