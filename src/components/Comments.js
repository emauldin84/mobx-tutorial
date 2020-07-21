import React, { useContext } from 'react'
import { useObserver } from 'mobx-react'

import { StoreContext } from '../index'

const Comments = () => {
    const store = useContext(StoreContext)
    return useObserver(() => (
        <div>
            {store.comments.map((comment, index) => {
                return (
                    <div key={index}>
                        <p>{comment}</p>
                    </div>
                )
            }) }
        </div>
    ))
}

export default Comments