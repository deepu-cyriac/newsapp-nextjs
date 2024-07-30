//this is an intercepting route. Intercepting route folders begin with path to the folder
//i.e, (.) for folder on same level, (..) for folder on one level above
//followed by the folder name its supposed to intercept
//usually the intercepting route is put in the same folder as the route its supposed to intercept

//so different content will be shown either the intercepted one or the current one depending on how you got to the page
//first time will load intercepted. subsequent reloads will load current one - i think

import { notFound } from "next/navigation";

import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";

export default async function InterceptedImagePage({ params }) {
  const newsItemSlug = params.slug;
  const newsItem = await getNewsItem(newsItemSlug);

  if (!newsItem) {
    //will show the closest not found page
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
