import { IEmotionScore } from '../../cognitive-services/models/face.models';
import { IFightResult } from '../game-logic.service';

describe('When a emotion is given', () => {
  const emotion: IEmotionScore = {
    contempt: 0.4,
    disgust: 0.3,
    fear: 0.1,
    happiness: 0.3,
    neutral: 0.2,
    sadness: 0.01,
    surprise: 0.12,
    anger: 0.2
  };

  it('should choose the emotion with the highest score', () => {
    const result = findEmotion(emotion);
    expect(result).toBe(1);
  });
});

export enum RankedEmotion {
  anger,
  contempt,
  disgust,
  fear,
  happiness,
  neutral,
  sadness,
  surprise
}

describe('Compare two different emotions', () => {
  const expectedLooser = RankedEmotion.happiness;
  const expectedWinner = RankedEmotion.anger;

  it('should yield the player with the best emotion', () => {
    const winner = chooseWinner(expectedLooser, expectedWinner);
    expect(winner.winnerIndex).toBe(1);
  });
});

describe('Compare two equal emotions', () => {
  const happinessOne = RankedEmotion.happiness;
  const happinessTwo = RankedEmotion.happiness;

  it('should yield a message', () => {
    const winner = chooseWinner(happinessOne, happinessTwo);
    expect(winner.errorMessage).toBe('Draw! Play again! :-)');
  });
});

export function chooseWinner(emotionOne: RankedEmotion, emotionTwo: RankedEmotion): IFightResult {
  if (emotionOne === emotionTwo) {
    return { errorMessage: 'Draw! Play again! :-)' };
  }

  return emotionOne < emotionTwo
    ? { winnerIndex: 0 }
    : { winnerIndex: 1 };
}

export function findEmotion(emotion: IEmotionScore): RankedEmotion {
  const found = Object.keys(emotion)
    .map(key => ({ emotion: key, score: emotion[key] }))
    .reduce((prev, current) => (prev.score > current.score) ? prev : current);

  return RankedEmotion[found.emotion];
}
