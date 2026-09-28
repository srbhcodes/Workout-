export const DAYS = [
  { id: 1, short: "Gluteus Maximus", weekday: "Mon" },
  { id: 2, short: "Deltoideus", weekday: "Tue" },
  { id: 3, short: "Quadriceps", weekday: "Wed" },
  { id: 4, short: "Rest", weekday: "Thu" },
  { id: 5, short: "Gluteus Medius", weekday: "Fri" },
  { id: 6, short: "Pectoralis Major", weekday: "Sat" },
  { id: 7, short: "Rest", weekday: "Sun" },
];

export function todayDayId() {
  const map = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 0: 7 };
  return map[new Date().getDay()];
}
