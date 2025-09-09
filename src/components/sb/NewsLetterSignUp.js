"use client";

import { useState } from "react";

export default function NewsLetterSignUp({ data }) {
  const { title, text, placeholder_input, button } = data;

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Success!");
    setInputValue("");
  };

  return (
    <div className="flex-1 mb-10 md:mb-0 flex flex-col items-center md:items-start" >
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="mb-2">{text}</p>
      <form
        onSubmit={handleSubmit}
        className="border-1 w-full flex justify-between p-2"
      >
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder={placeholder_input}
          className="w-3/4 outline-0"
        />
        <button type="submit" className="font-bold w-1/4 cursor-pointer">
          {button}
        </button>
      </form>
    </div>
  );
}
