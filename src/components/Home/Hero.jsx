import brand1 from '../../assets/brand-1.svg'
import brand2 from '../../assets/brand-2.svg'
import brand3 from '../../assets/brand-3.svg'
import brand4 from '../../assets/brand-4.svg'
import brand5 from '../../assets/brand-5.svg'
import heroImg from '../../assets/hero.jpg' 
export default function Hero() {
  return (
    <>
      <div className="hero-area wrapper">
      <div className="hero-img">
        <img src={heroImg} />
      </div>
      <div className="hero-content">
        <h3>A Fashion & Lifestyle Blog</h3>
        <h1>Kristin Fox</h1>

        <h2>Follow Us</h2>
        <div className="social-info">
          <div>
            <i className="fa-brands fa-youtube"></i>
            <h3>1.2 Million</h3>
          </div>
          <div>
            <i className="fa-brands fa-instagram"></i>
            <h3>750,000</h3>
          </div>
          <div>
            <i className="fa-brands fa-facebook"></i>
            <h3>850,000</h3>
          </div>
        </div>
      </div>
      </div>

      <div className="hero-brand wrapper">
        <h4>Brands that I have collaborated with:</h4>
        <div className='branding-sec'>
          <img src={brand1} />
          <img src={brand2} />
          <img src={brand3} />
          <img src={brand4} />
          <img src={brand5} />
        </div>
      </div>
    </>
  );
}
