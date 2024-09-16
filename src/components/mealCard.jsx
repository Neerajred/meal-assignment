function MealCard({ itemDetails }) {
  const { strMeal, strMealThumb, idMeal, strSource } = itemDetails;
  return (
    <div className="card">
      <img src={strMealThumb} className="" height={100} width={100} />
      <a href={strSource} target="_blank" className="card-name">
        {strMeal}
      </a>
    </div>
  );
}

export default MealCard;
