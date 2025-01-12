import bog1 from '../assets/blog-1.jpg';
import bog2 from '../assets/blog-2.jpg';
import bog3 from '../assets/bog-3.jpg';
import bog4 from '../assets/blog-4.jpg';

export default function Blog() {
  return (
    <>
      <div className="blog-section wrapper">
        <h1>Recent blogs</h1>
        <p>
          Pretium odio accumsan nisi fringilla id pellentesque diam laoreet
          nullam magna ac <br></br> dignissim tortor ipsum fermentum
        </p>
        <div className="blog-content">
          <div className="blog-image">
            <img src={bog1} alt="blog-image" />
            <h6>Urban Fashion</h6>
            <h3>As Purus Mauris in Aliquam Est Pretium</h3>
          </div>
          <div className="blog-image">
            <img src={bog2} alt="blog-image" />
            <h6>Best For Winter</h6>
            <h3>As Velit in Magna Justo</h3>
          </div>
          <div className="blog-image">
            <img src={bog3} alt="blog-image" />
            <h6>Trendy Work Wear</h6>
            <h3>Etiam mauris augue eleifend porttitor</h3>
          </div>
          <div className="blog-image">
            <img src={bog4} alt="blog-image" />
            <h6>Casual Summer Wear</h6>
            <h3>Aliquet ac tortor tristique facilisis nulla aenean</h3>
          </div>
        </div>
      </div>
    </>
  );
}
