/** @jsx h */
import { ComponentChildren, h } from "preact";
import { tw } from "@twind";

type LayoutProps = {
  darkMode?: boolean;
  children: ComponentChildren;
};

export function Layout(props: LayoutProps) {
  const { darkMode, children } = props;
  return (
    <div className={tw`${darkMode ? "dark" : ""}`}>
      <div
        className={tw`flex w-screen h-screen bg-white text-black dark:(bg-gray-800 text-white)`}
      >
        <nav>
          <ol className={tw`grid gap-4 grid-cols-3 my-2`}>
            <li>
              <form action="" method="post">
                <input
                  id="dark-mode"
                  name="dark-mode"
                  type="submit"
                  value={darkMode ? "🌞" : "🌚"}
                  className={tw`w-8 bg-transparent cursor-pointer`}
                />
              </form>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ol>
        </nav>
        <div class={tw`px-4 mx-auto max-w-screen-md`}>{children}</div>
      </div>
    </div>
  );
}
