import { useEffect, useState } from "react";

export default function App() {
  const [allBlogs, setAllBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getAllpost() {
      const posts = await fetch("https://dummyjson.com/posts");
      const cleanedpost = await posts.json();
      console.log(cleanedpost);
      setAllBlogs(cleanedpost.posts);
    }
    getAllpost();
  }, []);

  return (
    <div className="text-center ">
      <h1 className="font-semibold text-3xl mt-5 mb-5">My Blog App</h1>
      <p
        onClick={() => setPosts("changed")}
        className="px-10 text-zinc-800 mb-4"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero
        necessitatibus qui maxime.
      </p>
      <div className="text-left mb-4 px-5">
        <h3 className="text-xl font-semibold mb-4">Latest Blog</h3>
        <div>
          {allBlogs.map((blog, id) => (
            <div className="rounded-xl overflow-hidden shadow-md" key={id}>
              {/* blog image */}
              <div className="px-4 py-3">
                <h4 className="uppercase font-semibold mb-2">{blog.title}</h4>
                <p className="text-[15px] leading-6 text-zinc-700">
                  {blog.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
