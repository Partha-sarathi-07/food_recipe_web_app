
// @ts-ignore
export default function IngredientsList({ref, ingredients, getRecipe}) {
    // @ts-ignore
    const ingredientList = ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>);

    return (
        <section id='recipe_container'>
            <h2 className='section_heading'>Ingredients on hand:</h2>
            <ul>
                {ingredientList}
            </ul>
            {
                ingredientList.length >= 3 && 
                <div id='from_api'>
                    <div ref={ref}>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={getRecipe}>Get a recipe</button>
                </div>
            }
        </section>
    )
}