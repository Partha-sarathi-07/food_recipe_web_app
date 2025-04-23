import '../styles/main.css'
export default function Main() {
    return(
        <main>
            <form>
                <input 
                    type='text' 
                    aria-label='Add ingredient'
                    placeholder='e.g. Oregano'
                />
                <button>+ Add ingredient</button>
            </form>
        </main>
    )
}