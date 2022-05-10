import React, {useState} from 'react';

const PokemonAPI = () => {

    let [pokemonList, setPokemonList] = useState([]);
    let [abilitiesList, setAbilitiesList] = useState([]);

    const getPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0")
            .then(response => {
                return response.json();
            })
            .then(convertedResponse =>{
                console.log("response received ", convertedResponse.results)
                setPokemonList(convertedResponse.results)
            })
            .catch(err => {
                console.log("error response", err)
            })
        }
        //Can't get the nested API to work. 
    // const getAbilities = (e) => {
    //     fetch(e.pokemonList.url)
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(convertedResponse =>{
    //             console.log("response received ", convertedResponse.abilities)
    //             setAbilitiesList(convertedResponse.abilities)
    //         })
    //         .catch(err => {
    //             console.log("error response", err)
    //         })
    //     }
    return (
        <>
            <div>
                <button onClick={getPokemon}>Click here to get the latest Pokemon</button>
            </div>
            <hr />
            <table>
                <tr>
                    <th>Pokemon Name</th>
                    <th>URL</th>
                </tr>
            {
                pokemonList.map((pokemon, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{pokemon.name}</td>
                            {/* <td onMouseOver={(e)=>getAbilities(e)}><a href={pokemon.url}>{pokemon.url}</a></td> */}
                            <td><a href={pokemon.url}>{pokemon.url}</a></td>
                            <td>{pokemon.id}</td>
                        </tr>
                    )
                })
            }
            </table>
        </>
    )
}

export default PokemonAPI;