export default function List({ type, data }) {
  return (
    <div className="text-text w-fit">
      <h3 className="title-style">Archives List "{type}"</h3>
      <div className="py-[10px]  border-l border-accent">
        {data.map((c) => (
          <div
            key={c.id}
            className="underline px-2 py-1 text-lg text-title hover:text-accent transition"
          >
            "{c.text}"
          </div>
        ))}
      </div>
    </div>
  );
}
