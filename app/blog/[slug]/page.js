import PostDetails from "@/components/posts/PostDetails";
import { getPost } from "@/queries/blog-data"

const BlogDetailsPage = async ({params}) => {
    const {slug} = await params;

    const post = await getPost(slug)

  return (
    <PostDetails post={post} />
  )
}

export default BlogDetailsPage
