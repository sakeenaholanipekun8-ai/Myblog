const allBlogs = [
  {
    img: "/img18.jpg",
    title: "she is an hardworking girl",
    des: "lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, et unde. Voluptas asperiores suscipit placeat quos deserunt quasi.",
  },
  {
    img: "/img10.jpg",
    title: "the beauty of nature",
    des: "lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, et unde. Voluptas asperiores suscipit.",
  },
  {
    img: "/download.jfif",
    title: "exploring the world",
    des: "lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, et unde. Voluptas asperiores suscipit.",
  },
];

export default function () {
  return (
    <div className="text-center ">
      <h1 className="font-semibold text-3xl mt-5 mb-5">My Blog App</h1>
      <p className="px-10 text-zinc-800 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero
        necessitatibus qui maxime.
      </p>
      <div className="text-left mb-4 px-5">
        <h3 className="text-xl font-semibold mb-4">Latest Blog</h3>
        <div>
          {allBlogs.map((blog, id) => (
            <div className="rounded-xl overflow-hidden shadow-md">
              {/* blog image */}
              <div className="w-full h-50">
                <img
                  src={blog.img}
                  alt=""
                  className="w-full h-full oject-cover"
                />
              </div>
              <div className="px-4 py-3">
                <h4 className="uppercase font-semibold mb-2">
                {blog.title}
                </h4>
                <p className="text-[15px] leading-6 text-zinc-700">
                 {blog.des}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
