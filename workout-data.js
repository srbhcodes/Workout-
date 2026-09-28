// Workout data for Refined Max Sculpted Dumbbell-Only Lower Body Training Program (Glute & Hip Dominance)
// Replace GIF/WebP URLs with your own if desired

// Training Principles
const TRAINING_PRINCIPLES = {
  sets: "2-3 sets on the glute work. 3-4 sets on Wednesday and the shoulder and chest exercises",
  reps: "Lower where the list is long: about 8-12 on one-leg work, 10-15 on bridges, 15-20 on frog pumps",
  effort: "Stop with 1-3 reps left on most sets. Thursday and Sunday off are what let the next session be hard",
  tempo:
    "4 seconds down, 2 second squeeze. This is how a light dumbbell becomes heavy",
  progressiveOverload:
    "You do not need heavier dumbbells. When the top rep is easy, in this order: load a backpack with books or water bottles, switch the lift to one leg, add a 2 second pause, then add a half-rep at the hardest point",
  frequency: "Monday is the hip thrusts. Tuesday is shoulders, then the bridges and good mornings. Wednesday is thighs. Friday is hip width plus the glute pump. Saturday is chest, then abs. Thursday and Sunday are off. Eat in a surplus or the muscle has nothing to grow from",
  rest: "2 minutes on thrusts, squats, and one-leg work. 60-90s on band work",
};

// Universal Warm-Up Routine (Before Every Lower Body Workout)
const UNIVERSAL_WARMUP = {
  title: "Warm-Up Routine (Before Every Lower Body Workout)",
  purpose: "Activate glutes, address pelvic tilt and TFL",
  exercises: [
    {
      name: "Standing Posterior Tilts",
      reps: "12 reps (15s tuck, 3x/week)",
      notes: "Focus on posterior pelvic tilt, squeeze glutes",
      gif: "Standing Posterior Tilts.gif",
    },
    {
      name: "Banded Glute Bridges with Pelvic Tilt",
      reps: "2 sets of 15 reps (flatten back)",
      notes: "Keep back flat, squeeze glutes at top",
      gif: "Banded Glute Bridges with Pelvic Tilt.gif",
    },
    {
      name: "Dynamic Lunges",
      reps: "2 sets of 12 reps per leg",
      notes: "Controlled movement, keep chest up",
      gif: "Dynamic Lunges.gif",
    },
    {
      name: "Banded Lateral Walks",
      reps: "2 sets of 12 steps per side",
      notes: "Keep tension on band, small controlled steps",
      gif: "Banded Lateral Walks.gif",
    },
    {
      name: "Foam Roll TFL/IT Band",
      reps: "1-2 min (release tension, 3x/week)",
      notes: "Release tension, focus on TFL area",
      gif: "Foam Roll TFL.gif",
    },
    {
      name: "Seated Band Abductions",
      reps: "25 reps (knees out, 3x/week)",
      notes: "Sit tall, push knees out against band",
      gif: "Seated Band Abductions.gif",
    },
  ],
};

