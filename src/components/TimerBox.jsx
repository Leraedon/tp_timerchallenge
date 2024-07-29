export default function TimerBox({ targetLevel }) {
  const timerCount = [1, 3, 5, 10, 15, 25]

  return (
  <>
    <section className="flex flex-col rounded-2xl items-center bg-emerald-200 p-8 my-6 mx-10 w-2/3 md:w-2/5
                      text-teal-800 font-bold font-serif text-lg">
      <div className="flex flex-row mb-9">
        <span className="mr-4">Level {targetLevel}:</span>
        <span className="mr-11">{timerCount[targetLevel-1]} second{timerCount[targetLevel-1] != 1 && "s"}</span>
        <span>(Max Score: {timerCount[targetLevel-1] * 100})</span>
      </div>
      <div className="flex flex-row mb-9">
        <button className="rounded-md bg-teal-900 p-2 text-white font-sans mr-9 px-4 py-3">Start Timer</button>
        <p className="text-teal-500 text-2xl">Let's Try!</p>
      </div>
      <p>Your Best: 0.1s left</p>
    </section>
  </>
  );
}