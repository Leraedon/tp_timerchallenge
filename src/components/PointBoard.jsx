import { useState } from "react"

export default function PointBoard() {
  const [scoreRecords, setScoreRecords] = useState([0]);

  /*function handleScore(newScore) {
    setScoreRecords((prevScore) => {
      const updatedRecords = [...prevScore, newScore];

      return updatedRecords;
    });
  }*/

  

  return (
    <section className="y-8 flex flex-row m-auto p-8 justify-center">
      <div className="flex flex-col mr-24 text-center">
        <p className=" text-emerald-800 font-bold font-serif text-6xl">YOUR SCORE</p>
        <p className=" text-emerald-900 font-bold font-serif text-6xl">{scoreRecords[scoreRecords.length-1]}</p>
      </div>
      <div className="flex flex-col text-center">
        <p className=" text-emerald-800 font-bold font-serif text-6xl">HIGH SCORE</p>
        <p className=" text-emerald-900 font-bold font-serif text-6xl">{Math.max(...scoreRecords)}</p>
      </div>
    </section>
  )
}