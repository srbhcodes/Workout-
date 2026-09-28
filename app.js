// Main app logic for the workout tracker

const app = document.getElementById("app");
const navLinks = document.querySelectorAll(".nav-link");

function renderHome() {
  app.innerHTML = `
    <div class="card">
      <h2>Welcome!</h2>
      <p>This app helps you track your <b>Max Sculpted Dumbbell Full Body</b> program. Select a day above to view your workout, see GIFs for each exercise, and log your progress. Your logs are saved in your browser.</p>
      <ul>
        <li><b>8-day split</b> (5 lower body + 3 upper body days)</li>
        <li>Lower body: glute-focused, quad support, side glute, and pump days</li>
        <li>Upper body: shoulders & back, chest & arms, full upper + core</li>
        <li>Each day: warm-up, main lifts, accessories, finishers</li>
        <li>Log sets, reps, weight, and RIR for each exercise</li>
        <li>Review your previous logs for each exercise</li>
      </ul>
      <p><strong>Training Principles:</strong></p>
      <ul>
        <li>Goal: heavy curvy. Bigger glutes and thicker thighs, not a slim look.</li>
        <li>Sets: 3-4 hard sets. Do not add junk sets.</li>
        <li>Reps: 8-15 one-leg, 12-25 bridges and pumps. Last reps must be hard.</li>
        <li>No heavier dumbbells: use one leg, a loaded backpack, a 4-second lower, and a 2-second squeeze.</li>
        <li>Eat in a surplus. Muscle is built by eating enough.</li>
      </ul>
    </div>
  `;
}

