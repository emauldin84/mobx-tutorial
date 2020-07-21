import React, { useContext } from 'react';
import { useObserver } from 'mobx-react'
import { StoreContext } from '../index'

export default function Count() {
    const store = useContext(StoreContext)
    return useObserver(() => (
        <div className="" >
            <div className="">
                <i className="fa fa-thumbs-up" />{store.likesCount}
            </div>
            <div className="">
                {store.commentsCount} comments
        </div>
        </div>
    ))
}