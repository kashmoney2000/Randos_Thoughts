import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'
// import { getAllPublished } from '@/lib/notionCms'
import { getAllPosts } from '@/lib/notion'

export const POSTS_PER_PAGE = 5

export async function getStaticProps() {
  //const posts = await getAllFilesFrontMatter('blog/blogs')
  // const posts = await getAllPublished()
  const posts = await getAllPosts(process.env.NOTION_DATABASE_ID)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Blog({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      />
    </>
  )
}
