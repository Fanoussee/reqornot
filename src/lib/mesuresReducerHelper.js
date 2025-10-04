import { compose, find, prop, propEq } from "ramda";

export const getMesure = (mesure) => find(propEq(mesure, 'shortLabel'));

export const getOperationsBancairesByMesure = (mesure) => compose(
  prop('operationsBancaires'),
  getMesure(mesure)
);

export const getSelectedMesureLabel = (mesure) => compose(
  prop('longLabel'),
  getMesure(mesure)
);

export const getOperationBancaire = (operationBancaire) => compose(
  find(propEq(operationBancaire, 'shortLabel')),
  prop('operationsBancaires')
);

export const getSelectedOperationBancaireLabel = (operationBancaire) => compose(
  prop('longLabel'),
  getOperationBancaire(operationBancaire)
);

export const getDetailsByOperationBancaire = (operationBancaire) =>  compose(
  prop('details'),
  getOperationBancaire(operationBancaire)
);

export const getSelectedDetail = (detail) => compose(
  find(propEq(detail, 'shortLabel')),
  prop('details')
);

export const getSelectedDetailLabel = (detail) => compose(
  prop('longLabel'),
  getSelectedDetail(detail)
);

export const getResultat = (detail) => compose(
  prop('resultat'),
  getSelectedDetail(detail)
);
