import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>I possess a diverse skill set essential for modern software development. Here are some key areas of my expertise:</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Software Development" />
                  <h5>Software Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Mobile Development" />
                  <h5>Mobile Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Web Development" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Database Setup" />
                  <h5>Database Setup (MySQL, Firebase)</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Programming Languages" />
                  <h5>C, C++, Java, Python</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Typing Speed" />
                  <h5>Typing Speed: 50 WPM</h5>
                </div>
              </Carousel>
              <p>If you have an idea that you want to bring to life, I can develop software from scratch and deploy it, using frameworks and technologies tailored to your needs. Let’s collaborate on your next project!</p>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
}
