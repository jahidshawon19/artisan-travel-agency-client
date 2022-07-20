import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import useAuth from '../../hooks/useAuth';


const Profile = () => {
    const {loginUser} = useAuth()
    return (
        <>
            <Navbar></Navbar>

            <section className='py-5 bg-light mt-5'>
                
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="card p-3">
                                <img src={loginUser.photoURL} alt="" style={{ marginLeft:'40%', borderRadius: '50%', height:'70px', width:'70px'}}/>
                                <div className="card-body">
                                    <p>Name: {loginUser.displayName}</p>
                                    <p>Email: {loginUser.email}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
            <Footer></Footer>
        
        </>
    );
};

export default Profile;