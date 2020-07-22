import React from 'react'
import { useObserver } from 'mobx-react'
import { FaChevronRight } from 'react-icons/fa'


import Count from './Count'
import Buttons from './Buttons'
import Form from './Form'
import Comments from './Comments'

import imageStore from '../store/ImageStore'


const Card = () => {
    return useObserver(() => (
        <div className="card">
            <img src={imageStore.imageUrl} className="card-img-top" alt="..." />
            <button className="btn-next" onClick={imageStore.fetchImage}>
                <FaChevronRight />
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