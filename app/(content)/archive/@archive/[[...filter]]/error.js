"use client";

//error files should have use client as errors can come from client side also. so it works on both ends

export default function FilterError({ error }) {
  return (
    <div id="error">
      <h2>An error occurred!</h2>
      <p>{error.message}</p>
    </div>
  );
}
