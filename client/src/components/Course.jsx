import React, { useEffect, useState } from "react";
import axios from 'axios'
// import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const Course = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async ()=>{
      try{
        const res = await axios.get("http://localhost:3000/book")
        console.log(res.data)
        setBook(res.data)
      }
      catch(error){
        console.log(error)
      }
    }
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-bold md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
            perferendis ea similique cum, deleniti inventore voluptas commodi
            culpa nostrum laboriosam autem qui veniam necessitatibus modi
            aperiam aliquid tenetur nisi quaerat aspernatur sunt reiciendis
            excepturi mollitia hic. Fugit voluptatem officiis sapiente dolorem
            quis illo eos, maiores corrupti accusamus! Odit, sapiente
            exercitationem?
          </p>

          <Link to="/">
            <button className=" mt-6 px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-700 transition duration-300 cursor-pointer">
              Back
            </button>
          </Link>
        </div>
        <div className=" mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
