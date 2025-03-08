import './Hero.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';
import { Link } from 'react-scroll'


const Hero = () => {
  const transition = { typeof: 'spring', duration: 2 }
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        {/* add section */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          />

          <span>The Best Fitness Club In the Town</span>
        </div>
        {/* Main Heading section */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div className="hero-text-span">
            <span>
              In here we help you to shape and build your ideal body and live up
              your life to fullest.
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={80} delay="3" postFix=" + " />
            </span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={996} start={80} delay="2" postFix="+" />
            </span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={10} delay="3" postFix="+" />
            </span>
            <span>Fitness Programs</span>
          </div>
        </div>
        {/* hero buttons */}

        <div className="hero-buttons">

          <Link to="programs" spy={true} smooth={true}>
            <button className="btn btn-orange">Learn More</button>
          </Link>

          <Link to="plans" spy={true} smooth={true}>
            <button className="btn btn-white">Get Started</button>
          </Link>
        </div>
      </div>

      <div className="right-h">
        <Link to="join" spy={true} smooth={true}>
          <button className="btn">Join Now</button>
        </Link>

        <motion.div
          className="heart-rate"
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>110 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={hero_image} alt="" className="hero_image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero_image_back"
        />

        {/* calories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />

          <div>
            <span>Calories Burn</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero
