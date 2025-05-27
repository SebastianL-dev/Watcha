import ReactPaginate from "react-paginate";

export default function Paginate({
  pages,
  page,
  changePage,
}: {
  pages: number;
  page: number;
  changePage: (page: number) => void;
}) {
  return (
    <ReactPaginate
      className="flex gap-2 sm:gap-3 text-text/50 border-2 border-neutral-800 px-3 py-2 sm:px-6 sm:py-3 rounded-full bg-neutral-950 items-center drop-shadow-main/20 transition-all ease-in-out duration-200 flex-wrap sm:flex-nowrap text-sm sm:text-base"
      pageLinkClassName="cursor-pointer px-2 sm:px-3 flex items-center hover:scale-110 hover:bg-primary/25 rounded-lg hover:text-text/80 transition-all ease-in-out duration-200"
      nextLinkClassName="cursor-pointer flex rounded-lg px-2 py-0 items-center justify-center border-2 border-neutral-700/80 text-lg sm:text-xl bg-neutral-800/70 text-text/70 font-bold hover:scale-110 hover:bg-neutral-800 transition-all ease-in-out duration-200"
      previousLinkClassName="cursor-pointer flex rounded-lg px-2 py-0 items-center justify-center border-2 border-neutral-700/80 text-lg sm:text-xl bg-neutral-800/70 text-text/70 font-bold hover:scale-110 hover:bg-neutral-800 transition-all ease-in-out duration-200"
      activeLinkClassName="bg-primary/25 border-2 border-primary flex rounded-lg text-text font-bold items-center"
      nextLabel=">"
      previousLabel="<"
      forcePage={page - 1}
      pageRangeDisplayed={1}
      marginPagesDisplayed={1}
      breakLabel="⋯"
      onPageChange={(page) => changePage(page.selected + 1)}
      pageCount={Math.min(pages, page + 5 - 1)}
    />
  );
}