const WORKOUT_DAYS = [
  {
    day: 1,
    title: "Gluteus Maximus",
    notes:
      "Hip thrusts, the single-leg deadlift, the deficit bridge, and kickbacks. The elevated bridges and good mornings are on Tuesday, after the shoulders.",
    warmup: UNIVERSAL_WARMUP,
    exercises: [
      {
        name: "Single-Leg Hip Thrust (One Dumbbell + Backpack, Feet High)",
        sets: 3,
        reps: "8-10 per leg",
        notes:
          "Main glute builder. Shoulders on the firm corner of the bed, one foot on the floor, the other leg straight. One dumbbell on the working glute. 4 seconds down, 2 second squeeze. When 10 is easy, add books to the backpack, then add a half-rep at the top",
        gif: "Single-Leg Hip Thrust.gif",
      },
      {
        name: "Two-Dumbbell Hip Thrust (Feet High, Backpack on Hips)",
        sets: 2,
        reps: "10-12",
        notes:
          "Both feet stay on the floor. Shoulders on the firm corner of the bed. Both dumbbells plus a stuffed backpack rest on the hips. 2 second pause at the top. If it is still easy, take 4 seconds to lower",
        gif: "Dumbbell Hip Thrusts.gif",
      },
      {
        name: "Single-Leg Romanian Deadlift (One Dumbbell)",
        sets: 2,
        reps: "8-10 per leg",
        notes:
          "One leg makes a light dumbbell load the lower glute and hamstring. 4 seconds down. Stop if the low back rounds",
        gif: "Dumbbell Romanian Deadlifts.gif",
      },
      {
        name: "Deficit Glute Bridge (Block, Both Dumbbells + Backpack)",
        sets: 2,
        reps: "10-12",
        notes:
          "Feet up on a thick book. Deep stretch at the bottom grows the muscle even with light weight. 2 second pause in the hole",
        gif: "Deficit Glute Bridges.gif",
      },
      {
        name: "Banded Standing Kickbacks (45° Diagonal)",
        sets: 2,
        reps: "10-12 per leg",
        notes:
          "Drive the leg up and out on a diagonal. Pause 2 seconds. This rounds the upper glute and adds width beside the hip",
        gif: "Banded Standing Kickbacks.gif",
      },
    ],
    finisher: {
      name: "Finisher (2 Rounds)",
      exercises: [
        {
          name: "Standing Band Abductions – 8 reps/leg",
          gif: "Standing Band Abductions.gif",
        },
        {
          name: "Bodyweight Glute Bridge Hold – 20s",
          gif: "Glute Bridge Hold.gif",
        },
        {
          name: "Prone Bent-Leg Lift, slightly out – 8 reps/leg",
          gif: "Prone Bent-Leg Lift.jpg",
        },
      ],
    },
  },
  {
    day: 3,
    title: "Quadriceps",
    warmup: UNIVERSAL_WARMUP,
    exercises: [
      {
        name: "Bulgarian Split Squat (Lean Forward, One Dumbbell + Backpack)",
        sets: 4,
        reps: "8-12 per leg",
        notes: "Back foot on a sturdy chair. One leg takes all of the dumbbell. Lean the chest slightly forward, 3 seconds down. When 12 is easy, pause 2 seconds at the bottom",
        gif: "Bulgarian Split Squats.gif",
      },
      {
        name: "Angled Step-Ups (One Dumbbell, Heel Drive, High Step)",
        sets: 3,
        reps: "8-12 per leg",
        notes: "Step onto a sturdy chair so the glute does the work. Do not push off the back foot. Hold the dumbbell on the working side",
        gif: "Dumbbell Step-Ups.gif",
      },
      {
        name: "Sumo Squat (Both Dumbbells + Backpack, 3s Pause in the Hole)",
        sets: 4,
        reps: "10-15",
        notes: "Wide stance for glute and inner thigh. If the dumbbells feel light, pause 3 seconds at the bottom and take 4 seconds to stand up",
        gif: "Dumbbell Sumo Squats.gif",
      },
      {
        name: "Walking Lunges (One Dumbbell, Long Step)",
        sets: 3,
        reps: "12-16 steps per leg",
        notes: "Long step, deep knee. This is what makes the thighs look heavy instead of slim. Slow the step down when it gets easy",
        gif: "Walking Lunges.gif",
      },
      {
        name: "Long-Band Standing Abductions",
        sets: 3,
        reps: "10-12 per leg",
        notes: "Step out against a long band. This is the hip-width set on the thigh day. Pause when the leg is farthest out",
        gif: "Standing Band Abductions.gif",
      },
      {
        name: "Deficit Glute Bridges (Block, Both Dumbbells)",
        sets: 3,
        reps: "10-12",
        notes: "After the lunges. Feet up on a thick book. Both dumbbells plus the backpack. 4 seconds down if it feels light",
        gif: "Deficit Glute Bridges.gif",
      },
    ],
    finisher: {
      name: "Burnout Finisher (3 Rounds)",
      exercises: [
        {
          name: "Goblet Squat Hold (One Dumbbell) – 45s",
          gif: "Goblet Squat Hold.gif",
        },
        {
          name: "Calf Raises (One Dumbbell) – 25 reps",
          gif: "Dumbbell Calf Raises (Both Dumbbells).gif",
        },
      ],
    },
  },
  {
    day: 5,
    title: "Gluteus Medius",
    notes:
      "This day holds the old Wednesday and the old Friday. Width work comes first, then the glute pump. Reps are lower so both still fit. Thursday and Sunday are the days off.",
    warmup: {
      title: "Activation",
      purpose: "Activate side glutes and medius",
      exercises: [
        {
          name: "Standing Posterior Tilts",
          reps: "12 reps",
          notes: "Focus on posterior pelvic tilt",
          gif: "Standing Posterior Tilts.gif",
        },
        {
          name: "Weighted Side Steps (One Dumbbell)",
          reps: "2 sets of 10 steps per side",
          notes: "Lateral movement with weight",
          gif: "Weighted Side Steps.gif",
        },
      ],
    },
    exercises: [
      {
        name: "Elevated Side-Lying Leg Lifts (One Dumbbell, Bed Corner)",
        sets: 3,
        reps: "8-10 per leg",
        notes:
          "Main width move. Lie on your side with the bottom hip on the firm corner of the bed. Dumbbell on the top thigh. Lift the leg up and slightly back. Hold 2 seconds. This is the muscle that makes the hip wider",
        gif: "Elevated Side-Lying Leg Lifts.gif",
      },
      {
        name: "Curtsy Lunges w/ Lateral Raise (One Dumbbell)",
        sets: 2,
        reps: "8-10 per leg",
        notes: "Cross the back leg and sit into the outer hip. 3 seconds down. When 12 is easy, pause 2 seconds at the bottom",
        gif: "Curtsy Lunges.gif",
      },
      {
        name: "Lateral Lunges (Racked, One Dumbbell)",
        sets: 2,
        reps: "6-8 per leg",
        notes: "Sit into the hip. 3 seconds down. A light dumbbell is hard here if you go deep and pause",
        gif: "Dumbbell Lateral Lunges.gif",
      },
      {
        name: "Fire Hydrant with Rotation (One Dumbbell)",
        sets: 2,
        reps: "10-12 per leg",
        notes: "Upper-side glute. Hold a dumbbell on the thigh if the band is too easy",
        gif: "Fire Hydrant with Rotation.gif",
      },
      {
        name: "Deficit Glute Bridges (Both Dumbbells + Backpack)",
        sets: 2,
        reps: "10-12",
        notes: "Feet up on a thick book. Keeps the glutes full, and the hips wide. 4 seconds down if the weight feels light",
        gif: "Deficit Glute Bridges.gif",
      },
      {
        name: "Banded Clamshells (Heavy Band, 2s Hold)",
        sets: 2,
        reps: "12-15 per leg",
        notes: "Fills the side of the hip. Use the thickest band. Hold 2 seconds open",
        gif: "Banded Clamshells.gif",
      },
      {
        name: "Dumbbell Glute Bridges (backpack or both dumbbells)",
        sets: 3,
        reps: "12-15",
        notes: "Both dumbbells or a stuffed backpack on the hips. Hips go from the floor to a full bridge. Last reps must be hard. If they are not, take 4 seconds to lower",
        gif: "Dumbbell-Glute-Bridge.gif",
      },
      {
        name: "Banded Clamshells",
        sets: 2,
        reps: "12-15 per side",
        notes: "Heavy band. Outer hip volume so the hips stay wide",
        gif: "Bodyweight Clamshells.gif",
      },
      {
        name: "Weighted Fire Hydrants",
        sets: 2,
        reps: "12-15 per side",
        notes: "Dumbbell on the thigh. Lift the knee out to the side, not only up. Pause. This is width work",
        gif: "Bodyweight Fire Hydrants.gif",
      },
      {
        name: "Weighted Donkey Kicks",
        sets: 2,
        reps: "12-15 per side",
        notes: "Band or ankle weight. Squeeze the glute, do not swing the leg",
        gif: "Bodyweight Donkey Kicks.gif",
      },
      {
        name: "Dumbbell Frog Pumps",
        sets: 3,
        reps: "15-20",
        notes: "Knees stay wide. Squeeze hard at the top and hold 1 second. This is the round, firm pump. If 20 is easy, slow the lower to 3 seconds",
        gif: "Bodyweight Frog Pumps.gif",
      },
    ],
    finisher: {
      name: "Finisher (2 Rounds)",
      exercises: [
        {
          name: "Fire Hydrant Circles (One Dumbbell) – 8 reps/leg",
          gif: "Fire Hydrant Circles.gif",
        },
        { name: "Pulse Squats (One Dumbbell) – 30s", gif: "Pulse Squats.gif" },
        { name: "Glute Bridge Hold – 30s", gif: "Glute Bridge Hold.gif" },
        {
          name: "Glute Bridge Pulses – 20 reps",
          notes:
            "Lift into a full bridge first and stay there. Each rep is a small thrust while the hips are already in the air. Drop the hips only a few inches, then drive back up. Do not let the hips touch the floor.",
          gif: "Glute Bridge Pulses.gif",
        },
        { name: "Glute Bridge March – 30s", gif: "Glute Bridge March.gif" },
        { name: "Rest 30s between rounds", gif: "" },
      ],
    },
  },
  {
    day: 4,
    title: "Rest",
    notes:
      "Off. A short walk is enough. No lifting. This break is what lets Friday's long session be hard.",
    exercises: [],
  },
  {
    day: 2,
    title: "Deltoideus",
    warmup: {
      title: "Upper Body Warm-Up",
      purpose: "Activate shoulders and back muscles",
      exercises: [
        {
          name: "Arm Circles",
          reps: "10 forward, 10 backward",
          notes: "Gradually increase circle size",
          gif: "Arm Circles.gif",
        },
        {
          name: "Shoulder Blade Squeezes",
          reps: "10",
          notes:
            "Arms stay down by your sides. Pinch the shoulder blades together, then let them slide forward. This is not an arm circle",
          gif: "Shoulder Blade Squeezes.gif",
        },
        {
          name: "Cat-Cow Stretches",
          reps: "10 reps",
          notes: "Gentle spine mobility",
          gif: "Cat-Cow Stretches.gif",
        },
      ],
    },
    notes:
      "Shoulders first. Gluteus Maximus after that: the elevated bridges, good mornings, and floor bridges that used to sit on Monday.",
    sections: [
      {
        title: "Main work",
        exercises: [
          {
            name: "Wall Angels",
            sets: 3,
            reps: "10 slow",
            notes: "Keep back flat against wall, slow controlled movement",
            gif: "Wall Angels.gif",
          },
          {
            name: "Superman Holds",
            sets: 3,
            reps: "20s hold",
            notes: "Lift chest and legs, hold position",
            gif: "Superman Holds.gif",
          },
          {
            name: "Arnold Press",
            sets: 2,
            reps: "8-10",
            notes:
              "Sit on a chair, or stand. Palms start facing you. Turn the palms forward as you press up, then turn them back toward you as you lower. Light dumbbells",
            gif: "Arnold Press.gif",
          },
          {
            name: "Band Pull-Aparts",
            sets: 3,
            reps: "12-15",
            notes:
              "Stand. Hold a band with straight arms and pull it apart until your hands line up with your shoulders",
            gif: "Band Pull-Aparts.gif",
          },
          {
            name: "Dumbbell Front Raises",
            sets: 2,
            reps: "12",
            notes:
              "Light dumbbells. Lift the arms to shoulder height and lower slowly. Shrugs were taken out because they thicken the neck",
            gif: "Dumbbell Front Raises.gif",
          },
          {
            name: "Lateral Raises",
            sets: 2,
            reps: "12",
            notes: "Keep slight bend in elbows, control movement",
            gif: "Lateral Raises.gif",
          },
        ],
        finisher: {
          name: "Shoulder & Back Finisher (2 Rounds)",
          exercises: [
            { name: "Wall Angels – 8 reps", gif: "Wall Angels.gif" },
            { name: "Superman Hold – 15s", gif: "Superman Holds.gif" },
            { name: "Rest 30s between rounds", gif: "" },
          ],
        },
      },
      {
        title: "Gluteus Maximus",
        exercises: [
          {
            name: "Single-Leg Elevated Glute Bridge (One Dumbbell + Backpack)",
            sets: 3,
            reps: "8-12 per leg",
            notes:
              "Shoulders on the firm corner of the bed, one dumbbell on one hip. 2 second squeeze. When 12 is easy, add a half-rep at the top",
            gif: "Elevated Glute Bridges.gif",
          },
          {
            name: "Dumbbell Good Morning (Backpack stuffed with books)",
            sets: 2,
            reps: "8-10",
            notes: "Hinge from the hips. Fill the backpack until the last rep is hard. This is not a lower-back exercise",
            gif: "Dumbbell Good Mornings.gif",
          },
          {
            name: "Single-Leg Glute Bridge on the Floor (One Dumbbell + Backpack)",
            sets: 2,
            reps: "8-10 per leg",
            notes: "Done on the floor, so the hips start lower than the bed-corner bridge and the glute stretches more",
            gif: "Single-Leg Glute Bridges.gif",
          },
          {
            name: "Banded Prone Bent-Leg Lifts (Ankle)",
            sets: 2,
            reps: "10-12 per leg",
            notes:
              "Lift the bent leg up and a little out to the side. Pause 2 seconds. This rounds the top of the glute and widens the hip",
            gif: "Banded Prone Bent-Leg Lift.jpg",
          },
        ],
        finisher: {
          name: "Glute Finisher (2 Rounds)",
          exercises: [
            {
              name: "Elevated Glute Bridge Hold – 20s",
              gif: "Elevated Glute Bridge Hold.gif",
            },
            {
              name: "Bodyweight Hip Thrusts – 10 reps",
              gif: "Bodyweight Hip Thrusts.webp",
            },
          ],
        },
      },
    ],
  },
  {
    day: 6,
    title: "Pectoralis Major",
    warmup: {
      title: "Chest & Arms Warm-Up",
      purpose: "Prepare chest and arm muscles",
      exercises: [
        {
          name: "Push-up Position Hold",
          reps: "30s hold",
          notes: "Hold plank position, engage core",
          gif: "Push-up Position Hold.gif",
        },
        {
          name: "Arm Swings",
          reps: "10 forward, 10 backward",
          notes: "Gentle arm swings to warm up shoulders",
          gif: "Arm Swings.gif",
        },
        {
          name: "Chest Stretch",
          reps: "30s hold",
          notes: "Doorway stretch, feel chest opening",
          gif: "Chest Stretch.gif",
        },
      ],
    },
    exercises: [
      {
        name: "Chair Dips (Legs Bent)",
        sets: 2,
        reps: "10",
        notes: "Hands on a sturdy chair. Keep elbows close to the body and bend the legs",
        gif: "Bench Dips.gif",
      },
      {
        name: "Bent-Over Dumbbell Rows (Standing)",
        sets: 3,
        reps: "10",
        notes:
          "Stand and hinge at the hips with a flat back. Both dumbbells. Pull toward the ribs",
        gif: "Bent-Over Dumbbell Row.gif",
      },
      {
        name: "Standing Squeeze Press",
        sets: 3,
        reps: "10-12",
        notes:
          "Stand. Press the two dumbbells together at the chest and push them straight out, then bring them back in",
        gif: "Standing Squeeze Press.gif",
      },
      {
        name: "Incline Push-Ups (Hands on a Chair)",
        sets: 3,
        reps: "10",
        notes:
          "Hands on a sturdy chair, feet on the floor. Lower the chest toward the chair",
        gif: "Incline Push-Ups.gif",
      },
      {
        name: "Standing Upward Flys",
        sets: 3,
        reps: "12",
        notes:
          "Stand. Start with the dumbbells by the hips and raise them up and together in front of the chest. Keep a soft bend in the elbows",
        gif: "Standing Upward Flys.gif",
      },
      {
        name: "Hammer Curls",
        sets: 3,
        reps: "12",
        notes: "Keep elbows at sides, control movement",
        gif: "Hammer Curls.gif",
      },
      {
        name: "Overhead Triceps Extensions",
        sets: 3,
        reps: "8-10",
        notes: "Keep elbows close to head, extend fully",
        gif: "Overhead Triceps Extensions.gif",
      },
    ],
    sections: [
      { title: "Abs and Core", exercises: [
      {
        name: "Diaphragmatic Breathing",
        sets: 1,
        reps: "8 slow breaths",
        notes: "Lie on your back. Inhale into the ribs. On the exhale, the belly softens down. Do not suck the belly in hard",
        gif: "Diaphragmatic Breathing.gif",
      },
      {
        name: "Cat-Cow Stretch",
        sets: 1,
        reps: "8 reps",
        notes: "Move with the breath. Stop if the low belly cramps",
        gif: "Cat-Cow Stretches.gif",
      },
      {
        name: "Dead Bug",
        sets: 3,
        reps: "6-8",
        notes: "The hard set. Exhale as one leg reaches. The belly stays down and does not dome. Stop the set the moment it pushes out",
        gif: "Dead Bug.gif",
      },
      {
        name: "Dumbbell Dead Bug",
        sets: 2,
        reps: "6-8",
        notes: "Same rule with a light dumbbell in each hand. Slow. If the belly pops, drop the dumbbells and finish as a normal dead bug",
        gif: "Dumbbell Dead Bug.gif",
      },
      {
        name: "Bird Dog",
        sets: 2,
        reps: "8 per side",
        notes: "Reach long and keep breathing. The hips stay level. This hardens the deep core without squeezing the belly",
        gif: "Bird Dog.gif",
      },
      {
        name: "Side Plank from Knees",
        sets: 2,
        reps: "20s per side",
        notes: "Knees down. Hips up. Stop if belly pressure or pain rises. A weight in the hand is not used here",
        gif: "Side Plank.gif",
      },
      {
        name: "Hip Flexor Stretch",
        sets: 2,
        reps: "30s per side",
        notes: "A tight hip flexor tips the pelvis forward and makes the belly stick out farther. Ribs down, breathe out",
        gif: "Hip Flexor Stretch.gif",
      },
    ]},
    ],
    notes:
      "Chest and arms first, then Abs and Core. Core reps are lower because this day now holds both. A hard core makes the belly sit firmer. An endomorph stores fat at the front of the belly, and ab work does not remove that fat. The meals stay high so the glutes can get heavier, and that same food keeps the belly.",
    finishers: [
      {
        name: "Chest & Arms Finisher (2 Rounds)",
        exercises: [
          { name: "Push-ups – 8 reps", gif: "Push-ups.gif" },
          { name: "Diamond Push-ups – 5 reps", gif: "Diamond Push-ups.gif" },
          { name: "Rest 45s between rounds", gif: "" },
        ],
      },
      {
        name: "Breathing Finisher",
        exercises: [
          {
            name: "Diaphragmatic Breathing – 10 deep breaths",
            gif: "Diaphragmatic Breathing.gif",
          },
          { name: "Child's Pose – 30s hold", gif: "Childs Pose.gif" },
          { name: "Happy Baby Pose – 30s hold", gif: "Happy Baby Pose.gif" },
        ],
      },
    ],
  },
  {
    day: 7,
    title: "Rest",
    notes: "Off. A short walk is enough. No lifting. Monday's glute session starts fresh after this day.",
    exercises: [],
  },
];

