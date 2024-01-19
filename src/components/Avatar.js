import React from "react";
import me from "../assets/images/me-avatar.jpg";

export default function Avatar() {
  return (
    <aside className="avatar">
      <img src={me} alt="Me" />
      <h2 className="avatar-name">Joaquim Costa</h2>
      <h3 className="avatar-title">Software Engineer</h3>
      <h3 className="avatar-company">General Electric</h3>
    </aside>
  );
}
