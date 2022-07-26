import React, { useEffect, useState }  from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
// import Banner from '../Banner/Banner';
import Poster from '../Poster/Poster';
import Faq from '../Faq/Faq';

import './Order.css';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Order = () => {
    const {loginUser} = useAuth()

    const {tourId} = useParams()

    const [singleTour, setSingleTour] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:8000/tourPackages/${tourId}`)
        .then(res=>res.json())
        .then(data=>setSingleTour(data))
    }, [])
    return (
        <>
            <Navbar></Navbar>
            {/* <Banner></Banner> */}
            <div className="container">
                <div className="row py-5 mt-5">
                    <div className="col-lg-5">
                    <div class="card">
                    <img src={singleTour.photo} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <div className="card-text">
                                {singleTour.details}
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-7">
                        <form action="" method="POST">
                            <div className="row">
                                
                           <div className="col-lg-6">

                                <div class="form-group">
                                    <label for="exampleInputEmail1">Person</label>
                                    <input type="number" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Total Bill</label>
                                    <input type="number" class="form-control"  />
                                </div>

                                <div class="form-group">
                                <label for="floatingSelect">Select Online Payment Method</label>
                                <select class="form-control" id="floatingSelect" aria-label="Floating label select example">
                                    
                                    <option value="1">Bikash</option>
                                    <option value="2">Nogadh</option>
                                    
                                </select>
                           
                            </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Transaction ID</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Date</label>
                                    <input type="date" class="form-control" />
                                </div>

                                <div class="form-group d-none">
                                   
                                    <input type="text" class="form-control" value={singleTour.packageName} />
                                </div>
                               


                           </div>

                           <div className="col-lg-6">
                           <div class="form-group">
                                    <label for="exampleInputEmail1">Full Name</label>
                                    <input type="text" class="form-control" value={loginUser.displayName} />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Mobile Number</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" class="form-control" value={loginUser.email} />
                                </div>
                                  <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Address</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                <div class="form-group">
                                <label for="floatingSelect">City</label>
                                <select class="form-control" id="floatingSelect" aria-label="Floating label select example">
                                    
                                    <option value="1">Agrabadh</option>
                                    <option value="2">Dewan Hat</option>
                                    <option value="3">Lalkhan Bazar</option>
                                    <option value="4">GEC</option>
                                    <option value="5">2 No Gate</option>
                                    <option value="5">Muradpur</option>
                                    <option value="6">Bahaddarhat</option>
                                    <option value="7">Chawkbazar</option>
                                </select>
                           
                            </div>

                           </div>
                            
                            </div>
                           

                        <input type="submit" value="Submit Order" className='btn btn-lg btn-block btn-warning' />                           

                           
                        </form>
                    </div>
                </div>
            </div>
                <br /> <br />
            <Poster></Poster>
            <Faq></Faq>
            <Footer></Footer>   
        </>
    );
};

export default Order;