export class SampleDate{
  public currentDate: Date = new Date();
  public tomorrowDate: Date;

  constructor() {
    this.tomorrowDate = new Date();
    this.tomorrowDate.setDate(this.tomorrowDate.getDate() + 1);
  }

  AddDays(inDays: number) {
    const TempDate: Date = new Date();
    TempDate.setDate(TempDate.getDate() + inDays);
    return TempDate;
  }
}
