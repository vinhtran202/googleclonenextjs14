"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

export default function HomeSearch() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    router.push(`/search/web?searchTerm=${search}`);
  };

  const randomSearch = async () => {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word");
    const data = await response.json();
    setSearch(data[0]);
    router.push(`/search/web?searchTerm=${data[0]}`);
    setRandomSearchLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex w-full md-5 mx-auto max-w-[-90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          className="flex-grow focus:outline-none"
        />
        <BsFillMicFill className="text-xl text-gray-500 mr-3" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row">
        <button className="btn" onClick={handleSubmit}>
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          className="btn flex items-center justify-center disabled:opacity-80 "
          onClick={randomSearch}
        >
          {randomSearchLoading ? (
            <img
              src="/svg/loading.svg"
              alt="loading"
              className="h-8 text-center"
            />
          ) : (
            "I'm Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
}
