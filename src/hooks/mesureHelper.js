import { assoc, assocPath, path, prop } from "ramda";
import { getOperationsBancairesByMesure, getSelectedMesureLabel } from "../lib/mesuresReducerHelper";
import compose from "ramda/src/compose";

export const updateSelectedMesure = (state, action) => {
  const mesures = prop('mesures', state);
  const selectedMesure = path(['data', 'mesure'])(action);
  const selectedMesureLabel = getSelectedMesureLabel(selectedMesure)(mesures);
  const operationsBancaires = getOperationsBancairesByMesure(selectedMesure)(mesures);
  console.log('operationsBancaires:', JSON.stringify(operationsBancaires, null, 2));
  return compose(
    assoc('showMesureResume', true),
    assoc('showMenuOperationsBancaires', true),
    assoc('showOperationsBancaires', true),
    assoc('showMesures', false),
    assoc('operationsBancaires', operationsBancaires),
    assocPath(['resume', 'selectedMesureLabel'], selectedMesureLabel)
  )(state);
};

export const resetMesure = compose(
  assoc('showDetailResume', false),
  assoc('showOperationBancaireResume', false),
  assoc('showMesureResume', false),
  assoc('showMenuResultat', false),
  assoc('showMenuDetails', false),
  assoc('showMenuOperationsBancaires', false),
  assoc('showResultat', false),
  assoc('showDetails', false),
  assoc('showOperationsBancaires', false),
  assoc('showMesures', true),
  assoc('resultat', {}),
  assoc('details', []),
  assoc('operationsBancaires', []),
  assoc('resume', {})
);