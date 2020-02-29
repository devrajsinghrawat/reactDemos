import React from 'react';
import {Card} from '../card/card.component'
import './card-list.styles.css'


export const CardList = (props) => {
    return <div className='card-list'> 
            {
                props.users.map( userObj => {
                return <Card key={userObj.id} user={userObj} />
            })} 
          </div>
 
}
