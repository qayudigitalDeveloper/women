import React, { useState } from "react";
import "../Events.css";

import eventsHeroImage from "../assets/6.png";
import joinSectionImage from "../assets/3.jpg";
// import digitalMarketingImage from '../assets/5.jpg';
import coffee_and_connect from "../assets/coffee-and-connect-event.jpg";

const upcomingEventsData = [
  // {
  //   image: digitalMarketingImage,
  //   title: 'Exciting event with Wom(en) Kuwait',
  //   date: 'Launching this October',
  //   description: 'Wom(en) Kuwait’s first event is launching this October. With this event, we will start our journey of connecting ambitious, curious women all over Kuwait. As we get closer to the launch date, we will release more information. Please keep watching this space. We don’t want you to miss out on a chance to meet the brilliant minds of Kuwait.',
  //   location: 'To be determined',
  // },
  {
    image: coffee_and_connect,
    title: "Coffee and Connect Event",
    description:
      "Join us for an afternoon dedicated to genuine connection. This isn't just about coffee; it's an activity designed to foster warm conversations and build community in a relaxed and welcoming environment. Start your day by networking with like-minded women and enjoying the warmth of good company.",

    location: "Espresso cafe, Salmiya",
    date: "15th November",
    time: "04:30",
    Kuwait_dinar: " 8 KD includes the Coffee, Art supplies ",
    Activity:
      "painting and networking and understand one of the business keep point of view",
  },
  // {
  //   image: coffee_and_connect,
  //   title: 'Luxury Networking Night',
  //   date: 'Coming up this December',
  //   description: "Experience an evening of pure elegance designed for high-level networking and connection. Mingle with inspiring women as you enjoy sophisticated mocktails and music. This event is a premier opportunity to forge meaningful connections in a chic and exclusive setting.",
  //   location: 'To be determined',
  // },
  // {
  //   image: coffee_and_connect,
  //   title: "Vision Board Party",
  //   date: 'Coming up this February',
  //   description: "Tap into your creativity and set your intentions for the future. This hands-on activity involves visualizing your next chapter and creating a powerful vision board. More importantly, it's a night to dream out loud in a supportive space, connecting with others as you share your goals and aspirations.",
  //   location: 'To be determined',
  // },
  // {
  //   image: coffee_and_connect,
  //   title: "Painting and Pottery",
  //   date: 'Coming up this March',
  //   description: "Unleash your inner artist in this calming, creative session. Whether you choose painting or pottery, this hands-on activity is a chance to express yourself through colors and clay. Connect with fellow members in a relaxed environment, finding inner stillness and sparking new friendships through shared creativity.",
  //   location: 'To be determined',
  // },
  // {
  //   image: coffee_and_connect,
  //   title: "Pop-Up Market for Women Entrepreneurs",
  //   date: 'Coming up this April',
  //   description: "Energize your mind and body! This morning is all about movement, offering dynamic activities like yoga and cycling. Join other Wom(en) Kuwait members to stretch, move, and awaken your body with rhythm and flow. It's a perfect way to connect over shared wellness goals and start your day strong.",
  //   location: 'To be determined',
  // },
  // {
  //   image: coffee_and_connect,
  //   title: "Public Speaking: Women Who Inspire",
  //   date: 'Coming up this May',
  //   description: "Prepare to be inspired. This event features powerful, unfiltered stories from women who have built, pivoted, and found their way. It’s more than just a lecture; it's a deep connection activity, hearing stories straight from the heart. Network with the speakers and other members moved by these honest journeys.",
  //   location: 'To be determined',
  // },
];

const whyJoinData = [
  {
    title: "Online Events",
    text: "Attend live webinars from experts, 80 minutes co-working hours, or skill swap where you share your skills with each other. Or you can just log in with a cup of coffee and chat with your new friends. ",
  },
  {
    title: "Offline Events",
    text: "Dress up to the nine for red carpet dinner, visit our collaborator’s pop-up market, or attend vision board parties. We’re continuously coming up with new concepts to keep you entertained.",
  },
  {
    title: "Volunteer",
    text: "We love to see women take the lead. If you think you would like to host any of the events or contribute in some other ways, drop us an email. ",
  },
  {
    title: "Mentorship",
    text: "Find mentors invested in your personal growth. Connect with them directly through our website or meet them at our specialized career-based events. ",
  },
];

const EventDetailModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>

        <img src={event.image} alt={event.title} className="modal-image" />

        <div className="modal-text-content">
          <h2 className="modal-title">{event.title}</h2>
          <p className="modal-date">
            {event.date} <span>• {event.time} PM</span>
          </p>

          <p className="modal-description">{event.description}</p>

          <div className="modal-info-box">
            <div className="modal-location">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{event.location}</span>
            </div>

            <div className="modal-activity">
              <h4>Activity Includes:</h4>
              <p>{event.Activity}</p>
            </div>

            <div className="modal-price">
              <strong>Entry Fee:</strong> {event.Kuwait_dinar}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="events-page">
      {/* --- HERO SECTION --- */}
      <section
        className="events-hero-section"
        style={{ backgroundImage: `url(${eventsHeroImage})` }}
      >
        <div className="events-hero-overlay"></div>
        <div className="events-hero-content">
          <h1 className="events-hero-title">Upcoming Events</h1>
          <p className="events-hero-description">
            Take part in exclusive events that connect our members with Kuwait's
            industry leaders, professional development resources, and
            transformative career opportunities.
          </p>
        </div>
      </section>

      {/* --- WHY JOIN SECTION --- */}
      <section className="why-join-section">
        <div className="why-join-container">
          <div className="why-join-image-wrapper">
            <img
              src={joinSectionImage}
              alt="A member of Women Kuwait smiling"
              className="why-join-image"
            />
          </div>
          <div className="why-join-content">
            <h2 className="why-join-title">Events to Join</h2>
            <div className="why-join-grid">
              {whyJoinData.map((card, index) => (
                <div className="why-join-card" key={index}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- "NEXT UP" EVENT LISTING SECTION --- */}
      <section className="events-list-section">
        <div className="events-list-container">
          <h2 className="events-list-title">Upcoming Events</h2>
          <div className="events-grid">
            {upcomingEventsData.map((event, index) => (
              <div
                className="event-card upcoming"
                key={index}
                onClick={() => setSelectedEvent(event)} // Added onClick here
              >
                <div className="event-card-image-container">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="event-card-image"
                  />
                </div>
                <div className="event-card-content">
                  <h3 className="event-card-title">{event.title}</h3>
                  <p className="event-card-date">{event.date}<span>, {event?.time}</span> </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PAST EVENTS SECTION --- 
      <section className="events-list-section">
        <div className="events-list-container">
          <h2 className="events-list-title">Past Events</h2>
          <div className="events-grid">
            {pastEventsData.map((event, index) => (
              <div className="event-card" key={index}>
                <div className="event-card-image-container">
                  <img src={event.image} alt={event.title} className="event-card-image" />
                </div>
                <div className="event-card-content">
                  <h3 className="event-card-title">{event.title}</h3>
                  <p className="event-card-date">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* --- RENDER THE MODAL --- */}
      <EventDetailModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
};

export default Events;
