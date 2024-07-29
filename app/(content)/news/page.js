import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";

export default function NewsPage() {
  return (
    <>
      <h2>This is the news page!</h2>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
