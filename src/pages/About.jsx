import aboutImg from '../assets/about.jpg'
import fashion1 from '../assets/fashion-1.jpg'
import fashion2 from '../assets/fashion-2.jpg'
import fashion3 from '../assets/fashion-3.jpg'
export default function About() {
  return (
     <>
          <div className="about-sec wrapper">
            <h2>My Favorite Brands</h2>
            <p>
              Pretium odio accumsan nisi fringilla id pellentesque diam laoreet
              nullam magna ac <br></br> dignissim tortor ipsum fermentum
            </p>
            <div className="about-area">
              <div className="about-img">
                <img src={aboutImg} alt="about-image" />
              </div>
              <div className="about-content">
                <h2>Clothing</h2>
                <h5>
                  Diam pellentesque amet vulputate faucibus velit lorem malesuada
                  mattis mauris egestas facilisi consectetur facilisis purus
                  bibendum aliquam.
                </h5>
              </div>
            </div>
          </div>
          <div className="fashion-sec wrapper">
            <h2>My Fashion Tips</h2>
            <div className="fashion-content">
              <div className="fashion-image">
                <img src={fashion1} alt="fashion-image" />
                <h4>Transparent Rain Coat sed consectetur</h4>
                <p>Read More</p>
              </div>
              <div className="fashion-image">
                <img src={fashion2} alt="fashion-image" />
                <h4>Flawless party makeup laoreet diam amet urna</h4>
                <p>Read More</p>
              </div>
              <div className="fashion-image">
                <img src={fashion3} alt="fashion-image" />
                <h4>Black Dress By Wangoon Nisl bibendum</h4>
                <p>Read More</p>
              </div>
            </div>
          </div>
        </>
  );
}
