import { compose, cond, equals, prop } from "ramda";
import EMesureAction from "../lib/EMesureAction";
import { mesures } from "../bdd/mesures";
import { resetMesure, updateSelectedMesure } from "./mesureHelper";
import { resetOperationBancaire, updateSelectedOperationBancaire } from "./operationBancaireHelper";
import { resetDetail, updateSelectedDetail } from "./detailHelper";

export const initialState = {
  showMesures: true,
  showOperationsBancaires: false,
  showDetails: false,
  showResultat: false,
  mesures,
  operationsBancaires: [],
  details: [],
  resultat: {},
  resume: {
    selectedMesureLabel: '',
    selectedOperationBancaireLabel: '',
    selectedDetailLabel: ''
  },
  showMenuMesures: true,
  showMenuOperationsBancaires: false,
  showMenuDetails: false,
  showMenuResultat: false,
  showMesureResume: false,
  showOperationBancaireResume: false,
  showDetailResume: false
};

const mesureReducer = (state, action) => compose(
  cond([
    [equals(EMesureAction.UPDATE_SELECTED_MESURE), () => updateSelectedMesure(state, action)],
    [equals(EMesureAction.UPDATE_SELECTED_OPERATION_BANCAIRE), () => updateSelectedOperationBancaire(state, action)],
    [equals(EMesureAction.UPDATE_SELECTED_DETAIL), () => updateSelectedDetail(state, action)],
    [equals(EMesureAction.RESET_MESURE), () => resetMesure(state)],
    [equals(EMesureAction.RESET_OPERATION_BANCAIRE), () => resetOperationBancaire(state)],
    [equals(EMesureAction.RESET_DETAIL), () => resetDetail(state)]
  ]),
  prop('type')
)(action);

export default mesureReducer;
