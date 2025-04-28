import React from "react";

const UserDashboard = () => {
  const events = [
    {
      id: 1,
      title: "Thick and Thin",
      description:
        "Raw sculptural materials - porcelain clay, steel, timber, and earthen clay.",
      image:
        "https://d19r1twe1senfi.cloudfront.net/uploads/avr/image_event_online/image/7c21c645-f6a6-4dd0-a664-f6ec0140835b/user_crop_Untitled-1.jpg?ts=1730198050",
    },
    {
      id: 2,
      title: "Modern Art Exhibition",
      description:
        "Explore contemporary artworks and installations from renowned artists.",
      image:
        "https://d19r1twe1senfi.cloudfront.net/uploads/avr/image_event_online/image/ba946d15-0fc8-4d8f-9220-23cf9166a201/user_crop_11_A_Migrant_s_Son_production_image_photo_credit_Alain_Bouvier___Noosa_Alive_.jpg?ts=1730701365",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        {events.map((event) => (
          <div
            key={event.id}
            style={{
              width: "300px",
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              backgroundColor: "#fff",
              cursor: "pointer",
            }}
          >
            <div className="event-hero-image">
              <img
                src={event.image}
                alt={event.title}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: "15px" }}>
              <h3 style={{ color: "#77449B", margin: "0 0 10px 0" }}>
                {event.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#333" }}>
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
