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

    const query = input.trim().replaceAll(" ", "-");
    router.push(`/search/media?query=${query}`);
  };

  const handleClearInput = () => {
    setInput("");
  };

  return (
    <div className="grid min-h-dvh grid-rows-[1fr_auto]">
      <main className="mb-36">
        <section className="flex flex-col mx-4 sm:mx-12 md:mx-[10%] items-center justify-center h-full pt-16 sm:pt-20 md:pt-24 gap-8 sm:gap-10 md:gap-12">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black max-w-xs sm:max-w-lg md:max-w-xl text-center">
            Try to search something
          </h1>

          <form
            action="submit search input"
            method="POST"
            onSubmit={handleSubmit}
            className="relative flex items-center w-full max-w-xs sm:max-w-md md:max-w-2xl"
          >
            <fieldset className="w-full">
              <label
                className="flex gap-2 relative items-center border-2 border-neutral-800 text-base sm:text-lg md:text-xl rounded-2xl shadow-main/5 focus-within:scale-105 transition-all ease-bounce duration-400 w-full"
                htmlFor="search"
                aria-label="Search input for movies and tv series"
              >
                <input
                  className="flex pl-12 sm:pl-14 py-3 sm:py-4 outline-0 placeholder:text-neutral-600 w-full peer text-base sm:text-lg max-[325px]:hidden"
                  id="search"
                  type="text"
                  placeholder="Search for anything..."
                  onChange={handleInputChange}
                  value={input}
                />
                <input
                  className="hidden pl-12 sm:pl-14 py-3 sm:py-4 outline-0 placeholder:text-neutral-600 w-full peer text-base sm:text-lg max-[325px]:flex"
                  id="search"
                  type="text"
                  placeholder="Search.."
                  onChange={handleInputChange}
                  value={input}
                />

                <Search className="absolute ml-3 sm:ml-4 text-neutral-600 peer-focus:text-text transition-all ease-in-out duration-200" />

                <button
                  className="absolute right-16 sm:right-20 cursor-pointer text-neutral-600 hover:text-neutral-400 transition-all ease-in-out duration-200"
                  type="button"
                  onClick={handleClearInput}
                >
                  <Close className="max-[325px]:hidden" />
                </button>

                <motion.button
                  className="flex gap-2 px-2 py-0.5 w-fit rounded-lg border-2 border-neutral-800 mr-2 sm:mr-3 items-center font-semibold transition-colors bg-neutral-900 ease-in-out duration-200 absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Enter className="text-white" width={24} height={24} />
                </motion.button>
              </label>
            </fieldset>
          </form>
        </section>
      </main>
      <SmallFooter />
    </div>
  );
}
