import { useEffect, useRef } from "react";
import ExerciseCard from "./ExerciseCard.jsx";

export default function Warmup({ warmup }) {
  const detailsRef = useRef(null);

  useEffect(() => {
    if (detailsRef.current) detailsRef.current.open = true;
  }, []);

  return (
    <details ref={detailsRef} className="fold" open>
      <summary>
        Warm-up
        <small>{warmup.exercises.length} moves</small>
      </summary>
      <p className="purpose">{warmup.purpose}</p>
      <div className="stack tight">
        {warmup.exercises.map((exercise, index) => (
          <ExerciseCard
            key={exercise.name}
            exercise={exercise}
            index={index + 1}
            dose={exercise.reps}
            eager
          />
        ))}
      </div>
    </details>
  );
}
