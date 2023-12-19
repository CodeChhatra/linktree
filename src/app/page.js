import Header from "@/components/Header";


export default function Home() {
  return (
    <main>
      <Header />
      <section className="p-4">
      <div className="max-w-md mb-8">
      <h1 className="text-6xl font-bold ">
        Your One Link  <br /> for Everything
       </h1>
       <h2 className="text-gray-500 text-xl mt-6">
        Share Your Links, Social Profiles, Contact info and more on one Page
       </h2>
      </div>
       <form className="inline-flex items-center shadow-lg shadow-violet-400 ">
       <span className="bg-white py-4 pl-4x">
        linklist.to/
       </span>
        <input type="text" className="py-4"
          placeholder="username"
        />
        <button type="submit" className="bg-blue-500 text-white py-4 px-6">
       Join For Free
        </button>
       </form>
      </section>
    </main>
  );
}
