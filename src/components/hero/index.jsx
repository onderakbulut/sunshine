import './index.scss';

export default function Hero({title, subTitle, desc, divider = false}) {
  return (
    <section className='hero'>
        <div className="hero__inner">
            <h2>{title}</h2>
            <h2>{subTitle}</h2>
            {divider && <div className="divider"></div>}
            <div className="hero__desc">
              <p>
                {desc}
              </p>
            </div>
        </div>    
    </section>
  )
}
