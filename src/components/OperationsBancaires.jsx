import { map } from 'ramda';
import React from 'react'
import Button from '../formComponent/Button';
import EMesureAction from '../lib/EMesureAction';

const OperationsBancaires = ({ mesureHandler }) => {
  const { operationsBancaires, dispatch } = mesureHandler;

  return (
    <div className='menus'>
      {
        map(
          ({ shortLabel, longLabel }) => {
            return <div key={shortLabel} className='menu'>
              <Button 
                longLabel={longLabel} 
                onClick={() => dispatch({
                    type: EMesureAction.UPDATE_SELECTED_OPERATION_BANCAIRE,
                    data: { operationBancaire: shortLabel}
                  })
                }
              />
            </div>
          }
        )(operationsBancaires)
      }
    </div>
  )
}

export default OperationsBancaires;
