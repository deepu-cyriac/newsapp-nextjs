//this is an intercepting route. Intercepting route folders begin with path to the folder
//i.e, (.) for folder on same level, (..) for folder on one level above
//followed by the folder name its supposed to intercept
//usually the intercepting route is put in the same folder as the route its supposed to intercept

//so different content will be shown either the intercepted one or the current one depending on how you got to the page
//first time will load intercepted. subsequent reloads will load current one - i think

import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-news";

export default function InterceptedImagePage({ params }) {
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  if (!newsItem) {
    //will show the closest not found page
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
