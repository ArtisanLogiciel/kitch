'use client';
 
type GlobalErrorProps = {
  error: Error;
  reset: () => void;
};
export default function GlobalError({
  error,
  reset,
}: GlobalErrorProps) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}