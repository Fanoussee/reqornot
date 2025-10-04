import React from 'react';
import Button from '../formComponent/Button';
import { map } from 'ramda';
import EMesureAction from '../lib/EMesureAction';

const Mesures = ({ mesureHandler }) => {
  const { mesures, dispatch } = mesureHandler;

  return (
    <div className='menus'>
      {map(
        ({shortLabel, longLabel}) => {
          return <div className='menu mesure' key={shortLabel}>
            <Button 
              onClick={() => dispatch({
                type: EMesureAction.UPDATE_SELECTED_MESURE,
                data: { mesure: shortLabel }
              })} 
              shortLabel={shortLabel} 
              longLabel={longLabel}
            />
          </div>
        }
      )(mesures)}
    </div>
  )
}

export default Mesures;
