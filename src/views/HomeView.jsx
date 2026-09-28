import { DAYS, todayDayId } from "../days.js";

const PRINCIPLE_LABELS = [
  ["sets", "Sets"],
  ["reps", "Reps"],
  ["effort", "Effort"],
  ["tempo", "Tempo"],
  ["progressiveOverload", "When it feels easy"],
  ["frequency", "The week"],
  ["rest", "Rest"],
];

export default function HomeView({ principles, days, onOpenDay }) {
  const today = todayDayId();
  const todayMeta = DAYS.find((day) => day.id === today);
  const todayWorkout = days.find((day) => day.day === today);

  return (
    <div className="stack">
      <section className="hero">
        <p className="eyebrow">Dumbbell full body</p>
        <h2>Body Training</h2>
        <p>
          Three lower days, two upper days, and two rest days. Every exercise stays. Logs stay on this phone.
        </p>
        <button type="button" className="primary" onClick={() => onOpenDay(today)}>
          Today · {todayMeta.weekday}
          <span>{todayWorkout.title}</span>
        </button>
      </section>

      <section>
        <h3>This week</h3>
        <div className="week">
          {DAYS.map((meta) => {
            const workout = days.find((day) => day.day === meta.id);
            return (
              <button
                key={meta.id}
                type="button"
                className={meta.id === today ? "week-row today" : "week-row"}
                onClick={() => onOpenDay(meta.id)}
              >
                {meta.weekday === workout.title ? (
                  <strong className="week-title">{workout.title}</strong>
                ) : (
                  <>
                    <span className="weekday">{meta.weekday}</span>
                    <span>
                      <strong>{workout.title}</strong>
                    </span>
                  </>
                )}
              </button>
            );
          })}
        </div>
      </section>

      <section>
        <h3>How to make light weights hard</h3>
        <div className="principles">
          {PRINCIPLE_LABELS.map(([key, label]) => (
            <article key={key}>
              <h4>{label}</h4>
              <p>{principles[key]}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
