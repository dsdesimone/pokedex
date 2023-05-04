import React, { useEffect } from 'react'
import './styles/pokeCard.css'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'


const PokeCard = ({ url }) => {

    const [ pokemon, getPokemonById ] = useFetch(url)

    useEffect(() => {
        getPokemonById()
    }, [])

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/pokedex/${pokemon.name}`)
    }

    return (
        <div onClick={handleClick} className={`poke__container ${pokemon?.types[0].type.name}`}>
            
            <header className={`poke__container__header ${pokemon?.types[0].type.name}1`}>
                <img className='poke__container__header-img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            </header>
            <section className='poke__container__first'>
                <h2 className={`poke__container__first-name ${pokemon?.types[0].type.name}2`}>{pokemon?.name.toUpperCase()}</h2>
                <ul className='poke__container__first-types'>
                    {
                        pokemon?.types.map(objType => (
                            <li className='poke__type-specific' key={objType.type.url}>
                                {objType.type.name}
                            </li>
                        ))
                    }
                </ul>
            </section>
            <ul className='poke__container__second'>
                {
                    pokemon?.stats.map(objStat => (
                        <li className='poke__container__second-li' key={objStat.stat.url} >
                            <span className='poke__container__second-li-span1'>{objStat.stat.name}</span>
                            <span className={`poke__container__second-li-span2 ${pokemon?.types[0].type.name}2`}>{objStat.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PokeCard