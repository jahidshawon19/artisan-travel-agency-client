import React from 'react';

const LoadDestination = () => {
    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-12">
                        <h4 className='text-success'>OUR FEATURED TOURS</h4>
                        <h1 className='display-4 font-weight-bold'>Tour Packages</h1>
                        <p className='lead text-secondary'>You will get the most convenient & affordable tour plan from here. Just plan your tour & pack your bag. We provide you all kinds of service whatever you need for a beautiful journey.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <form action="">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Search Destination" />
                        </div>
                        </form>
                    </div>
                    <div className="col-lg-4"></div>
                </div>


                <div className="row mt-3">
                    <div className="col-lg-3">
                    <div class="card">
                    <img src="https://images.pexels.com/photos/461956/pexels-photo-461956.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">Sajek Tour</h5>
                        <p class="card-text">2 Days-2 Nights</p>
                        <small className='text-secondary font-weight-bold'>6,000 BDT</small> <br />
                        <a href="/" class="btn btn-danger btn-sm btn-block">Book Now</a>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoadDestination;