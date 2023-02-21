import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="text-center pt-0.6rem px-1rem m-auto rounded bg-teal-500  text-white text-lg font-bold tracking-wider transition ease-in-out 0.3s hover:bg-gray-900 hover:color-white mt-2" type={props.type}>
        {props.text}
      </button>
    </div>
  );
};

export default Button;
