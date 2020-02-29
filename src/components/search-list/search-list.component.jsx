import React from 'react';

import './search-list.styles.css'

export const SearchList = (props) => {
    
    return <div className='search-list'> 
            <input
                type='search'
                placeholder={props.placeholder}
                onChange={props.handleChange}
            />
          </div>
 
}