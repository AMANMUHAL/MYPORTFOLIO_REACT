import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    },
  };

const projects = () => {
  return (
    <div><section className="projects" id="projects">
    <div className="max-width">
      <h2 className="title">My Projects</h2>
      <OwlCarousel className=' carousel owl-carousel ' {...options} loop margin={10} nav>   
        <div className="card">
          <div className="box">
            <img src="https://source.unsplash.com/720x600/?shopping" alt="img" />
            <div className="text">Ecommerce</div>
            <p>My ecommerce website offers a wide range of products, secure payment processing, and seamless checkout, providing customers with a convenient and hassle-free shopping experience.</p>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <img src="https://source.unsplash.com/720x600/?portfolio" alt="" />
            <div className="text">Portfolio</div>
            <p>My portfolio website showcases my diverse range of projects, highlighting my expertise in areas such as web development, design, content creation, and more.</p>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <img src="https://source.unsplash.com/720x600/?blog" alt="" />
            <div className="text">Blog</div>
            <p>My blog website features a collection of insightful articles on a variety of topics, including technology, lifestyle, and personal development.</p>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <img src="https://source.unsplash.com/720x600/?messanger" alt="" />
            <div className="text">BANK'O'FY</div>
            <p>My finance website provides comprehensive financial resources and advice for individuals and businesses, covering topics such as investing, budgeting, and retirement planning.</p>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <img src="https://source.unsplash.com/720x600/?app-clone" alt="" />
            <div className="text">Clone</div>
            <p>My Spotify clone website allows users to stream their favorite music, create custom playlists, and discover new artists, all within a sleek and user-friendly interface.</p>
          </div>
        </div>
        
      </OwlCarousel> 
    </div>
  </section>
  </div>
  )
}

export default projects