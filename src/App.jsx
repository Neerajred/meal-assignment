import { useEffect, useState } from "react";
import "./styles.css";
import MealCard from "./components/mealCard";

export default function App() {
  let [searchQuery, setsearchQuery] = useState("");
  const [itemsList, setItems] = useState([]);

  const fetchMeals = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
    );
    const data = await res.json();
    setItems(data.meals);
    console.log(data);
  };

  useEffect(() => {
    fetchMeals();
  }, [searchQuery]);

  return (
    <div>
      <div className="App">
        <p>Meal Programme</p>
        <input
          type="search"
          onChange={(e) => {
            setsearchQuery(e.target.value);
            //console.log(searchQuery);
          }}
        />
      </div>
      <div className="meal-card-container">
        {itemsList?.map((eachItem) => (
          <MealCard itemDetails={eachItem} />
        ))}
      </div>
    </div>
  );
}
