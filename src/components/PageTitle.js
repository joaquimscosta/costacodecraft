import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PageTitle() {
  const location = useLocation();
  let [title, setTitle] = useState("");
  useEffect(() => {
    const newTitle = location.pathname;
    if (newTitle.length > 0) {
      setTitle(newTitle.slice(1));
    }
  }, [location]);

  if (title) {
    return (
      <h2 className="capitalize pb-2 pl0-2 text-5xl border-b-2 page-title">
        {title}
      </h2>
    );
  }
  return <></>;
}