// Post-Workout Pump Circuits
const POST_WORKOUT_PUMPS = {
  circuitA: {
    title: "Circuit A (After Day 1/4)",
    exercises: [
      { name: "Glute Bridge Iso Hold – 30s", gif: "Glute Bridge Hold.gif" },
      { name: "Frog Pumps – 20 reps", gif: "Frog Pumps.gif" },
      {
        name: "Dumbbell Hip Abductions – 15 reps",
        gif: "Dumbbell Hip Abductions.gif",
      },
    ],
    rounds: 2,
  },
  circuitB: {
    title: "Circuit B (After Day 3)",
    exercises: [
      {
        name: "Standing Kickbacks (Near Hip) – 15 reps/leg",
        gif: "Standing Kickbacks.gif",
      },
      {
        name: "Fire Hydrant Circles – 10 reps/leg",
        gif: "Fire Hydrant Circles.gif",
      },
      {
        name: "Single-Leg Glute Bridge – 15 reps/leg",
        gif: "Single-Leg Glute Bridges.gif",
      },
    ],
    rounds: 2,
  },
};

// Optional Cardio (LIGHT - for recovery)
const OPTIONAL_CARDIO = [
  {
    name: "Incline Walking",
    duration: "20-25 min",
    notes: "Low impact, glute activation",
  },
  {
    name: "Stair Climbing",
    duration: "15-20 min",
    notes: "Glute and quad focus",
  },
];

