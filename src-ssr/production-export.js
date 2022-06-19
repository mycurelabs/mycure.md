import * as functions from 'firebase-functions';
import { ssrProductionExport } from 'quasar/wrappers';

export default ssrProductionExport(({ ssrHandler }) => {
  return {
    hippocradesOrgQuasarSSRHandler: functions.https.onRequest(ssrHandler),
  };
});
