"use client";
import { useEffect, useState } from "react";
import { FaSmileWink } from "react-icons/fa";

const JokeGenerator = () => {
  const [joke, setJoke] = useState([]);
  const [showJoke, setShowJoke] = useState(true);

  const getJoke = async () => {
    const res = await fetch("http://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    setJoke(data);
    console.log(data);
  };
  useEffect(() => {
    getJoke();
  }, []);

  return (
    <>
      <div className="w-full min-h-screen bg-amber-50 grid  justify-center items-center text-center">
        <div className="bg-white px-10 py-6 shadow rounded-2xl w-100">
          <div className="flex justify-center py-2">
            <FaSmileWink className="w-8 h-8 text-yellow-400 " />
          </div>
          <h1 className="font-bold text-xl py-2">Random Jokes Generator</h1>
          <p className="py-2">{joke.setup}</p>

          {showJoke ? (
            <button 
            onClick={() => setShowJoke(false)} 
            className="bg-amber-500 rounded capitalize text-white px-4 py-2 border-white border  shadow">reveal punchline</button>
          ) : (
            <div>
              <p className="py-2 text-red-600">{joke.punchline}</p>
              <div>
                <button 
                onClick={() => setShowJoke(true)}
                className="bg-amber-500 rounded capitalize text-white px-4 py-2 border-white border  shadow">
                  Hide punchline
                </button>
              </div>
            </div>
          )}

          <div className="pt-2">
            <button
              className="border border-amber-500 bg-white text-amber-500 text-sm px-2 rounded hover:text-white hover:bg-amber-500"
              onClick={getJoke}
            >
              Next
            </button>
          </div>
          <p className="text-sm text-gray-500 pt-8">Joke ID: {joke.id}</p>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default JokeGenerator;
