'use client';
import React from "react";
 
type GlobalErrorProps = {
  error: Error & { cause?: string };
  reset: () => void;
};
export default function GlobalError({
  error,
  reset,
}: GlobalErrorProps) {
  console.log(error);
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <p>{error.message}</p>
        <p>{error.cause}</p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}