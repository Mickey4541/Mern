import React from 'react';

const Card = () => {
  return (
    <div className="bg-white shadow-md rounded-lg flex flex-col items-center p-5 w-[15vw] h-[350px] m-10">
      <img
        src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
        alt="Card Image"
        className="rounded-md mb-1"
      />
      <h3 className="text-yellow-500 text-2xl font-semibold text-center mb-1">Card Title</h3>
      <p className="text-black text-center">
        This is a short description for the card. It's a placeholder for some sample text.
      </p>
    </div>
  );
};

export default Card;
