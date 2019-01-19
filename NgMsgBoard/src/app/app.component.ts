import { Component } from '@angular/core';
import { YourMessage } from './your-message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  yourName = '';
  yourMsg = '';
  MsgsObj: YourMessage[] = [];
  AddMsg(): void{
    const Msg = new YourMessage(this.yourName, this.yourMsg);
    this.MsgsObj.push(Msg);
    this.yourMsg = '';
  }
}
