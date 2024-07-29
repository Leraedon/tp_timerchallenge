
export default function Header() {
  return (
    <header className="items-center flex flex-col pt-9 mb-8">
      <h1 className="text-5xl font-bold font-serif text-green-200 tracking-widest">
        l<span className="text-teal-400">R</span>do<span className="text-teal-400">N</span> 
      <span className="text-cyan-800"> TIMER</span>
      </h1>
      <div className="mt-4 mb-4 font-semibold text-emerald-100 text-xl">
        <p>Stop the timer once you estimate that time is (almost) up</p>
        <p>If you succeed, you earn points according to the remaining timer time</p>
        <p>If you fail, you lose points.</p>
      </div>
    </header>
  );
}