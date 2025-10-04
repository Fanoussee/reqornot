import { assoc, assocPath, compose, path } from "ramda";
import { getDetailsByOperationBancaire, getSelectedOperationBancaireLabel } from "../lib/mesuresReducerHelper";

export const updateSelectedOperationBancaire = (state, action) => {
  const selectedOperationBancaire = path(['data', 'operationBancaire'])(action);
  const selectedOperationBancaireLabel = getSelectedOperationBancaireLabel(selectedOperationBancaire)(state);
  const details = getDetailsByOperationBancaire(selectedOperationBancaire)(state);
  return compose(
    assoc('showOperationBancaireResume', true),
    assoc('showMenuDetails', true),
    assoc('showDetails', true),
    assoc('showOperationsBancaires', false),
    assoc('details', details),
    assocPath(['resume', 'selectedOperationBancaireLabel'], selectedOperationBancaireLabel)
  )(state);
}

export const resetOperationBancaire = compose(
  assoc('showDetailResume', false),
  assoc('showOperationBancaireResume', false),
  assoc('showMenuResultat', false),
  assoc('showMenuDetails', false),
  assoc('showMenuOperationsBancaires', true),
  assoc('showResultat', false),
  assoc('showDetails', false),
  assoc('showOperationsBancaires', true),
  assoc('showMesures', false),
  assoc('resultat', {}),
  assoc('details', []),
  assocPath(['resume', 'selectedDetailLabel'], ''),
  assocPath(['resume', 'selectedOperationBancaireLabel'], '')
);