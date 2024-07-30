import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

//this is converted to a server component from a client component. check git or file history to view client side data fetching
//this is the standard way to fetch data in next.js i.e, to fetch data using server component
//it also provides seo features as the prepared data is returned from the server with the page
export default async function NewsPage() {
  //the below commented code is for server side data fetching
  // const response = await fetch("http://localhost:8080/news");

  // if (!response.ok) {
  //   throw new Error("Failed to fetch news.");
  // }

  // const news = await response.json();

  //the below code is for if your db is handled by you and you own the db, move it into project folder and direct fetch from db without backend

  const news = await getAllNews();

  return (
    <>
      <h2>This is the news page!</h2>
      <NewsList news={news} />;
    </>
  );
}
