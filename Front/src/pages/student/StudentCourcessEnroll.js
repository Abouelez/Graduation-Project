import React from 'react'
import "../../css/StudentEnrolled.css"
import { HiStar } from 'react-icons/hi';

const StudentCourcessEnroll = () => {
  
  return (
    <div className='sce'>
      <h2 className='h22'>Courcess your Enrolled in</h2>
      <div className='d-flex flex-column gap-15'>
        <div className='coursecard d-flex gap-15'>
          <div className='imag'>
            <img src="/images/5.jpg" alt="imagek" width={300} height={200} />
          </div>
          <div>
            <h2 className='h2'>title</h2>
            <p className='p'>instructor name</p>
            <h4 className='h4'>4.7 <HiStar /><span>(272.011)</span></h4>
            <h2 className='h2'>1235  <span><del>E$1,699.99</del></span></h2>
          </div>
        </div>
        <div className='coursecard d-flex gap-15'>
          <div className='imag'>
            <img src="/images/5.jpg" alt="imagek" width={300} height={200} />
          </div>
          <div>
            <h2 className='h2'>title</h2>
            <p className='p'>instructor name</p>
            <h4 className='h4'>4.7 <HiStar /><span>(272.011)</span></h4>
            <h2 className='h2'>1235  <span><del>E$1,699.99</del></span></h2>
          </div>
        </div>
        <div className='coursecard d-flex gap-15'>
          <div className='imag'>
            <img src="/images/5.jpg" alt="imagek" width={300} height={200} />
          </div>
          <div>
            <h2 className='h2'>title</h2>
            <p className='p'>instructor name</p>
            <h4 className='h4'>4.7 <HiStar /><span>(272.011)</span></h4>
            <h2 className='h2'>1235  <span><del>E$1,699.99</del></span></h2>
          </div>
        </div>
        <div className='coursecard d-flex gap-15'>
          <div className='imag'>
            <img src="/images/5.jpg" alt="imagek" width={300} height={200} />
          </div>
          <div>
            <h2 className='h2'>title</h2>
            <p className='p'>instructor name</p>
            <h4 className='h4'>4.7 <HiStar /><span>(272.011)</span></h4>
            <h2 className='h2'>1235  <span><del>E$1,699.99</del></span></h2>
          </div>
        </div>
      </div>
    </div>

    
    
  )
}

export default StudentCourcessEnroll;
