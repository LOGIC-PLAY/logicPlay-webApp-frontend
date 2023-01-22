import { useRouter } from "next/router";

const BlogPage = () => {
    const router = useRouter();

    const { blogId } = router.query;

    return (
        <div>
            Blog page for blog id {blogId}
        </div>
    );
};

export default BlogPage;