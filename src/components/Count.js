import React, { useContext } from 'react';
import { FaThumbsUp } from 'react-icons/fa'
import { useObserver } from 'mobx-react'
import { StoreContext } from '../index'

export default function Count() {
    const store = useContext(StoreContext)
    return useObserver(() => (
        <div className="count-container" >
            <div className="count-display">
                <FaThumbsUp style={{color: '#00f', opacity: '.6', width: '10px'}}/> {store.likesCount}
            </div>
            <div className="count-display">
                {store.commentsCount} comments
        </div>
        </div>
    ))
}