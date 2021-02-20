import bearCardPrint from '../../components/bearCardPrint';
import bears from './bearData';

const attemptFish = (e) => {
  const targetType = e.target.type;
  const targetAttemptId = Math.floor(e.target.id.replace('attempt', ''));
  // const targetId = e.target.id;
  if (targetType === 'button') {
    bears[targetAttemptId].catchAttempts += 1;
    bearCardPrint(bears);
  }
};

export default attemptFish;
