import React from "react";
import me from "../assets/images/me-avatar.jpg";

export default function Avatar() {
  return (
    <aside className="avatar">
      <img
        src={me}
        alt="Me"
        style={{
          width: "300px",
          borderRadius: "50%",
        }}
      />
      <h2>Joaquim Costa</h2>
      <h3>Software Engineer</h3>
      <h3>General Electric</h3>
    </aside>
  );
}
