import React from 'react'
import UnopDropdown from "unop-react-dropdown";
import { IoFilterOutline } from "react-icons/io5";


const SearchCountResult = ({ title }) => {
    const handler = () => {

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
                        <div className="border-bottom card-filter-item ">bestseller</div>
                        <div className="border-bottom card-filter-item ">top rated</div>
                        <div className="border-bottom card-filter-item ">price from low to high</div>
                        <div className="card-filter-item ">price from high to low</div>
                    </div>
                </UnopDropdown>
            </div>
        </div>
    )
}

export default SearchCountResult

