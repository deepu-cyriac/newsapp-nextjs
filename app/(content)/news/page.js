import NewsList from "@/components/news-list";

//this is converted to a server component from a client component. check git or file history to view client side data fetching
//this is the standard way to fetch data in next.js i.e, to fetch data using server component
//it also provides seo features as the prepared data is returned from the server with the page
export default async function NewsPage() {
  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) {
    throw new Error("Failed to fetch news.");
  }

  const news = await response.json();

  return (
    <>
      <h2>This is the news page!</h2>
      <NewsList news={news} />;
    </>
  );
}
