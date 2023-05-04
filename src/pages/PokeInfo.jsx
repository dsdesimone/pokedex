import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import './styles/pokeInfo.css'
import HasError from '../components/pokeInfo/HasError'
import EachPokeInfo from '../components/pokeInfo/EachPokeInfo'

const PokeInfo = () => {

    const { name } = useParams()

    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const [ pokemon, getPokemonByName, hasError ] = useFetch(url)
    
    useEffect(() => {
        getPokemonByName()
    }, [name])

    console.log(pokemon)

    return (
        <div className='pokeInfo'>
            
            {
                hasError    
                    ? <HasError />
                    : <EachPokeInfo pokemon={pokemon}/>
            }
            
        </div>
    )
}

export default PokeInfo