import { DAYS } from "../days.js";
import ExerciseCard from "../components/ExerciseCard.jsx";
import Warmup from "../components/Warmup.jsx";

export default function DayView({ workout, onOpenDay }) {
  return (
    <div className="stack">
      <div className="day-switch" role="tablist" aria-label="Workout days">
        {DAYS.map((meta) => (
          <button
            key={meta.id}
            type="button"
            role="tab"
            aria-selected={meta.id === workout.day}
            className={meta.id === workout.day ? "chip on" : "chip"}
            onClick={() => onOpenDay(meta.id)}
          >
            {meta.weekday !== meta.short && <small>{meta.weekday}</small>}
            {meta.short}
          </button>
        ))}
      </div>

      <header className="day-title">
        <p className="eyebrow">Day {workout.day}</p>
        <h2>{workout.title}</h2>
        {workout.notes && <p>{workout.notes}</p>}
      </header>

      {workout.warmup && <Warmup warmup={workout.warmup} />}

      {[
        ...(workout.exercises?.length ? [{ title: "Main work", exercises: workout.exercises }] : []),
        ...(workout.sections || []),
      ].map((section) => (
        <section className="stack tight" key={section.title}>
          <h3>{section.title}</h3>
          {section.exercises.map((exercise, index) => (
            <ExerciseCard
              key={`${workout.day}-${section.title}-${exercise.name}`}
              exercise={exercise}
              index={index + 1}
              dose={
                exercise.sets
                  ? `${exercise.sets} ${exercise.sets === 1 ? "set" : "sets"} · ${exercise.reps}`
                  : exercise.reps
              }
              day={workout.day}
              logged
            />
          ))}
          {section.finisher && (
            <>
              <h3>{section.finisher.name}</h3>
              {section.finisher.exercises.map((exercise) => (
                <ExerciseCard
                  key={`${workout.day}-${section.title}-${exercise.name}`}
                  exercise={exercise}
                />
              ))}
            </>
          )}
        </section>
      ))}

      {(workout.finishers || (workout.finisher ? [workout.finisher] : [])).map((finisher) => (
        <section className="stack tight" key={finisher.name}>
          <h3>{finisher.name}</h3>
          {finisher.exercises.map((exercise) => (
            <ExerciseCard key={`${workout.day}-${finisher.name}-${exercise.name}`} exercise={exercise} />
          ))}
        </section>
      ))}
    </div>
  );
}
