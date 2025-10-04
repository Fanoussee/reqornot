import React from 'react'
import Onglet from '../formComponent/Onglet'
import EMesureAction from '../lib/EMesureAction';

const Navigation = ({ mesureHandler }) => {
  const { dispatch, showMenuMesures, showMenuOperationsBancaires, showMenuDetails, showMenuResultat } = mesureHandler;

  return (
    <div className='navigation'>
      <Onglet 
        label={'Mesures'} 
        onClick={() => dispatch({
          type: EMesureAction.RESET_MESURE
        })}
        menuDisabled={!showMenuMesures}
        arrowDisabled={!showMenuOperationsBancaires}
      />
      <Onglet 
        label={'Opérations bancaires'}
        onClick={() => dispatch({
          type: EMesureAction.RESET_OPERATION_BANCAIRE
        })}
        menuDisabled={!showMenuOperationsBancaires}
        arrowDisabled={!showMenuDetails}
      />
      <Onglet 
        label={'Détails'}
        onClick={() => dispatch({
          type: EMesureAction.RESET_DETAIL
        })}
        menuDisabled={!showMenuDetails}
        arrowDisabled={!showMenuResultat}
      />
      <Onglet 
        label={'Résultats'} 
        lastMenu 
        menuDisabled={!showMenuResultat} 
        arrowDisabled={showMenuResultat} 
      />
    </div>
  )
}

export default Navigation;
