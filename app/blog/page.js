import PostList from "@/components/posts/PostList";
import { getAllPosts } from "@/queries/blog-data";


const BlogPage = async () => {
  const posts = await getAllPosts();

  //   console.log(posts);

  return (
    <div>
      <PostList posts={posts} />
    </div>
  )
}

export default BlogPage
