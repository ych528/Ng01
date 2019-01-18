import { Component } from '@angular/core';
import {SampleDate} from './app.ExtDate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Allen';
  drinkList = [
    {
      'Attractions' : '101 Tower',
      'AtCity': 'Taipei'
    },
    {
      'Attractions' : 'Fort Zeelandia',
      'AtCity': 'Tainan'
    },
    {
      'Attractions' : 'Lukang',
      'AtCity': 'Changhua'
    },
  ];
  sDate = new SampleDate();
}
