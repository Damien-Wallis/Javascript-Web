import React from "react";

export default function Card({ name, status }) {
  return (
    <div className="bg-blue-500 border w-full">
      <p className="font-bold">{name}</p>
      <p>{status}</p>
    </div>
  );
}
