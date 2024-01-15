function Content({ title, content: ContentComponent }) {
  return (
    <section className="content">
      <h1>{title}</h1>
      <ContentComponent />
    </section>
  );
}

export default Content;
