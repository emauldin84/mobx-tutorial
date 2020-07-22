import React from 'react'
import { FaRegThumbsUp, FaRegComment } from 'react-icons/fa'
import { useObserver } from 'mobx-react'
import { StoreContext } from '../index'

const Buttons = () => {

    const store = React.useContext(StoreContext)

    return useObserver(() => (
        <div class='buttons-container'>
            <button type="button" className="btn btn-count" onClick={() => store.updateCount()}>
                <i className="fa fa-thumbs-o-up" />
                <FaRegThumbsUp /> Like
            </button>

            <button type="button" className="btn btn-count" onClick={() => document.getElementById('comment').focus()}>
                <i className="fa fa-comment-o" />
                <FaRegComment /> Comment
            </button>

        </div>
    ))
}

export default Buttons