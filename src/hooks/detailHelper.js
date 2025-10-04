import { assoc, assocPath, compose, path } from "ramda";
import { getResultat, getSelectedDetailLabel } from "../lib/mesuresReducerHelper";

export const updateSelectedDetail = (state, action) => {
  const selectedDetail = path(['data', 'detail'])(action);
  const selectedDetailLabel = getSelectedDetailLabel(selectedDetail)(state);
  const resultat = getResultat(selectedDetail)(state);
  return compose(
    assoc('showDetailResume', true),
    assoc('showMenuResultat', true),
    assoc('showResultat', true),
    assoc('showDetails', false),
    assoc('resultat', resultat),
    assocPath(['resume', 'selectedDetailLabel'], selectedDetailLabel)
  )(state);
};

export const resetDetail = compose(
  assoc('showDetailResume', false),
  assoc('showMenuResultat', false),
  assoc('showMenuDetails', true),
  assoc('showMenuOperationsBancaires', true),
  assoc('showResultat', false),
  assoc('showDetails', true),
  assoc('showOperationsBancaires', false),
  assoc('showMesures', false),
  assoc('resultat', {}),
  assocPath(['resume', 'selectedDetailLabel'], '')
);