function renderDay(day) {
  const workout = WORKOUT_DAYS.find((w) => w.day === day);
  if (!workout) return;

  let html = `
    <div class="workout-header">
      <h2>Day ${workout.day}: ${workout.title}</h2>
    </div>
  `;

  // Warm-Up Section
  if (workout.warmup) {
    html += `
      <div class="section">
        <h3>🔥 ${workout.warmup.title}</h3>
        <p class="purpose"><strong>Purpose:</strong> ${workout.warmup.purpose}</p>
        <div class="exercises">
    `;

    workout.warmup.exercises.forEach((exercise, index) => {
      html += `
        <div class="exercise-card warmup">
          <div class="exercise-header">
            <h4>${index + 1}. ${exercise.name}</h4>
            <span class="reps">${exercise.reps}</span>
          </div>
          <div class="exercise-content">
            <div class="gif-container">
              <img src="${exercise.gif}" alt="${
        exercise.name
      }" onerror="this.style.display='none'">
            </div>
            <div class="exercise-details">
              <p class="notes"><strong>Notes:</strong> ${exercise.notes}</p>
            </div>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  }

  // Main Exercises Section
  html += `
    <div class="section">
      <h3>💪 Main Exercises</h3>
      <div class="exercises">
  `;

  workout.exercises.forEach((exercise, index) => {
    html += `
      <div class="exercise-card">
        <div class="exercise-header">
          <h4>${index + 1}. ${exercise.name}</h4>
          <span class="sets-reps">${exercise.sets} sets × ${
      exercise.reps
    } reps</span>
        </div>
        <div class="exercise-content">
          <div class="gif-container">
            <img src="${exercise.gif}" alt="${
      exercise.name
    }" style="display:block;max-width:160px;max-height:120px;margin:auto;" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
            <div class="gif-placeholder" style="display:none;justify-content:center;align-items:center;width:160px;height:120px;background:#f0f0f0;color:#aaa;font-size:0.95rem;border-radius:8px;margin:auto;">No GIF available</div>
          </div>
          <div class="exercise-details">
            <p class="notes"><strong>Notes:</strong> ${exercise.notes}</p>
          </div>
        </div>
      </div>
    `;
  });

  html += `
      </div>
    </div>
  `;

  // Finisher Section
  if (workout.finisher) {
    html += `
      <div class="section">
        <h3>🔥 ${workout.finisher.name}</h3>
        <div class="finisher-exercises">
          ${workout.finisher.exercises
            .map(
              (exercise) => `
                <div class="finisher-exercise">
                  <span>${
                    exercise.gif
                      ? `<img src='${exercise.gif}' alt='${exercise.name}' style='max-width:180px;vertical-align:middle;margin-right:10px;border-radius:8px;'>`
                      : ""
                  }${exercise.name}</span>
                  ${
                    exercise.notes
                      ? `<p class="notes" style="margin-top:0.6rem;">${exercise.notes}</p>`
                      : ""
                  }
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  app.innerHTML = html;
}

function renderMeals() {
  let html = `
    <div class="workout-header">
      <h2>🍽️ ${MEAL_PLAN.title}</h2>
      <p>${MEAL_PLAN.description}</p>
    </div>
    
    <div class="nutrition-summary">
      <h3>📊 Daily Nutrition Summary</h3>
      <div class="nutrition-grid">
        <div class="nutrition-item">
          <span class="nutrition-label">Total Calories:</span>
          <span class="nutrition-value">${MEAL_PLAN.nutritionSummary.calories}</span>
        </div>
        <div class="nutrition-item">
          <span class="nutrition-label">Protein:</span>
          <span class="nutrition-value">${MEAL_PLAN.nutritionSummary.protein}</span>
        </div>
        <div class="nutrition-item">
          <span class="nutrition-label">Carbs:</span>
          <span class="nutrition-value">${MEAL_PLAN.nutritionSummary.carbs}</span>
        </div>
        <div class="nutrition-item">
          <span class="nutrition-label">Fats:</span>
          <span class="nutrition-value">${MEAL_PLAN.nutritionSummary.fats}</span>
        </div>
      </div>
    </div>
  `;

  MEAL_PLAN.meals.forEach((meal, index) => {
    html += `
      <div class="section meal-section">
        <h3>${meal.time} ${meal.name}</h3>
        <div class="meal-header">
          <h4>${meal.title}</h4>
          <span class="meal-calories">${meal.calories}</span>
        </div>
        <div class="meal-content">
          <div class="meal-image">
            <img src="${meal.gif}" alt="${
      meal.title
    }" style="display:block;max-width:200px;max-height:150px;margin:auto;border-radius:8px;" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
            <div class="meal-placeholder" style="display:none;justify-content:center;align-items:center;width:200px;height:150px;background:#f0f0f0;color:#aaa;font-size:0.95rem;border-radius:8px;margin:auto;">No image available</div>
          </div>
          <div class="meal-details">
            <div class="ingredients-section">
              <h5>📝 Ingredients:</h5>
              <ul class="ingredients-list">
                ${meal.ingredients
                  .map((ingredient) => `<li>${ingredient}</li>`)
                  .join("")}
              </ul>
            </div>
            <div class="meal-notes">
              <p><strong>Notes:</strong> ${meal.notes}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  app.innerHTML = html;
}

function logSet(event, day, exerciseName) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);

  const log = {
    set: parseInt(formData.get("set")),
    reps: parseInt(formData.get("reps")),
    weight: parseFloat(formData.get("weight")) || 0,
    rir: parseInt(formData.get("rir")) || 0,
    date: new Date().toISOString(),
  };

  const logs = getLogs(day, exerciseName);
  logs.push(log);
  localStorage.setItem(`logs_${day}_${exerciseName}`, JSON.stringify(logs));

  form.reset();
  renderDay(day);
}

function getLogs(day, exerciseName) {
  const logs = localStorage.getItem(`logs_${day}_${exerciseName}`);
  return logs ? JSON.parse(logs) : [];
}

// Navigation
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Update active nav
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    // Render content
    const day = link.dataset.day;
    if (day === "home") {
      renderHome();
    } else if (day === "meals") {
      renderMeals();
    } else {
      renderDay(parseInt(day));
    }
  });
});

// Initialize
renderHome();
