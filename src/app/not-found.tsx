import SmallFooter from "@/components/layout/smallFooter";
import MainLinkButton from "@/components/ui/buttons/mainLinkButton";

export default function NotFound() {
  return (
    <div className="grid min-h-dvh grid-rows-[1fr_auto]">
      <main className="mb-36 justify-center flex flex-col items-center h-full">
        <div className="flex flex-col items-center justify-center h-full text-center max-w-xl mx-[10%]">
          <h1 className="text-6xl font-black mb-2">
            Oops! This place looks empty
          </h1>
          <p className="text-text/50 mb-6 text-lg">
            The page you are looking for does not exist or has been moved.
            Please check the URL or return to the homepage.
          </p>

          <MainLinkButton text="Back to Home" href="/" primary blank={false} />
        </div>

        <div className="not-found relative">
          <img
            src="https://cdn.prod.website-files.com/6476dfb953dc2bc84373e1b2/655db2ba500155ba79ffd5cb_404-img.svg"
            alt="Not Found image"
          />
        </div>
      </main>
      <SmallFooter />
    </div>
  );
}
