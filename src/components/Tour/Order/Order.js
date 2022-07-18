import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
// import Banner from '../Banner/Banner';
import Poster from '../Poster/Poster';
import Faq from '../Faq/Faq';

import './Order.css';

const Order = () => {
    return (
        <>
            <Navbar></Navbar>
            {/* <Banner></Banner> */}
            <div className="container">
                <div className="row py-5 mt-5">
                    <div className="col-lg-5">
                    <div class="card">
                    <img src="https://images.pexels.com/photos/461956/pexels-photo-461956.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <div className="card-text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam magni aliquid nobis illum fugiat nostrum. Veritatis iste eaque provident minima natus aliquam quam dignissimos consectetur inventore laboriosam? Expedita sed sapiente, ea velit, provident quia optio sit voluptatem quasi facere voluptatibus.
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
                               


                           </div>

                           <div className="col-lg-6">
                           <div class="form-group">
                                    <label for="exampleInputEmail1">Full Name</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Mobile Number</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" class="form-control" />
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