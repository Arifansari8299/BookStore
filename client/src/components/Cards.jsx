import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="mt-4 px-4 my-3">
      <div className="card bg-base-100 w-full max-w-xs sm:max-w-sm md:max-w-md shadow-sm mx-auto hover:scale-105 transition duration-300 ease-in-out dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img
            src={item.image}
            alt={item.name}
            className="w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className=" border rounded-2xl hover:bg-pink-500 hover:text-white px-2 py-1 rounded transition duration-200 cursor-pointer ">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
