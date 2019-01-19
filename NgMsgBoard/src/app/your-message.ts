export class YourMessage {
  yName: string;
  yMsg: string;
  lTime: Date;
  constructor(inName: string, inMsg: string) {
    this.yName = inName;
    this.yMsg = inMsg;
    this.lTime = new Date();
  }
}
