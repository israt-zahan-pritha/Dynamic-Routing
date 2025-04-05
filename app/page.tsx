export default function HomePage() {
  return (
    <div>
      <section className="py-32 bg-[#e8f2ee] dark:bg-white flex flex-col items-center">
        <h1 className="text-8xl">Wellcome to our home page</h1>
        <div className="mt-6 flex justify-center gap-6">
          <button className="bg-[#5bb89f] text-lg font-medium text-white px-6 py-3 rounded-md ">
            Open Account
          </button>
          <button className="text-[#5bb89f] text-lg font-medium flex items-center gap-1">
            Compare Cards →
          </button>
        </div>
      </section>
    </div>
  );
}
