//In this folder parallel routes are implemented
//Parallel routes folder names starts with @ symbol
//Basically, it allows us to display content from two routes in a single page
//For eg:, here archived news in one section and latest news in another section in a single page

export default function ArchiveLayout({ archive, latest }) {
  //the prop names should be the folder name

  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
