interface Subscriber {
  data: React.ReactNode[];
  text: string;
}
// Render a code block with some text.
const CodeBlock = ({ data, text }: Subscriber) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 min-h-screen ">
      <p className="text-xl text-red-600">{text}</p>
      <pre className="text-md bg-neutral-300 p-4 rounded-lg">
        {data
          ? JSON.stringify(data, null, 2)
          : "This ID does not exist in database."}
      </pre>
    </div>
  );
};

export default CodeBlock;
