import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "~/lib/api";
import mdxToHtml from "~/lib/mdxToHtml";
import { PostBody } from "~/app/posts/_components/post-body";
import { PostHeader } from "~/app/posts/_components/post-header";
import { Suspense } from "react";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await mdxToHtml(post.content || "");

  return (
    <main className="max-w-2xl">
      <article>
        <PostHeader title={post.title} date={post.date} name={post.name} />
        <PostBody content={content} />
      </article>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title}`;

  return {
    title,
    description: post.description,
    openGraph: {
      title,
      images: [`/api/og?text=${encodeURIComponent(title)}`],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
