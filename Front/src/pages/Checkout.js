import React, { useState } from 'react'
import "../css/Checkout.css"
import { FaCcApplePay, FaCreditCard, FaEnvelope, FaInstalod, FaMapMarker, FaUser} from 'react-icons/fa'
const Checkout = () => {
    const [name,setname]= useState("");
    const [email,setemail]= useState("");
    const [address,setaddress]= useState("");
    const [city,setcity]= useState("");

    return (
        <>
            <div className='wrapper'>
                <h2 className='h'>payment form</h2>
                <form action='' method='POST'>
                    <h4>Account</h4>
                    <div className='input_group'>
                        <div className='input_box'>
                            <input type='text' placeholder='Full Name' required className='name'  value={name} onChange={(a)=>setname(a.target.value)}/>
                            <FaUser className='icons' />
                        </div>
                    </div>
                    <div className='input_group'>
                        <div className='input_box'>
                            <input type='email' placeholder='Email Address' required className='name' value={email} onChange=
                                {(e)=>setemail(e.target.value)}/>
                            <FaEnvelope className='icons' />
                        </div>
                    </div>
                    <div className='input_group'>
                        <div className='input_box'>
                            <input type='text' placeholder='Address' required className='name' value={address} onChange=
                                {(e)=>setaddress(e.target.value)}/>
                            <FaMapMarker area-aria-hidden="true" className='icons'/>
                        </div>
                    </div>
                    <div className='input_group'>
                        <div className='input_box'>
                            <input type='text' placeholder='City' required className='name' value={city} onChange=
                                {(e)=>setcity(e.target.value)}/>
                            <FaInstalod className='icons' />
                        </div>
                    </div>
                    {/*     DOB & Gender Start */}
                    <div className='input_group'>
                        <div className='input_box'>
                            <h4> Date Of Birth</h4>
                            <input type='text' placeholder='DD' required className='dob'/>
                            <input type='text' placeholder='MM' required className='dob'/>
                            <input type='text' placeholder='YYY' required className='dob'/>
                        </div>
                        <div className='input_box'>
                            <h4>Gender</h4>
                            <input type='radio' className='radio' name='gender' required id='b1' checked/>
                            <label for="b1">Male</label>
                            <input type='radio' className='radio' name='gender' required id='b2' checked/>
                            <label for="b2">Female</label>
                        </div>
                    </div>
                    {/* Payment Details */}
                    <div className='input_group'>
                        <div className='input_box'>
                            <h4>Payment Details</h4>
                            <input type='radio'  name='pay' className='radio' required id='bc1' checked/>
                            <label for='bc1'><span>
                            <FaCcApplePay className='IC'/>
                            paypal
                                </span></label>
                            <input type='radio'  name='pay' className='radio' required id='bc2' checked/>
                            <label for='bc2'><span>
                            <FaCreditCard className='IC'/>
                            Credit Card
                                </span></label>
                        </div>
                    </div>
                    <div className='input_group'>
                        <div className='input_box'>
                            <input type='tel' className='name' placeholder='card Number 1111-2222-3333-4444' required/>
                            <FaCreditCard className='icons'/>
                        </div>
                    </div>
                    <div className='input_group'>
                        <div className='input_box'>
                            <button type='submit' className='button'>Pay Now</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
<i class="fa-brands fa-cc-visa"></i>
export default Checkout
