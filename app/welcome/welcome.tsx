import { useRef } from "react";
import About from "~/pages/about";
import Blog from "~/pages/blog";
import News from "~/pages/news";


export default function Welcome() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const newsRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);


  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white shadow-md">
        <nav className="flex justify-center gap-8 p-4 text-lg font-medium">
          <button
            onClick={() => scrollToSection(aboutRef)}
            // onClick={() => aboutRef.current?.scrollIntoView({
            //   behavior:"smooth"
            // })}
            className="hover:text-blue-600 transition"
          >
            <div ref={aboutRef}>

            <About/>
            </div>
          </button>
          <button
            onClick={() => scrollToSection(newsRef)}
            // onClick={() => newsRef.current?.scrollIntoView({
            //   behavior:"smooth"
            // })}
            className="hover:text-blue-600 transition"
          >
            <div ref={newsRef}>
              
            <News/>
            </div>
          </button>
          <button
            onClick={() => scrollToSection(blogRef)}
            // onClick={() => blogRef.current?.scrollIntoView({
            //   behavior:"smooth"
            // })}
            className="hover:text-blue-600 transition"
          >
            <div ref={blogRef}>

            <Blog/>
            </div>
          </button>
        </nav>
      </header>


      {/* Body */}
      <main className="flex-1">
        <section
          ref={aboutRef}
          className="h-screen flex items-center justify-center bg-gray-100"
        >
          <h1 className="text-4xl font-bold">About Us</h1>
        </section>


        <section
          ref={newsRef}
          className="h-screen flex items-center justify-center bg-gray-200"
        >
          <h1 className="text-4xl font-bold">News</h1>
        </section>


        <section
          ref={blogRef}
          className="h-screen flex items-center justify-center bg-gray-300"
        >
          <h1 className="text-4xl font-bold">Blog</h1>
        </section>
      </main>


      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-4">
        <p>© 2025 My SPA. All rights reserved.</p>
      </footer>
    </div>
  );
}