import React from 'react'
import { useObserver } from 'mobx-react'

import Count from './Count'
import Buttons from './Buttons'
import Form from './Form'
import Comments from './Comments'

import imageStore from '../store/ImageStore'


const Card = () => {
    return useObserver(() => (
        <div className="card">
            <img src={imageStore.imageUrl} className="card-img-top" alt="..." />
            <button className="btn btn-light" onClick={imageStore.fetchImage}>
                <i className="fa fa-chevron-right" />
                Next
            </button>
            <Count />
            <div className="card-body" >
                <Buttons />
            </div>
            <Form />
            <Comments />
        </div>
    ))
}

export default Card