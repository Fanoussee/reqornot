import React from 'react'

const Resume = ({ mesureHandler }) => {
  const { showMesureResume, showOperationBancaireResume, showDetailResume, resume } = mesureHandler;
  const { selectedMesureLabel, selectedOperationBancaireLabel, selectedDetailLabel } = resume;
  return (
    <div className='body-box'>
      <div className='resume'>
        <h2 className='resume-title'>Résumé de la demande</h2>
        <div className='resume-details'>
          {showMesureResume && <h3 className='resume-detail'>{selectedMesureLabel}</h3>}
          {showOperationBancaireResume && <h3 className='resume-detail'>{selectedOperationBancaireLabel}</h3>}
          {showDetailResume && <h3 className='resume-detail'>{selectedDetailLabel}</h3>}
        </div>
      </div>
    </div>
  )
}

export default Resume;
