import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import './styles/formPoke.css'

const formPoke = ({ setFormUrl, urlBase }) => {

    const inputPoke = useRef()

    const navigate = useNavigate()
 
    const url = `https://pokeapi.co/api/v2/type/`
    const [ types, getAllTypes ] = useFetch(url)

    useEffect(() => {
        getAllTypes()
    }, [])


    const handleSubmit = e => {
        e.preventDefault()
        const path = `/pokedex/${inputPoke.current.value.trim().toLowerCase()}`
        navigate(path)
    }

    const handleChange = e => {
        setFormUrl(e.target.value)
    }

    return (
        <div className='formPoke'>
            <form className='formPoke__form' onSubmit={handleSubmit}>
                <input className='formPoke__form-input' ref={inputPoke} type="text" />
                <button className='formPoke__form-btn'>Search</button>
            </form>
            <select className='formPoke__select' onChange={handleChange}>
                <option value={urlBase}>All Pokemons</option>
                {
                    types?.results.map(type => (
                        <option 
                        key={type.url} 
                        value={type.url}
                        >
                            {type.name[0].toUpperCase() + type.name.slice(1)}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default formPoke