//route.js is a reserved nextjs file name
//this creates a route handler
//this exports various functions which handles data
//this returns & accepts json data

export function GET(request) {
  console.log(request);

  //return Response.json(); -- to give a json response

  return new Response("Hello!");
}

// export function POST(request) {
//   console.log(request);
// }
