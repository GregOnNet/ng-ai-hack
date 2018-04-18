import { Injectable } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { FaceDataService } from '../cognitive-services/face-data.service';
import { IEmotionScore } from '../cognitive-services/models/face.models';

export interface IFightResult {
  winnerIndex?: number;
  errorMessage?: string;
}

@Injectable()
export class GameLogicService {
  constructor(private faceService: FaceDataService) {}

  public evaluate(image: WebcamImage): Promise<IFightResult> {
    const rawImage = this.base64ToArrayBuffer(image.imageAsBase64);

    return this.faceService.detectEmotion(rawImage).then(res => {
      // check if the number of faces is correct
      if (res.length !== 2) {
        return {
          errorMessage: 'Please make sure both faces are visible.'
        };
      }

      const players = res.sort(x => x.faceRectangle.left);

      const player1 = players[0].faceAttributes.emotion;
      const player2 = players[1].faceAttributes.emotion;

      return this.evaluateEmotion(player1, player2);
    });
  }

  private evaluateEmotion(
    player1: IEmotionScore,
    player2: IEmotionScore
  ): IFightResult {

    const right = findEmotion(player1);
    const left = findEmotion(player2);

    return chooseWinner(left, right);
  }

  private base64ToArrayBuffer(base64: string): ArrayBuffer {
    const binary_string = window.atob(base64);
    const len = binary_string.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer as ArrayBuffer;
  }
}

export enum RankedEmotion {
  happiness,
  anger,
  contempt,
  disgust,
  fear,
  neutral,
  sadness,
  surprise
}

export function chooseWinner(
  emotionOne: RankedEmotion,
  emotionTwo: RankedEmotion
): IFightResult {
  if (emotionOne === emotionTwo) {
    return { errorMessage: 'Draw! Play again! :-)' };
  }

  return emotionOne < emotionTwo ? { winnerIndex: 0 } : { winnerIndex: 1 };
}

export function findEmotion(emotion: IEmotionScore): RankedEmotion {
  const found = Object.keys(emotion)
    .map(key => ({ emotion: key, score: emotion[key] }))
    .reduce((prev, current) => (prev.score > current.score ? prev : current));

  return RankedEmotion[found.emotion];
}
