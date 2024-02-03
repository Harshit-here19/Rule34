import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="w-full h-[80vh] flex justify-center items-center"
    >
      <div className="flex justify-center items-center flex-col gap-3">
        <h1 className="text-9xl font-sans font-extrabold mb-4">Oops!</h1>
        <p className="font-mono text-lg">
          Sorry, an unexpected error has occurred.
        </p>
        <p>
          <i className="font-mono text-xs">
            {error.statusText || error.message}
          </i>
        </p>
        <Link
          to="/"
          className="font-mono text-xl px-2 py-2 rounded-xl bg-blue-500 hover:bg-white hover:text-blue-500"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
