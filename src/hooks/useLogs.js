import { useEffect, useState } from "react";

function storageKey(day, exerciseName) {
  return `logs_${day}_${exerciseName}`;
}

function readLogs(key) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function useLogs(day, exerciseName) {
  const key = storageKey(day, exerciseName);
  const [logs, setLogs] = useState(() => readLogs(key));

  useEffect(() => {
    setLogs(readLogs(key));
  }, [key]);

  function add(entry) {
    setLogs((current) => {
      const next = [
        ...current,
        {
          set: Number(entry.set),
          reps: Number(entry.reps),
          weight: Number(entry.weight) || 0,
          rir: Number(entry.rir) || 0,
          date: new Date().toISOString(),
        },
      ];
      localStorage.setItem(key, JSON.stringify(next));
      return next;
    });
  }

  function remove(index) {
    setLogs((current) => {
      const next = current.filter((_, i) => i !== index);
      localStorage.setItem(key, JSON.stringify(next));
      return next;
    });
  }

  return { logs, add, remove };
}
