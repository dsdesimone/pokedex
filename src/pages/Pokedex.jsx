import { useSelector } from 'react-redux'
import FormPoke from '../components/pokedex/formPoke'
import PokeContainer from '../components/pokedex/PokeContainer'
import './styles/pokedex.css'
import { useState } from 'react'



const Pokedex = () => {
    const urlBase = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
    
    const [ formUrl, setFormUrl ] = useState(urlBase)

    const { trainerName } = useSelector(state => state)
    

    return (
        <div className='pokedex'>
            <div className='pokedex-red'></div>
            <div className='pokedex-black'></div>
            <img className='pokedex__pokedex' src="./photos/pokedex.png" alt="pokedex logo" />
            <img className='pokedex__pokeball' src="./photos/pokebola.png" alt="pokeball photo" />
            <p className='pokedex__welcome'>Welcome <span className='pokedex__name'>{trainerName}</span>, here you will find your favourite Pokemons!</p>
            <div className='pokedex__formPoke' >
                <FormPoke urlBase={urlBase} setFormUrl={setFormUrl}/>
            </div>
            <div className='pokedex__container'>
                <PokeContainer formUrl={formUrl}/>
            </div>
            <footer className='pokedex__footer'>
                <img className='pokedex__footer__img-left' src="./photos/pokebola.png" alt="" />
                <p className='pokedex__footer__p'>Coded by dsdesimone</p>
                <img className='pokedex__footer__img-right' src="./photos/pokebola.png" alt="" />
            </footer>
        </div>
    )
}

export default Pokedex