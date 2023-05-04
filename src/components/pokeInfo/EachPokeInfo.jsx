import React from 'react'
import './styles/eachPokeInfo.css'
import { useNavigate } from 'react-router-dom'

const EachPokeInfo = ({ pokemon }) => {

const navigate = useNavigate()
const handleClick = () => {
    navigate('/pokedex')
}

  return (
    <>
    
    <div className='header__red'></div>
    <div className='header__black'></div>
    <img className='header__pokedex' src="./photos/pokedex.png" alt="" />
    <img className='header__pokeball' src="./photos/pokebola.png" alt="" />
    <button onClick={handleClick} className='header__btn'>Back to Pokedex</button>

    <div className={`each ${pokemon?.types[0].type.name}1`}>
        <header className={`each__header ${pokemon?.types[0].type.name}`}>
            <img className='each__header__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section className='each__first__container'>
            <h2 className='each__first__container-id'>#{pokemon?.id}</h2>
            <h2 className={`each__first__container-name ${pokemon?.types[0].type.name}2`}>{pokemon?.name}</h2>
            <ul className='each__first__container-list'>
                <li className='each__first__container-item'><span className='each__first__container-item-name'>Weight</span><span className='each__first__container-item-data'>{pokemon?.weight}</span></li>
                <li className='each__first__container-item'><span className='each__first__container-item-name'>Height</span><span className='each__first__container-item-data'>{pokemon?.height}</span></li>
            </ul>
        </section>
        <article className='each__second__container'>
            <div className='each__second__container__list'>
                <h4 className='each__second__container__list-name'>Type</h4>
                <ul className='each__second__container__list-list'>
                    {
                        pokemon?.types.map(objType => (
                            <li className={`each__second__container__list-item each__second__container__list-item-type ${objType.type.name}1`} key={objType.type.url}>{objType.type.name}</li>
                        ))
                    }
                </ul>
            </div>
            <div className='each__second__container__list'>
                <h4 className='each__second__container__list-name'>Abilities</h4>
                <ul className='each__second__container__list-list'>
                    {
                        pokemon?.abilities.map(objAbility => (
                            <li className='each__second__container__list-item' key={objAbility.ability.url}>{objAbility.ability.name}</li>
                        ))
                    }
                </ul>
            </div>
        </article>
        <section className='each__third__container'>
            <h3 className='each__third__container-title'>Stats</h3>
            <ul className='each__third__container-list'>
                {
                    pokemon?.stats.map(objStat => (
                        <li key={objStat.stat.url} className='each__third__container-item'>
                            <div className='each__third__container-item-data'>
                                <span className='each__third__container-item-name'>{objStat.stat.name}</span>
                                <span className='each__third__container-item-value'>{objStat.base_stat}/100</span>
                            </div>
                            <div className='each__third__container-base-bar'>
                                <div className={`w${objStat.base_stat} each__third__container-fill-bar`}></div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    </div>
    <article className={`each__poke__movements ${pokemon?.types[0].type.name}1`}>
        <h2 className='each__poke__movements-title'>Movements</h2>
        <ul className='each__poke__movements-list'>
            {
                pokemon?.moves.map(objMove => (
                    <li className='each__poke__movements-item' key={objMove.move.url}>{objMove.move.name}</li>
                ))
            }
        </ul>
    </article>
    <footer className='pokedex__footer'>
        <img className='pokedex__footer__img-left' src="./photos/pokebola.png" alt="" />
        <p className='pokedex__footer__p'>Coded by dsdesimone</p>
        <img className='pokedex__footer__img-right' src="./photos/pokebola.png" alt="" />
    </footer>
    </>
  )
}

export default EachPokeInfo