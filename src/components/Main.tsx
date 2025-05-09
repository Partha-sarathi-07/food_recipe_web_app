import { useState } from 'react';
import '../styles/main.css'
import AIRecipe from './AIRecipe';
import IngredientsList from './IngredientsList';
import { getRecipeFromMistral } from '../../ai';

export default function Main() {
    const [ingredients, setIngredients] = useState<string[]>(["Bread", "Tomatoe", "Cabbage", "chicken", "Beans", "Carrot", "Chilli Sauce"]);
    const [recipe, setRecipe] = useState<string>();

    function addIngredient(formData: FormData) {
        const newIngredient = formData.get("ingredient")?.toString();
        setIngredients(prevIngredients => [...prevIngredients, newIngredient!]);
    }

    async function getRecipe() {
        const generatedRecipe: string | undefined = await getRecipeFromMistral(ingredients);
        if (generatedRecipe !== undefined)
            setRecipe(generatedRecipe)
    }

    return(
        <main>
            <div id='get_recipe_container'>
                <form action={addIngredient}>
                    <input 
                        type='text' 
                        aria-label='Add ingredient'
                        placeholder='e.g. Oregano'
                        name='ingredient'
                        required
                    />
                    <button>+ Add ingredient</button>
                </form>
                {
                    ingredients.length > 0 && 
                    <IngredientsList
                        ingredients = {ingredients} 
                        getRecipe = {getRecipe}
                    />
                }
            </div>
            {
                recipe && 
                <AIRecipe
                    recipe = {recipe}
                />
            }
        </main>
    )
}