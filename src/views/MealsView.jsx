import Media from "../components/Media.jsx";

export default function MealsView({ plan, nutrition }) {
  return (
    <div className="stack">
      <header className="day-title">
        <p className="eyebrow">Eat in a surplus</p>
        <h2>{plan.title}</h2>
        <p>{plan.description}</p>
      </header>

      <section className="stats">
        <div>
          <span>Calories</span>
          <strong>{plan.nutritionSummary.calories}</strong>
        </div>
        <div>
          <span>Protein</span>
          <strong>{plan.nutritionSummary.protein}</strong>
        </div>
        <div>
          <span>Carbs</span>
          <strong>{plan.nutritionSummary.carbs}</strong>
        </div>
        <div>
          <span>Fats</span>
          <strong>{plan.nutritionSummary.fats}</strong>
        </div>
      </section>

      {plan.meals.map((meal) => (
        <article key={meal.name} className="card">
          <Media src={meal.gif} alt={meal.title} />
          <p className="eyebrow">
            {meal.time} {meal.name}
          </p>
          <h3>{meal.title}</h3>
          <p className="dose">{meal.calories}</p>
          <ul className="ingredients">
            {meal.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {meal.notes && <p className="notes">{meal.notes}</p>}
        </article>
      ))}

      <section>
        <h3>Recovery</h3>
        <div className="principles">
          <article>
            <h4>Surplus</h4>
            <p>{nutrition.surplus}</p>
          </article>
          <article>
            <h4>Protein</h4>
            <p>{nutrition.protein}</p>
          </article>
          <article>
            <h4>Carbs and fats</h4>
            <p>{nutrition.carbsFats}</p>
          </article>
          <article>
            <h4>Water and sleep</h4>
            <p>
              {nutrition.hydration}. Sleep {nutrition.sleep}. {nutrition.recovery}
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
