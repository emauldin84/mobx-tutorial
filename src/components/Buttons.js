import React from 'react'
import { FaRegThumbsUp, FaRegComment } from 'react-icons/fa'
import { useObserver } from 'mobx-react'
import { StoreContext } from '../index'

const Buttons = () => {

    const store = React.useContext(StoreContext)

    return useObserver(() => (
        <div className='buttons-container'>
            <button type="button" className="btn btn-count" onClick={() => store.updateCount()}>
                <FaRegThumbsUp /> Like
            </button>

            <button type="button" className="btn btn-count" onClick={() => document.getElementById('comment').focus()}>
                <FaRegComment /> Comment
            </button>

        </div>
    ))
}

export default Buttons