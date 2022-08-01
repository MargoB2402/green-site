import React from 'react'
import './FormStyles.css'

const Form = () => {
    return (
        <div className='form'>
            <form>
                <label>Ім'я</label>
                <input type='text'></input>
                <label>Email</label>
                <input type='email'></input>
                <label>Послуга</label>
                <input type='text'></input>
                <label>Деталі</label>
                <textarea rows='6' placeholder='Напишіть тут, якщо бажаєте заздалегіть щось уточнити' />
                <button className='btn'>Відправити</button>
            </form>
        </div>
    )
}

export default Form
