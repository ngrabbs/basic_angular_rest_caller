import { Component } from '@angular/core';
import { DemoService } from './demo.service';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'demo-app',
  template:`
  <ul>
    <li>Temp: {{date_temp?.temp}}</li>
    <li>Date: {{date_temp?.date}}</li>
  </ul>
  `
})
export class AppComponent {
 
  public date_temp;
 
  constructor(private _demoService: DemoService) { }

  ngOnInit() {
    setInterval(() => {
      this.getDateTemp();
    },  10000);
  }
 
  getDateTemp() {
    this._demoService.getDateTemp().subscribe(
      data => { this.date_temp = data},
      err => console.error(err),
      () => console.log('done gathering data')
    );
  }
}
