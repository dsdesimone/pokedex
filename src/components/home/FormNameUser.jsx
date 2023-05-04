import React, { useRef } from 'react'
import { setTrainerName } from '../../store/slices/trainerName.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './styles/formNameUser.css'

const FormNameUser = () => {

    const inputName = useRef()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainerName(inputName.current.value.trim()))
        navigate('/pokedex')
    }

    return (
        <form className='formNameUser' onSubmit={handleSubmit}>
            <input className='formNameUser-input' ref={inputName} type="text" />
            <button className='formNameUser-btn'>START</button>
        </form>
    )
}

export default FormNameUser