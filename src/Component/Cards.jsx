import React, { useState } from 'react'
import CardsData from './CardsData'
import './style.css'

//redux
import { useDispatch } from 'react-redux';
import  {ADD} from '../redux/action/action'

const Cards = () => {
    const [data, setdata] = useState(CardsData);

    console.log(data)

    // add data
    const dispatch = useDispatch()
    const send = (e) => {
        // console.log('send', e)
        dispatch(ADD(e))
    }

    return (
        <div className='container mt-3'>
            <h2 className='text-center'>Add to cart Projects</h2>

            <div className='row d-flex justify-content-center align-items-center'>
                {
                    data.map((element, id) => {
                        return (
                            <div className="card_style mx-2 mt-4" style={{ width: '22rem', border: "none" }}>
                                <img src={element.imgdata} class="card-img-top" alt="..." style={{ height: '16rem' }} />
                                <div class="card-body">
                                    <h5 class="card-title">{element.rname}</h5>
                                    <p class="card-text">{element.somedata}</p>
                                    <p class="card-text">Price : {element.price}</p>

                                    <a href="#" class="btn btn-primary" onClick={() => send(element)}>Add to Cart</a>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Cards