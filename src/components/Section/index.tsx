export default function Section({
  title,
  description = "",
}: {
  title: string;
  description?: string;
}) {
  return (
    <>
      <h1>{title}</h1>
      <p className="read-the-docs">{description}</p>
    </>
  );
}
