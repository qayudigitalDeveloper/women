
import { Link } from 'react-router-dom';
import '../Home.css';
import React, { useState, useEffect, useCallback } from 'react';
import connectImage from '../assets/4.jpg';
import heroImage from '../assets/main.png';
import visionImage from '../assets/7.jpg';
import WomenKuwaitVideo from '../assets/WomenKuwaitVideo.mp4'


const pressQuotes = [
  {
    quote: "Our goal is to capture high-achieving, ambitious young women at the most transformative time of their lives and have a positive impact on them. If we can do that, we can change the world.",
    source: "Insight News"
  },
  {
    quote: "The Women's Network succeeded in bridging the gap between interdisciplinary female students and connecting them to various professional opportunities.",
    source: "Kuwait Times"
  },
  {
    quote: "A fantastic initiative empowering the next generation of female leaders in Kuwait through mentorship and networking.",
    source: "Local Business Weekly"
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide(current => (current === pressQuotes.length - 1 ? 0 : current + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide(current => (current === 0 ? pressQuotes.length - 1 : current - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  }

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(slideInterval);
  }, [nextSlide]);


  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="hero-section">
        <img src={heroImage} alt="Inspiring women connecting at a Women in Kuwait event" className="hero-image" />
        <div className="hero-content">
          <h1 className="hero-title">
            Women circle for connections in

            <span className="title-accent"> Kuwait</span>
          </h1>
          <div className="hero-footer">
            <p className="hero-description">
              Meet women from every walk of life through social gatherings, skill-building workshops, or a quick scroll.

            </p>
            <Link to="/join" className="cta-button">
              Find Your Community
            </Link>
          </div>
        </div>
      </section>

      {/* --- AMBITION SECTION --- */}
      <section className="ambition-section">
        <div className="ambition-content">
          <div className="video-placeholder">
             <video
                src={WomenKuwaitVideo}
                controls
                autoPlay
                className="video-overlay"
                style={{width: "100%"}}
              >
              <svg
                className="play-icon"
                xmlns={WomenKuwaitVideo}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
             <p>Watch Our Story</p>
              </video>
              
          </div>
          <div className="ambition-text">

            <span className="ambition-title-accent">Who are we?</span>

            <p className="ambition-description">
              After two decades in Kuwait, Maimuna realized that while women have been achieving incredible things in Kuwait, there wasn’t a community where they could consistently meet.<br /><br /> Women Kuwait exists for women who crave real connection.
              Step away from surface-level networking and into a world of fun parties and lifelong friendships.
            </p>
            <Link to="/about-us" className="cta-button">
              Find Friends
            </Link>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="stats-section">
        <div className="stats-content">
          <div className="did-you-know-card">
            <h3 className="did-you-know-title">Did you Know?</h3>
            <p className="did-you-know-stat">
              Over <span className="stat-highlight">80%</span>
            </p>
            <p className="did-you-know-text">
              of professional opportunities are discovered through networking.
            </p>
          </div>
          <div className="impact-stats">
            <div className="stat-item">
              <p className="stat-number">41%</p>
              <p className="stat-label">Kuwaiti startups are lead by women</p>
            </div>
            <div className="stat-item">
              <p className="stat-number">14+</p>
              <p className="stat-label">Years is the average education number</p>
            </div>
            <div className="stat-item">
              <p className="stat-number">1.2%</p>
              <p className="stat-label">MENA VC funding went to women-led startups</p>
            </div>

          </div>
          <div className="stats-point">
            <h4>Kuwaiti women are ready, Let's work together!!</h4>
          </div>

        </div>
      </section>

      {/* --- EVENTS SECTION --- */}
      <section className="events-section">
        <div className="events-content">

          {/* Left side: Info & image */}
          <div className="events-info-left">
            <div className="events-info-text-content">
              <h3 className="events-info-title">Join the Sisterhood</h3>
              <p className="events-info-description">
                Connect with ambitious women, attend curated events, and collaborate with inspiring businesses.
                Your community is here and it’s waiting for you.
              </p>
              <Link to="/join" className="events-info-link">
                <span>Become a Member</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.175 12.9167L12.4333 16.6584L13.5 17.725L19 12.225L13.5 6.725L12.4333 7.79167L16.175 11.5333H5V12.9167H16.175Z" fill="currentColor" />
                </svg>
              </Link>
            </div>

            {/* Left image */}
            <img
              src={connectImage}
              alt="A group of professional women in Kuwait"
              className="events-info-image"
            />
          </div>

          {/* Right side: Upcoming events */}
          <div className="events-main-right">
            <div className="events-bg-lines"></div>
            <h2 className="events-main-title">Upcoming Events</h2>
            <Link to="/events" className="events-cta-button">See All Events</Link>
          </div>

        </div>
      </section>

      {/* ---  VISION SECTION --- */}
      <section className="vision-section">
        <div className="vision-content">
          <div className="vision-image">
            <img src={visionImage} alt="A woman with pink hair, representing the vibrant Wom(en) Kuwait community" />
          </div>
          <div className="vision-text">
            <h2 className="vision-title">Our Vision</h2>
            <p className="vision-description">
              At Wom(en) Kuwait, you will form effortless but meaningful connections. We bring ambitious and curious women together through coffee mornings, creative workshops to panel talks and late-night dinners. You can engage as much as you like or as little. More than a club, we are a sisterhood.
            </p>
            <Link to="/about-us" className="cta-button">
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section className="collaboration-press-section">
        <div className="collaboration-press-content">
          <div className="collaboration-content-left">
            <h2 className="collaborate-title">Let’s Uplift Women Together</h2>
            <p className="collaborate-description">
              When businesses and communities join forces, everyone wins. By partnering with us, you’ll not only uplift women through opportunities, mentorship, and shared experiences,
              but also showcase your brand to an engaged and growing network.
            </p>
            <div className="partnership-grid">
              <div className="partnership-item">
                <h3>Sponsors</h3>
                <p>Support our community by sponsoring wellness sessions, pop-up markets, or networking events.
                  Our high-achieving circle of women will rave about your beauty corners and curated gift bags for days.</p>
              </div>
              <div className="partnership-item">
                <h3>Recruiters</h3>
                <p>Get direct access into a network of powerful women. Share career opportunities,
                  host skill-building workshops, and connect directly with talent ready to grow.</p>
              </div>
              <div className="partnership-item">
                <h3>Speakers</h3>
                <p>We want to hear from you. Bring your expertise to our stage,
                  whether in career coaching, entrepreneurship, or personal growth. Inspire,
                  teach, and gain visibility with a motivated audience.
                </p>
              </div>
              <div className="partnership-item">
                <Link to="/partner" className="partner-cta-button">
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
          <div className="press-slider-right">
            <h3 className="press-title">In the Press</h3>
            <div className="press-slider-wrapper">
              <div
                className="press-slider-container"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {pressQuotes.map((item, index) => (
                  <div className="press-slide" key={index}>
                    <p className="press-quote">"{item.quote}"</p>
                    <p className="press-source">{item.source}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="slider-nav">
              <button onClick={prevSlide} className="slider-arrow prev">&lt;</button>
              <button onClick={nextSlide} className="slider-arrow next">&gt;</button>
            </div>
            <div className="slider-dots-container">
              {pressQuotes.map((_, index) => (
                <button
                  key={index}
                  className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
