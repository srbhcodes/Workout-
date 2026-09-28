import { useState } from "react";
import { useLogs } from "../hooks/useLogs.js";

function formatWhen(iso) {
  return new Date(iso).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  });
}

export default function SetLog({ day, exerciseName }) {
  const { logs, add, remove } = useLogs(day, exerciseName);
  const [open, setOpen] = useState(false);
  const [setNumber, setSetNumber] = useState(logs.length + 1);
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [rir, setRir] = useState("1");

  function onSubmit(event) {
    event.preventDefault();
    if (!reps) return;
    add({ set: setNumber, reps, weight, rir });
    setSetNumber((current) => Number(current) + 1);
    setReps("");
  }

  return (
    <div className="log">
      <button type="button" className="text-button" onClick={() => setOpen((value) => !value)}>
        {open ? "Hide log" : "Log a set"}
        {logs.length > 0 ? ` · ${logs.length}` : ""}
      </button>

      {open && (
        <form className="log-form" onSubmit={onSubmit}>
          <label>
            Set
            <input
              inputMode="numeric"
              value={setNumber}
              onChange={(event) => setSetNumber(event.target.value)}
              required
            />
          </label>
          <label>
            Reps
            <input
              inputMode="numeric"
              value={reps}
              onChange={(event) => setReps(event.target.value)}
              required
            />
          </label>
          <label>
            Kg
            <input
              inputMode="decimal"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
              placeholder="0"
            />
          </label>
          <label>
            RIR
            <input
              inputMode="numeric"
              value={rir}
              onChange={(event) => setRir(event.target.value)}
            />
          </label>
          <button type="submit" className="save">
            Save
          </button>
        </form>
      )}

      {logs.length > 0 && (
        <ul className="log-list">
          {logs
            .map((entry, index) => ({ entry, index }))
            .reverse()
            .map(({ entry, index }) => (
              <li key={`${entry.date}-${index}`}>
                <span>
                  Set {entry.set} · {entry.reps} reps
                  {entry.weight ? ` · ${entry.weight} kg` : ""} · RIR {entry.rir}
                  <small>{formatWhen(entry.date)}</small>
                </span>
                <button type="button" onClick={() => remove(index)} aria-label="Delete log">
                  Delete
                </button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
