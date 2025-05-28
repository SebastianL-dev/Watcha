import SmallFooter from "@/components/layout/smallFooter";
import MainLinkButton from "@/components/ui/buttons/mainLinkButton";

export default function NotFound() {
  return (
    <div className="grid min-h-dvh grid-rows-[1fr_auto] items-center justify-center">
      <main className="mb-20 flex flex-col items-center justify-center px-4 self-center mt-28">
        <div className="flex flex-col items-center justify-center text-center w-full max-w-xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-black mb-2">
            Oops! This place looks empty
          </h1>
          <p className="text-text/50 mb-6 text-base sm:text-lg">
            The page you are looking for does not exist or has been moved.
            Please check the URL or return to the homepage.
          </p>
          <MainLinkButton text="Back to Home" href="/" primary blank={false} />
        </div>

        <div className="not-found relative w-full flex justify-center mt-8">
          <img
            src="https://cdn.prod.website-files.com/6476dfb953dc2bc84373e1b2/655db2ba500155ba79ffd5cb_404-img.svg"
            alt="Not Found image"
            className="h-auto max-h-42"
          />
        </div>
      </main>
      <SmallFooter />
    </div>
  );
}
