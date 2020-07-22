import React, { useContext, useState } from 'react'
import { useObserver } from 'mobx-react'

import { StoreContext } from '../index'

const Form = () => {
    const store = useContext(StoreContext)
    const [comment, setComment] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        store.postComment(comment)
        setComment('')
    }

    const handleChange = (e) => {
        setComment(e.target.value)
    }

    return useObserver(() => (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <input type='text' id='comment' name='comment' placeholder='Leave a comment...' value={comment} onChange={handleChange}/>

            </form>
        </div>
    )
    )
}

export default Form