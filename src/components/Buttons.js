import React from 'react'
import { useObserver } from 'mobx-react'
import { StoreContext } from '../index'

const Buttons = () => {

    const store = React.useContext(StoreContext)

    return useObserver(() => (
        <div>
            <button type="button" className="btn btn-light align-top" onClick={() => store.updateCount()}>
                <i className="fa fa-thumbs-o-up" />
                Like
            </button>

            <button type="button" className="btn btn-light" onClick={() => document.getElementById('comment').focus()}>
                <i className="fa fa-comment-o" />
                Comment
            </button>

        </div>
    ))
}

export default Buttons