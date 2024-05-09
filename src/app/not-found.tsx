import ROUTES from "@/routes/routes";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex h-loader items-center justify-center text-center">
      <div>
        <div>
          <h1 className="error-heading">
            4<span className="text-trueBlue"> 0 </span>4
          </h1>
          <p className="error-message">Sorry There&apos;s</p>
          <p className="error-message trueBlue">Nothing here</p>
        </div>
        <div className="flex items-center justify-center">
          <Link
            className="w-32 h-32 bg-violet-800 flex items-center justify-center text-white text-4xl rounded-full hover:bg-violet-950"
            href={ROUTES.HOME}
          >
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}
