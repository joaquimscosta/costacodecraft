import React from "react";
import me from "../assets/images/me-avatar.jpg";

export default function Avatar() {
  return (
    <div className="justify-self-center text-center">
      <div className="avatar">
        <div className="max-w-md rounded-full">
          <img className="max-w-full" src={me} alt="Me" />
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-thin avatar-name">Joaquim Costa</h2>
        <h3 className="text-2xl font-light avatar-title">Software Engineer</h3>
        <h3 className="text-xl avatar-company">Capgemini</h3>
      </div>
    </div>
  );
}
