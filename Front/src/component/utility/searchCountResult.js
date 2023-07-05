import React from 'react'
import UnopDropdown from "unop-react-dropdown";
import { IoFilterOutline } from "react-icons/io5";
import UseCoursesSearchHook from '../../Hook/Courses/UseCoursesSearchHook';


const SearchCountResult = ({ title }) => {
    const [courses, total,result, onPress, getCourse]=UseCoursesSearchHook()
    const handler = () => {

    }
    const clickMe = (key) => {
       //console.log(key);
        localStorage.setItem("sortType", key)
       // console.log(localStorage.getItem("sortType"));
       getCourse();
    }
    return (
        <div className="d-flex justify-content-between  pt-3 px-2">
            <div className="sub-tile"><h2>{title}</h2> </div>
            <div className="search-count-text d-flex ">
                <UnopDropdown
                    onAppear={handler}
                    onDisappearStart={handler}
                    trigger={
                        <h2 className="mx-2">
                            <IoFilterOutline />

                            order
                        </h2>
                    }
                    delay={0}
                    align="CENTER"
                    hover>
                    <div className="card-filter">
                        <div onClick={() => clickMe("hiegher")} className="border-bottom card-filter-item ">higher price</div>
                        <div onClick={() => clickMe("lower")} className="border-bottom card-filter-item ">lower price</div>
                        <div onClick={() => clickMe("")} className="card-filter-item ">price from high to low</div>
                    </div>
                </UnopDropdown>
            </div>
        </div>
    )
}

export default SearchCountResult

