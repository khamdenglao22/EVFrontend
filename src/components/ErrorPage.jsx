import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div
      className="h-[100vh] w-full flex flex-col items-center"
      id="error-page"
    >
      <h1 className="mt-20 mb-5 font-semibold text-3xl">Oops!</h1>
      <p className="text-xl font-semibold mb-3">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
