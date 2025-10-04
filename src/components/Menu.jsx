import React from 'react'
import Mesures from './Mesures'
import OperationsBancaires from './OperationsBancaires'
import Details from './Details';
import Resultat from './Resultat';

const Menu = ({ mesureHandler }) => {
  const { showMesures, showOperationsBancaires, showDetails, showResultat } = mesureHandler;

  return (
    <div className='body-box'>
      {showMesures && <Mesures mesureHandler={mesureHandler} />}
      {showOperationsBancaires && <OperationsBancaires mesureHandler={mesureHandler} />}
      {showDetails && <Details mesureHandler={mesureHandler} />}
      {showResultat && <Resultat mesureHandler={mesureHandler} />}
    </div>
  )
}

export default Menu;