// Nutrition & Recovery Guidelines
const NUTRITION_GUIDELINES = {
  surplus: "400-600 kcal above maintenance. Muscle is built in a surplus. Paneer, milk, rice, oats, ghee, Amul protein",
  protein: "1.8-2.2g/kg",
  carbsFats:
    "High workout carbs (rice, roti, potato, rajma). Fats are heavy: ghee, butter, peanut butter, almonds, full-fat milk, paneer, cheese",
  hydration: "2.5-3.5L",
  sleep: "8-9h (essential for recovery)",
  recovery: "Foam rolling 3x/week, stretching 10 min post-workout",
};

// Weekly Schedule (7 DAYS - Complete Program)
const WEEKLY_SCHEDULE = {
  monday: "Glute size. Monday and the old Thursday, reps lowered",
  tuesday: "Shoulders, then the bridges and good mornings moved off Monday",
  wednesday: "Thighs and glute depth",
  thursday: "Rest",
  friday: "Hip width plus the glute pump. Reps lowered",
  saturday: "Chest and arms, then abs and core",
  sunday: "Rest",
};

// Export all data
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    TRAINING_PRINCIPLES,
    UNIVERSAL_WARMUP,
    WORKOUT_DAYS,
    POST_WORKOUT_PUMPS,
    OPTIONAL_CARDIO,
    NUTRITION_GUIDELINES,
    WEEKLY_SCHEDULE,
  };
}
