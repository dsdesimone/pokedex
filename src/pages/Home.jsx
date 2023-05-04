import React from 'react'
import FormNameUser from '../components/home/FormNameUser'
import './styles/home.css'

const Home = () => {
  return (
    <div className='home'>
        <img className='home__img' src="./photos/pokedex.png" alt="pokedex logo" />
        <h2 className='home__h2'>Hello Trainer!</h2>
        <p className='home__p'>Please enter your name to start</p>
        <FormNameUser />
        <footer className='home__footer'>
          <img className='home__footer-img' src="./photos/pokebola.png" alt="pokeball photo" />
          <div className='home__footer-red'></div>
          <div className='home__footer-black'></div>
        </footer>
    </div>
  )
}

export default Home