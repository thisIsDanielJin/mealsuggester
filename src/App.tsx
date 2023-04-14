import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Meal } from "./mealType";

interface MealsCategory {
    categories: singleCategory[];
}
interface singleCategory {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
}

function App() {
    const [categories, setCategories] = useState<singleCategory[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [randomMeal, setRandomMeal] = useState<Meal>({} as Meal);

    function handleCategorySelect(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedCategory(event.target.value);
    }
    useEffect(() => {
        async function fetchCategories(): Promise<MealsCategory> {
            const responseMealCategory = await fetch(
                "https://www.themealdb.com/api/json/v1/1/categories.php"
            );
            const data = await responseMealCategory.json();
            return data;
        }
        fetchCategories().then((data) => {
            setCategories(data.categories);
        });
    }, []);

    function fetchCategoryMeal() {
        async function getRandomMealByCategory() {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
            );
            const data = await response.json();

            const meals = data.meals;
            const randomIndex = Math.floor(Math.random() * meals.length);
            const randomMealId = meals[randomIndex].idMeal;

            const mealResponse = await fetch(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomMealId}`
            );
            const mealData = await mealResponse.json();

            const randomMeal = mealData.meals[0];
            return randomMeal;
        }
        getRandomMealByCategory().then((meal) => {
            setRandomMeal(meal);
        });
    }
    function fetchRandomMeal() {
        async function getRandomMeal() {
            const response = await fetch(
                "https://www.themealdb.com/api/json/v1/1/random.php"
            );
            const data = await response.json();
            const randomMeal = data.meals[0];
            return randomMeal;
        }
        getRandomMeal().then((meal) => {
            setRandomMeal(meal);
        });
    }
    return (
        <div className="App">
            <h1 className="mt-3"> Meal Recommendation</h1>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 offset-md-3">
                        <select
                            value={selectedCategory}
                            onChange={handleCategorySelect}
                            className="form-select"
                        >
                            <option value="">
                                -- Please select a category --
                            </option>
                            {categories.map((category) => (
                                <option
                                    key={category.idCategory}
                                    value={category.strCategory}
                                >
                                    {category.strCategory}
                                </option>
                            ))}
                            ;
                        </select>

                        <p>Selected category: </p>
                        <b className="text-success d-block mb-4">
                            {selectedCategory || "None"}
                        </b>
                    </div>
                </div>
            </div>

            <button
                onClick={fetchCategoryMeal}
                className="btn btn-success btn-rounded mx-2 mb-2 btn-lg animate__animated animate__pulse"
            >
                {" "}
                Category Meal
            </button>
            <button
                onClick={fetchRandomMeal}
                className="btn btn-success btn-rounded mx-2 mb-2 btn-lg animate__animated animate__pulse"
            >
                {" "}
                Random Meal
            </button>
            <div className="container">
                <div className="row">
                    {randomMeal.strMeal && (
                        <div className="card mx-auto col-12 col-md-6 offset-md-4">
                            <img
                                className="card-img-top mx-auto"
                                src={randomMeal.strMealThumb}
                                alt={randomMeal.strMeal}
                                style={{
                                    maxHeight: "350px",
                                    maxWidth: "350px",
                                }}
                            />
                            <div className="card-body">
                                <h2 className="card-title ">
                                    {randomMeal.strMeal}
                                </h2>
                                <p>Area : {randomMeal.strArea}</p>
                                <table className="mx-auto mb-10">
                                    <tr>
                                        <th>Ingredient</th>
                                        <th>Measure</th>
                                    </tr>
                                    <tr>
                                        <td>{randomMeal.strIngredient1}</td>
                                        <td>{randomMeal.strMeasure1}</td>
                                    </tr>
                                    <tr>
                                        <td>{randomMeal.strIngredient2}</td>
                                        <td>{randomMeal.strMeasure2}</td>
                                    </tr>
                                    <tr>
                                        <td>{randomMeal.strIngredient3}</td>
                                        <td>{randomMeal.strMeasure3}</td>
                                    </tr>
                                    <tr>
                                        <td>{randomMeal.strIngredient4}</td>
                                        <td>{randomMeal.strMeasure4}</td>
                                    </tr>
                                    <tr>
                                        <td>{randomMeal.strIngredient5}</td>
                                        <td>{randomMeal.strMeasure5}</td>
                                    </tr>
                                    <tr>
                                        <td>{randomMeal.strIngredient6}</td>
                                        <td>{randomMeal.strMeasure6}</td>
                                    </tr>
                                    <tr>
                                        <td>{randomMeal.strIngredient7}</td>
                                        <td>{randomMeal.strMeasure7}</td>
                                    </tr>
                                    <tr>
                                        <td>{randomMeal.strIngredient8}</td>
                                        <td>{randomMeal.strMeasure8}</td>
                                    </tr>
                                    <tr>
                                        <td>{randomMeal.strIngredient9}</td>
                                        <td>{randomMeal.strMeasure9}</td>
                                    </tr>
                                    <tr>
                                        <td>{randomMeal.strIngredient10}</td>
                                        <td>{randomMeal.strMeasure10}</td>
                                    </tr>
                                    <tr>
                                        <td>{randomMeal.strIngredient11}</td>
                                        <td>{randomMeal.strMeasure11}</td>
                                    </tr>
                                    <tr>
                                        <td>{randomMeal.strIngredient12}</td>
                                        <td>{randomMeal.strMeasure12}</td>
                                    </tr>
                                    <tr>
                                        <td>{randomMeal.strIngredient13}</td>
                                        <td>{randomMeal.strMeasure13}</td>
                                    </tr>
                                    <tr>
                                        <td>{randomMeal.strIngredient14}</td>
                                        <td>{randomMeal.strMeasure14}</td>
                                    </tr>
                                    <tr>
                                        <td>{randomMeal.strIngredient15}</td>
                                        <td>{randomMeal.strMeasure15}</td>
                                    </tr>
                                    <tr>
                                        <td>{randomMeal.strIngredient16}</td>
                                        <td>{randomMeal.strMeasure16}</td>
                                    </tr>
                                    <tr>
                                        <td>{randomMeal.strIngredient17}</td>
                                        <td>{randomMeal.strMeasure17}</td>
                                    </tr>
                                    <tr>
                                        <td>{randomMeal.strIngredient18}</td>
                                        <td>{randomMeal.strMeasure18}</td>
                                    </tr>
                                    <tr>
                                        <td>{randomMeal.strIngredient19}</td>
                                        <td>{randomMeal.strMeasure19}</td>
                                    </tr>
                                    <tr>
                                        <td>{randomMeal.strIngredient20}</td>
                                        <td>{randomMeal.strMeasure20}</td>
                                    </tr>
                                </table>
                                <p className="card-text">
                                    Recipe : {randomMeal.strInstructions}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
