import { useReducer } from "react";
import { prop } from 'ramda';
import mesureReducer, { initialState } from "./mesuresReducer";

const useMesure = () => {

  const [state, dispatch] = useReducer(mesureReducer, initialState);

  const mesures = prop('mesures')(state);
  const showMesures = prop('showMesures')(state);
  const showMenuMesures = prop('showMenuMesures')(state);

  const operationsBancaires = prop('operationsBancaires')(state);
  const showOperationsBancaires = prop('showOperationsBancaires')(state);
  const showMenuOperationsBancaires = prop('showMenuOperationsBancaires')(state);

  const details = prop('details', state);
  const showDetails = prop('showDetails', state);
  const showMenuDetails = prop('showMenuDetails', state);

  const resultat = prop('resultat', state);
  const showResultat = prop('showResultat', state);
  const showMenuResultat = prop('showMenuResultat', state);

  const resume = prop('resume', state);

  const showMesureResume = prop('showMesureResume', state);
  const showOperationBancaireResume = prop('showOperationBancaireResume', state);
  const showDetailResume = prop('showDetailResume', state);

  return {
    mesureHandler: {
      dispatch,
      mesures,
      showMesures,
      showMenuMesures,
      showMesureResume,
      operationsBancaires,
      showOperationsBancaires,
      showMenuOperationsBancaires,
      showOperationBancaireResume,
      details,
      showDetails,
      showMenuDetails,
      showDetailResume,
      resultat,
      showResultat,
      showMenuResultat,
      resume
    }
  }
};

export default useMesure;
