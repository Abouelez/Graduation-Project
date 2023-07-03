import React from 'react'
import "../../css/SectionDetails.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFile , faTrashCan ,faPenToSquare} from '@fortawesome/free-solid-svg-icons'
const SectionDetails = () => {

    return (
        <>
                <div className='details'>
                <div className='SCn'>
                            <h2>Unpublished Section:</h2>
                            <FontAwesomeIcon className='i' icon={faFile} />
                            <span className='para'>Course Name</span>
                            <div className='CO'>
                                <FontAwesomeIcon className='icmp' icon={faTrashCan} />
                                <FontAwesomeIcon className='icmp' icon={faPenToSquare} />
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
