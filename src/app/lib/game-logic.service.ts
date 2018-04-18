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

  constructor(private faceService: FaceDataService) { }

  public evaluate(image: WebcamImage): Promise<IFightResult> {
    const rawImage = this.base64ToArrayBuffer(image.imageAsBase64);

    return this.faceService.detectEmotion(rawImage)
      .then(res => {

        // check if the number of faces is correct
        if (res.length !== 2) {
          return {
            errorMessage: 'Please make sure both faces are visible.'
          };
        }

        const players = res.sort((x) => x.faceRectangle.left);

        const player1 = players[0].faceAttributes.emotion;
        const player2 = players[1].faceAttributes.emotion;

        return this.evaluateEmotion(player1, player2);
      });
  }

  private evaluateEmotion(player1: IEmotionScore, player2: IEmotionScore): IFightResult {
    // ToDo Add logic
    debugger;
    return {};
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
