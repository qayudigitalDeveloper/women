import React, { useState } from "react";
import "../Gallery.css";
import hero from "../assets/1.png";
import event1_img1 from "../assets/event1/event1_img1.PNG";
import event1_img2 from "../assets/event1/event1_img2.JPG";
import event1_img3 from "../assets/event1/event1_img3.JPG";
import event1_img4 from "../assets/event1/event1_img4.JPEG";

const eventsData = [
  {
    id: 1,
    name: "Launch Event",
    description:
      "A cozy networking event where women connect over art and coffee.",
    images: [event1_img1, event1_img2, event1_img3, event1_img4],
  },
];

const Gallery = () => {
  const [selectedEvent, setSelectedEvent] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  // Get unique event names for filter buttons
  const uniqueEventNames = [...new Set(eventsData.map((event) => event.name))];

  // Filtered images logic
  const filteredImages =
    selectedEvent === "All"
      ? eventsData.flatMap((event) =>
          event.images.map((img) => ({
            src: img,
            eventName: event.name,
            eventDesc: event.description,
          }))
        )
      : eventsData
          .filter((event) => event.name === selectedEvent)
          .flatMap((event) =>
            event.images.map((img) => ({
              src: img,
              eventName: event.name,
              eventDesc: event.description,
            }))
          );

  return (
    <div className="gallery-page">
      {/* HERO SECTION */}
      <section
        className="events-hero-section"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="events-hero-overlay"></div>
        <div className="events-hero-content">
          <h1 className="events-hero-title">Event Memories</h1>
          <p className="events-hero-description">
            Relive our most memorable events that brought together inspiring
            leaders, innovative thinkers, and a vibrant community of
            professionals. Take a glimpse into the impactful moments that shaped
            our journey.
          </p>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <div className="gallery-filter">
        <button
          className={selectedEvent === "All" ? "active" : ""}
          onClick={() => setSelectedEvent("All")}
        >
          <span>All</span>
        </button>
        {uniqueEventNames.map((eventName, index) => (
          <button
            key={index}
            className={selectedEvent === eventName ? "active" : ""}
            onClick={() => setSelectedEvent(eventName)}
          >
            <span>{eventName}</span>
          </button>
        ))}
      </div>

      {/* GALLERY GRID */}
      <div className="gallery-grid">
        {filteredImages.map((img, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => setSelectedImage(img)}
          >
            <img src={img.src} alt={img.eventName} />
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedImage(null)}>
              &times;
            </button>
            <img src={selectedImage.src} alt={selectedImage.eventName} />
            <div className="modal-text">
              <h2>{selectedImage.eventName}</h2>
              {/* <p>{selectedImage.eventDesc}</p> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
