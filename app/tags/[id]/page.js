

import PostList from "@/components/posts/PostList";
import { getAllPosts } from "@/queries/blog-data";
import Link from "next/link";

async function PostByTagPage({params}) {
    const {id} = await params;

    const posts = await getAllPosts([id]);

    const tags = posts[0].node.tags;

    const foundTag = tags.find((tag) => tag.id === id);

  return (
    <div className="flex flex-col">

        <div>
            <p>
                {posts.length} posts found for the tag {foundTag?.name}
            </p>
            <span className="mr-2"></span>

            <Link href={'/blog'} className="underline">See All Blogs</Link>
        </div>

        <PostList posts={posts} />
      
    </div>
  )
}

export default PostByTagPage
