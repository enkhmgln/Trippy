import React from "react";

function TripData(props) {
  return (
    <div className="flex-wrap flex w-1/3 text-start shadow-lg shadow-gray-300 rounded-md cursor-pointer p-4 md:w-full m-2">
      <div className="h-200 w-200 overflow-hidden rounded-xl  aspect-w-4 aspect-h-3 pt-2  ">
        <img src={props.image} alt='Images' className="h-auto max-w-full object-cover transition duration-300 ease-in-out rounded-md transform hover:scale-125"/>
      </div>
      <h4 className="text-2xl font-bold py-2 px-1/2">{props.heading}</h4>
      <p className="py-1 px-1/2 font-medium">{props.text}</p>
    </div>
  );
}

export default TripData;
