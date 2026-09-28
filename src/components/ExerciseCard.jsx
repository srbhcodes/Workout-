import Media from "./Media.jsx";
import SetLog from "./SetLog.jsx";

export default function ExerciseCard({ exercise, index, dose, day, logged = false, eager = false }) {
  const media = exercise.gif ? <Media src={exercise.gif} alt={exercise.name} eager={eager} /> : null;

  return (
    <article className={logged ? "card" : "card quiet"}>
      {logged && media}
      <div className="card-top">
        {index != null && <span className="index">{index}</span>}
        <div>
          <h3>{exercise.name}</h3>
          {dose && <p className="dose">{dose}</p>}
        </div>
      </div>
      {!logged && media}
      {exercise.notes && <p className="notes">{exercise.notes}</p>}
      {logged && <SetLog day={day} exerciseName={exercise.name} />}
    </article>
  );
}
