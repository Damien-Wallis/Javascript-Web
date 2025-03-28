import React from "react";

export default function Card1({ name, occupation, image }) {
  return (
    <div className="flex h-40">
      <div>
        <h2>{name}</h2>
        <h4>{occupation}</h4>
      </div>
      <div className="bg-green-400 w-full">
        <img src={image} alt={name} className="object-contain w-full h-full" />
      </div>
    </div>
  );
}
