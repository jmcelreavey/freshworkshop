/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import { tw } from "@twind";
import { listPosts, Post } from "../utils/posts.ts";
import { Data, Layout } from "../components/Layout.tsx";
import { Handlers } from "$fresh/server.ts";
import { State } from "../utils/state.ts";

export const handler: Handlers<Data, State> = {
  async GET(_req, ctx) {
    const posts = await listPosts();
    return ctx.render({ ...ctx.state, posts });
  },
};

export default function Home(props: PageProps<Data>) {
  const { posts, locales, darkMode } = props.data;

  return (
    // Move darkmode to a hook
    <Layout darkMode={darkMode}>
      <h1 class={tw`font-bold text-5xl mt-12`}>Johnny's Blog</h1>
      <ul class={tw`mt-8`}>
        {posts.map((post) => (
          <PostEntry post={post} locales={locales} />
        ))}
      </ul>
    </Layout>
  );
}

function PostEntry(props: { post: Post; locales: string[] }) {
  const { post, locales } = props;
  const dateFmt = new Intl.DateTimeFormat(locales, { dateStyle: "short" });
  return (
    <li class={tw`border-t `}>
      <a href={`/blog/${post.id}`} class={tw`py-2 flex group gap-4`}>
        <div>{dateFmt.format(post.publishAt)}</div>
        <div>
          <h2 class={tw`font-bold group-hover:underline`}>{post.title}</h2>
          <p class={tw`text-gray-600`}>{post.snippet}</p>
        </div>
      </a>
    </li>
  );
}
