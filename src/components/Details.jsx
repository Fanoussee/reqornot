import { map } from 'ramda';
import React from 'react'
import Button from '../formComponent/Button';
import EMesureAction from '../lib/EMesureAction';

const Details = ({ mesureHandler }) => {
  const { details, dispatch } = mesureHandler;

  return (
    <div className='menus'>
      {
        map(
          ({ shortLabel, longLabel }) => {
            return <div key={shortLabel} className='menu'>
              <Button 
                longLabel={longLabel} 
                onClick={() => dispatch({
                    type: EMesureAction.UPDATE_SELECTED_DETAIL,
                    data: { detail: shortLabel}
                  })
                }
              />
            </div>
          }
        )(details)
      }
    </div>
  )
}

export default Details;
