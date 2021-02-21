import timeStamp from '../timeNow';
import bearCardPrint from '../../components/bearCardPrint';
import bears from './bearData';

const catchFish = (e) => {
  const targetType = e.target.type;
  const targetCatchId = Math.floor(e.target.id.replace('catch', ''));
  // const targetId = e.target.id;
  if (targetType === 'button') {
    bears[targetCatchId].fishCaught.amount += 1;
    bears[targetCatchId].fishCaught.time = timeStamp();
    bearCardPrint(bears);
  }
};
const attemptFish = (e) => {
  const targetType = e.target.type;
  const targetAttemptId = Math.floor(e.target.id.replace('attempt', ''));
  // const targetId = e.target.id;
  if (targetType === 'button') {
    bears[targetAttemptId].catchAttempts.amount += 1;
    bears[targetAttemptId].catchAttempts.time = timeStamp();
    bearCardPrint(bears);
  }
};

export { attemptFish, catchFish };
