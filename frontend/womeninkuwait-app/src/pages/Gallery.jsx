import React, { useState } from "react";
import "../Gallery.css";
import hero from "../assets/1.png";
import event1_img1 from "../assets/event1/img1.png";
import event1_img2 from "../assets/event1/img2.jpg";
import event1_img3 from "../assets/event1/img3.jpg";
import event1_img4 from "../assets/event1/img4.jpeg";
import event1_vid1 from "../assets/event1/vid1.mp4";
import event1_vid2 from "../assets/event1/vid2.mp4";
import { FaPlayCircle } from "react-icons/fa"; // 👈 Import play icon

const eventsData = [
  {
    id: 1,
    name: "Launch Event",
    description:
      "A cozy networking event where women connect over art and coffee.",
    images: [event1_img1, event1_img2, event1_img3, event1_img4],
    videos: [event1_vid1, event1_vid2],
  },
];

const Gallery = () => {
  const [selectedEvent, setSelectedEvent] = useState("All");
  const [selectedMedia, setSelectedMedia] = useState(null);

  const uniqueEventNames = [...new Set(eventsData.map((event) => event.name))];

  const filteredMedia =
    selectedEvent === "All"
      ? eventsData.flatMap((event) => [
          ...event.images.map((img) => ({
            type: "image",
            src: img,
            eventName: event.name,
            eventDesc: event.description,
          })),
          ...(event.videos?.map((vid) => ({
            type: "video",
            src: vid,
            eventName: event.name,
            eventDesc: event.description,
          })) || []),
        ])
      : eventsData
          .filter((event) => event.name === selectedEvent)
          .flatMap((event) => [
            ...event.images.map((img) => ({
              type: "image",
              src: img,
              eventName: event.name,
              eventDesc: event.description,
            })),
            ...(event.videos?.map((vid) => ({
              type: "video",
              src: vid,
              eventName: event.name,
              eventDesc: event.description,
            })) || []),
          ]);

  return (
    <div className="gallery-page">
      {/* HERO SECTION */}
      <section
        className="events-hero-section"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="events-hero-overlay"></div>
        <div className="events-hero-content">
          <h1 className="events-hero-title">Events Memories</h1>
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
        {filteredMedia.map((media, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => setSelectedMedia(media)}
          >
            {media.type === "image" ? (
              <img src={media.src} alt={media.eventName} />
            ) : (
              <video src={media.src} muted loop playsInline />
            )}

            {/* Play Icon for Videos Only */}
            {media.type === "video" && (
              <div className="play-icon-overlay">
                <FaPlayCircle className="play-icon" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedMedia && (
        <div className="image-modal" onClick={() => setSelectedMedia(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedMedia(null)}>
              &times;
            </button>

            {selectedMedia.type === "image" ? (
              <img src={selectedMedia.src} alt={selectedMedia.eventName} />
            ) : (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                style={{ width: "300px", borderRadius: "10px" }}
              />
            )}

            <div className="modal-text">
              <h2>{selectedMedia.eventName}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
