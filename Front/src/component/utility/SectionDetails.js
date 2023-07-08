import React from 'react'
import "../../css/SectionDetails.css"
import { FaFile, FaPenSquare, FaTrash } from 'react-icons/fa'
const SectionDetails = () => {

    return (
        <>
                <div className='details'>
                <div className='SCn'>
                            <h2>Unpublished Section:</h2>
                            <FaFile className='i' />
                            <span className='para'>Course Name</span>
                            <div className='CO'>
                                <FaTrash className='icmp'  />
                                <FaPenSquare className='icmp'  />
                            </div>
                        </div>
                        <div className='LQCPA'>
                            <div className='pluse'>+</div>
                            <button className='button Lec'>Lecture</button>
                            <div className='pluse'>+</div>
                            <button className='button Lec'>Quize</button>
                            <div className='pluse'>+</div>
                            <button className='button Lec'>Coding Exercise</button>
                            <div className='pluse'>+</div>
                            <button className='button Lec'>Practice Test</button>
                            <div className='pluse'>+</div>
                            <button className='button Lec'>Assignment</button>
                        </div>
                        <button className='button BT'>+ Section</button>

                </div>
        </>
    )
}

export default SectionDetails
