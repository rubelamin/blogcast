import Link from "next/link";

const Tag = ({ tag }) => {
  return (
    <div className="m-1 bg-gray-500 text-white rounded-md p-1 text-sm">
      <Link href={`/tags/${tag.id}`}>{tag?.name}</Link>
    </div>
  );
};

export default Tag;
