"use client";

import SmallFooter from "@/components/layout/smallFooter";
import { Search } from "@/components/icons/search";
import * as motion from "motion/react-client";
import { Enter } from "@/components/icons/enter";
import { useState } from "react";
import { Close } from "@/components/icons/close";
import { useRouter } from "next/navigation";

export default function SearchPage() {
  const router = useRouter();
  const [input, setInput] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.trim() === "") return;

    router.push(`/search/media?query=${input}`);
  };

  const handleClearInput = () => {
    setInput("");
  };

  return (
    <>
      <main className="mb-36">
        <section className="flex flex-col mx-[10%] items-center justify-center h-full pt-24 gap-12">
          <h1 className="text-7xl font-black max-w-xl text-center">
            Try to search something
          </h1>

          <form
            action="submit search input"
            method="POST"
            onSubmit={handleSubmit}
            className="relative flex items-center"
          >
            <fieldset>
              <label
                className="flex gap-2 relative items-center border-2 border-neutral-800 text-xl rounded-2xl shadow-main/5 focus-within:scale-105 transition-all ease-bounce duration-400"
                htmlFor="search"
                aria-label="Search input for movies and tv series"
              >
                <input
                  className="flex pl-14 py-4 outline-0 placeholder:text-neutral-600 min-w-2xl peer"
                  id="search"
                  type="text"
                  placeholder="Search for anything..."
                  onChange={handleInputChange}
                  value={input}
                />

                <Search className="absolute ml-4 text-neutral-600 peer-focus:text-text transition-all ease-in-out duration-200" />

                <button
                  className="absolute right-0 mr-18 cursor-pointer text-neutral-600 hover:text-neutral-400 transition-all ease-in-out duration-200"
                  type="button"
                  onClick={handleClearInput}
                >
                  <Close />
                </button>

                <motion.button
                  className={
                    "flex gap-2 px-2 py-0.5 w-fit rounded-lg border-2 border-neutral-800 mr-3 items-center font-semibold transition-colors bg-neutral-900 ease-in-out duration-200 absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"
                  }
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Enter className="text-white" width={28} height={28} />
                </motion.button>
              </label>
            </fieldset>
          </form>
        </section>
      </main>
      <SmallFooter />
    </>
  );
}
