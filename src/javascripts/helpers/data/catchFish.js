import bearCardPrint from '../../components/bearCardPrint';
import bears from './bearData';

const catchFish = (e) => {
  const targetType = e.target.type;
  const targetCatchId = Math.floor(e.target.id.replace('catch', ''));
  // const targetId = e.target.id;
  if (targetType === 'button') {
    bears[targetCatchId].fishCaught += 1;
    bearCardPrint(bears);
  }
};

export default catchFish;
