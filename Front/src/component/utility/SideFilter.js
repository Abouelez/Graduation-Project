import React, { useEffect } from 'react'
import { Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';
import { getAllCourses } from '../../redux/actions/courseAction';
import SideSearchHook from '../../Hook/Search/SideSearchHook';

const SideFilter = () => {

const [category,loading,clickCategory]=SideSearchHook()

   

  

    return (
        <div className="mt-3 ">
        <Row>
          <div className="d-flex flex-column mt-2">
            <div className="filter-title">category</div>
            <div className="d-flex mt-2" >
              <input onChange={clickCategory} type="checkbox" value={0} style={{ width: "25%" }} />
                <div className="filter-sub me-2"><h4>All</h4> </div>
              </div>
            {loading && <p>Loading categories...</p>}
             
            {!loading  && category.data.slice(0, 4).map(category => (
              <div className="d-flex mt-2" key={category.id}>
              <input onChange={clickCategory} type="checkbox" value={category.name} style={{ width: "25%" }} />
                <div className="filter-sub me-2"><h4>{category.name.slice(0, 10)}</h4> </div>
              </div>
            ))}
          </div>
  
  
          <div className="filter-title my-3">price</div>
          <div className="d-flex">
            <p className="filter-sub my-2">from:</p>
            <input
              className="m-2 text-center"
              type="number"
              style={{ width: "50px", height: "25px" }}
            />
          </div>
          <div className="d-flex">
            <p className="filter-sub my-2">to:</p>
            <input
              className="m-2 text-center"
              type="number"
              style={{ width: "50px", height: "25px" }}
            />
          </div>
        </Row>
      </div>
    )
}

export default SideFilter