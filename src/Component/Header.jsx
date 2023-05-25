import { Badge } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import cart from '../image/cart.gif'
import { Table } from '@mui/material'

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { DLT } from '../redux/action/action'
const Header = () => {

    //for total price
    const [price, setPrice] = useState(0);
    //redux
    const getdata = useSelector((state) => state.cartreducer.carts)
    //
    console.log(getdata)

    const dispatch = useDispatch()

    const [anchorE1, setAnchorE1] = useState(null);
    const open = Boolean(anchorE1);

    const handleClick = (event) => {
        setAnchorE1(event.currentTarget);
    };

    const handleClose = (event) => {
        setAnchorE1(null);
    };

    //delete item functions

    const dlt = (id) => {
        dispatch(DLT(id));
    }

    // fot total
    const total = () => {
        let price = 0;
        getdata.map((ele, k) => {
            price = ele.price * ele.qnty + price
        })
        setPrice(price);
    }
    useEffect(() => {
        total();
    }, [total])
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark" style={{ height: '60px' }}>
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">Add To Cart</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>

                        </ul>

                    </div>
                    <Badge badgeContent={getdata.length} color="primary"
                        style={{ right: '50px' }}
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        {/* <MailIcon color="action" /> */}
                        <i className="fa-sharp fa-solid fa-cart-plus text-light" style={{ fontSize: 28, cursor: 'pointer' }}></i>
                    </Badge>

                </div>
            </nav>
            <Menu
                id='basic-menu'
                anchorEl={anchorE1}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {/* redux */}
                {
                    getdata.length ?
                        <div className='card_details' style={{ width: '24rem', padding: '10px' }}>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Photo</th>
                                        <th>Restaurant Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getdata.map((e) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                            <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                                                <img src={e.imgdata} style={{ width: '5rem', height: '5rem' }} />
                                                            </NavLink>
                                                        </td>
                                                        <td>
                                                            <p>{e.rname}</p>
                                                            <p>Price : ₹{e.price}</p>
                                                            <p>Quantity :{e.qnty}</p>
                                                            <p style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }} onClick={() => dlt(e.id)}>
                                                                <i className='fas fa-trash smalltrash'></i>
                                                            </p>
                                                        </td>
                                                        <td style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }} onClick={() => dlt(e.id)}>
                                                            <i className='fas fa-trash largetrash'></i>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                    <p className='text-center'>Total : {price}</p>
                                </tbody>
                            </Table>
                        </div> :
                        <div className='card_details d-flex jusify-content-center align-item-center' style={{ width: '100%', padding: 10, position: 'relative' }}>
                            <p>Your cart is Empty</p>
                            <i className='fas fa-close  smallclose' onClick={handleClose}></i>

                            <img src={cart} alt="" className='emptycart_img' style={{ width: '180px', padding: 10, cursor: 'pointer' }} />
                        </div>
                }

            </Menu>
        </div>
    )
}

export default Header