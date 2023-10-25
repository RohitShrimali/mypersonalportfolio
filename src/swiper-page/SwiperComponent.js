import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Main.css';
// import '../index.css';
import { Navigation, Pagination, EffectCoverflow} from 'swiper/modules';
import { NavLink } from 'react-router-dom';

const SwiperComponent = () => {
  useEffect(() => {
 new Swiper('.swiper', {
  modules: [EffectCoverflow, Navigation, Pagination],
      effect: 'coverflow',
      //effect: 'creative',
      grabCursor: true,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
      },
      loop: true,
      //spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1560: {
          slidesPerView: 3,
        },
      },
    });
  }, []);
  return (
    <main>
    <div>
    <span>Meet</span>
    <h1>My Family</h1>
    <hr />
    <p>When all the dust is settled and all the crowds are gone, the things that matter are faith, family, and friends.</p>
    <NavLink to="Gallary">Go To Gallary</NavLink>
  </div>
    <div className="swiper">
     <div className="swiper-wrapper">
      <div className="swiper-slide swiper-slide--one">
        <div >
          <h2>Mr. Girjashankar Shrimali(My Papa)</h2>
          <p>He's the header of our family and Government Employee in the Irrigation Department.
          "I've said it before, but it's absolutely true: My mother gave me my drive, but my father gave me my dreams. Thanks to him, I could see a future."
          </p>
          {/* <a href="https://en.wikipedia.org/wiki/Jellyfish" target="_blank" rel="noopener noreferrer">explore</a> */}
        </div>
      </div>
      <div className="swiper-slide swiper-slide--two">
        <div>
          <h2>Mrs. Manju Shrimali</h2>
          <p>
            My Mom is Homemaker and the world's best mom in the world.“When you are looking at your mother, you are looking at the purest love you will ever know.”
          </p>
          {/* <a href="https://en.wikipedia.org/wiki/Seahorse" target="_blank" rel="noopener noreferrer">explore</a> */}
        </div>
      </div>

      <div className="swiper-slide swiper-slide--three">

        <div>
          <h2>Mr. Deepak Shrimali</h2>
          <p>
            He's my Elder brother and Employee in Abbott Multinational company."Some people have bodyguards I have an older brother"
          </p>
          {/* <a href="https://en.wikipedia.org/wiki/Octopus" target="_blank" rel="noopener noreferrer">explore</a> */}
        </div>
      </div>

      <div className="swiper-slide swiper-slide--four">

        <div>
          <h2>Mrs. Pallavi Shrimali</h2>
          <p>
            She's my Bhabhi No.1 and my Bestfriend also always suppoerting me at every situation.She's always doing my care as like my mother."A bhabhi is a second mother, a friend, and a confidante. She is always there for you, through thick and thin."
          </p>
          {/* <a href="https://en.wikipedia.org/wiki/Shark" target="_blank" rel="noopener noreferrer">explore</a> */}
        </div>
      </div>

      <div className="swiper-slide swiper-slide--five">

        <div>
          <h2>Mr. Rahul Shrimali</h2>
          <p>
          He's my second Elder brother and Deputy Manager in Bandhan Bank."Some people have bodyguards I have an older brother"
          </p>
          {/* <a href="https://en.wikipedia.org/wiki/Dolphin" target="_blank" rel="noopener noreferrer">explore</a> */}
        </div>
      </div>

      <div className="swiper-slide swiper-slide--six">

        <div>
          <h2>Mrs. Meenakshi Shrimali</h2>
          <p>
          She's my Bhabhi No.2 and engaged to my second elder brother Mr. Rahul Shrimali."She is a blessing, someone you are lucky to have in your life. A cherished and loved presence, she brings joy and fulfillment."
          </p>
          {/* <a href="https://en.wikipedia.org/wiki/Dolphin" target="_blank" rel="noopener noreferrer">explore</a> */}
        </div>
      </div>

      <div className="swiper-slide swiper-slide--seven">

        <div>
          <h2>Mr. Jigyansh Shrimali</h2>
          <p>
            He's my heart, my lifeline, my friend, my all of these. My Nephew i love him. 
          </p>
          {/* <a href="https://en.wikipedia.org/wiki/Dolphin" target="_blank" rel="noopener noreferrer">explore</a> */}
        </div>
      </div>
    </div>
      </div>
      <div className="swiper-pagination"><h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, aperiam!</h1></div>
    <img src="https://cdn.pixabay.com/photo/2021/11/04/19/39/jellyfish-6769173_960_720.png" alt="" className="bg" />
    <img src="https://cdn.pixabay.com/photo/2012/04/13/13/57/scallop-32506_960_720.png" alt="" className="bg2" />
    </main>
  );
};

export default SwiperComponent;


