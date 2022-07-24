import axios from 'axios';
import React, { useRef } from 'react';
import AdminNav from '../AdminNav/AdminNav';

const AddPacakge = () => {

    const packageNameRef = useRef();
    const packageRef = useRef();
    const priceRef = useRef();
    const photoRef = useRef();
    const detailsRef = useRef();



    const handleAddTourPackage = e =>{
        const packageName = packageNameRef.current.value; 
        const packageDuration = packageRef.current.value ;
        const price = priceRef.current.value ;
        const photo = photoRef.current.value ;
        const details = detailsRef.current.value; 

        const newTourPackage = {'packageName':packageName, 'packageDuration':packageDuration,'price':price,'photo':photo,'details':details}
        
        // axios.post('http://localhost:8000/tourPackage', newTourPackage)
        //  .then(res =>{
        //     if(res.newTourPackage.insertedId){
        //         alert('New Tour Package Added Successfully')
        //         e.target.reset()
        //     }
        //  })



 
        fetch('http://localhost:8000/tourPackage', {
            method: 'POST',
            headers: {
              'content-type' : 'application/json',
            },
            body: JSON.stringify(newTourPackage)
          })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    alert('New Tour Package Added Successfully')
                    e.target.reset()
                }
            })
            
       
        
        e.preventDefault()
        
    }


    return (
        <>
            <AdminNav></AdminNav>
            <section className='py-5 mt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <h5 className='text-primary'>Add New Tour Package</h5>
                        <hr />
                        <div className="card">
                            <div className="card-body">


                            <form onSubmit={handleAddTourPackage}>
                                <div className="row">
                                    <div className="col-lg-6">
                                            <div className="form-group">
                                                <label>Package Name</label>
                                                <input type="text" className="form-control"  placeholder="Saitmartin tour" ref={packageNameRef} />
                                                
                                            </div>

                                            <div className="form-group">
                                                <label>Package</label>
                                                <input type="text" className="form-control"  placeholder="2 Days-2 Nights" ref={packageRef} />
                                                
                                            </div>


                                    </div>

                                    <div className="col-lg-6">
                                                                         
                                        <div className="form-group">
                                            <label>Price</label>
                                            <input type="text" className="form-control" ref={priceRef} />
                                            
                                        </div>

                                        <div className="form-group">
                                            <label>Photo URL</label>
                                            <input type="text" className="form-control" ref={photoRef} />
                                            
                                        </div>
                            
                                
                                        
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        
                                            <div className="form-group">
                                                <label>Package Details</label>
                                                <textarea class="form-control" rows="3"  ref={detailsRef}></textarea>
                                                
                                            </div>
                                    <button type="submit" className="btn btn-info btn-sm">Add Now</button>
                                    <button type="reset" className="btn btn-danger btn-sm">Cancel</button>
                                    </div>
                                    
                                </div>
                
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
};

export default AddPacakge;