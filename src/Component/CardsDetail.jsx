import { Padding } from '@mui/icons-material'
import { Table } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';


import { DLT, ADD, REMOVE } from '../redux/action/action'
const CarsdsDetail = () => {

  const [data, setData] = useState([])
  const { id } = useParams();
  // console.log(id)

  const getdata = useSelector((state) => state.cartreducer.carts)
  // console.log(getdata)


  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    })
    setData(comparedata)
  }

  useEffect(() => {
    compare()
  }, [id]);

  //whenever click on the decrement button than decrease the item and qnty
  const remove = (item) => {
    dispatch(REMOVE(item))
  }



  //whenever click on the increment button than increase the item qnty
  const send = (e) => {
    // console.log('send', e)
    dispatch(ADD(e))
  }


  //redirecting home page while clicking the delete icons

  const history = useNavigate()

  // for delete item
  const dispatch = useDispatch()
  const dlt = (id) => {
    dispatch(DLT(id));
    history('/') // redirecting home page
  }
  return (
    <>
      <div className='container mt-2'>
        <h2 className='text-center'>Items Details Page</h2>

        <section className='container mt-3'>
          <div className='iteamsdetails'>
            {
              data.map((ele) => {
                return (
                  <>
                    <div className='items_img'>
                      <img src={ele.imgdata} alt='' />
                    </div>

                    <div className='details'>
                      <Table>
                        <tr>
                          <td>
                            <p><strong>Restaurant</strong> {ele.rname}</p>
                            <p><strong>prices :</strong>  ₹{ele.price}</p>
                            <p><strong>Dishes :</strong> {ele.address}</p>
                            <p><strong>Total  :</strong> ₹{ele.price * ele.qnty}</p>
                            <div className='mt-5 d-flex justify-content-between align-item-center' style={{ width: 100, cursor: 'pointer' }}>
                              <span onClick={
                                ele.qnty <=1 ? ()=>dlt(ele.id) : () => remove(ele)} style={{ fontSize: 24 }}>-</span>
                              <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                              <span onClick={() => send(ele)} style={{ fontSize: 24 }}>+</span>
                            </div>
                          </td>
                          <td>
                            <p><strong>Rating :</strong><span style={{ background: 'green', color: '#fff', padding: '2px 5px', borderRadius: '5px' }}> {ele.rating}★</span></p>
                            <p><strong>Order Review :</strong><span>{ele.somedata}</span></p>
                            <p><strong>Remove :</strong><span> <i className='fas fa-trash' onClick={() => dlt(ele)} style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }}></i></span></p>
                          </td>
                        </tr>
                      </Table>
                    </div>


                  </>
                )
              })
            }
          </div>
        </section>
      </div>
    </>
  )
}

export default CarsdsDetail