import { FormEvent } from 'react';
import '../styles/main.css'
export default function Main() {
    const ingredients: string[] = ['Chicken', "Oregano", "Tomatoes"];
    const ingredientList = ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>);

    function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient")?.toString();
        ingredients.push(newIngredient!);
        console.log(newIngredient);
        console.log(ingredients);
    }
    return(
        <main>
            <form onSubmit={handleOnSubmit}>
                <input 
                    type='text' 
                    aria-label='Add ingredient'
                    placeholder='e.g. Oregano'
                    name='ingredient'
                />
                <button>+ Add ingredient</button>
            </form>
            <ul>
                {ingredientList}
            </ul>
        </main>
    )
}