import React from 'react'



const FilterForm = ({onChange, nameFilter}) => {

    return (
        <div>filter shown with  
          <input  
                  type="text"
                  placeholder="Search name..."
                  value={nameFilter}
                  onChange={onChange} />
        </div>
    )
}


export default FilterForm