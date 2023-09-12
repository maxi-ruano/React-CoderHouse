import { useEffect ,useState} from "react"

export const PokeApi = () => {

    
    const [pokemon, setPokemon] = useState(null);

console.log(pokemon);

useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then((res) => res.json())
    .then((data) => {
        setPokemon(data);
    })
   
},[])






    return (
        <div>

      <h1>PokeApi</h1>

        </div>
    )
}