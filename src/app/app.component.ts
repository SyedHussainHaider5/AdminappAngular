import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'adminapp';
  constructor(public _dataService: DataService){}

  data = this._dataService.data;


  // data = [
  //   {
  //     image:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMGfPMzhmkBOmjVMX1hHQ9d8AK2GU8jOGNA&usqp=CAU',
  //       text: 'Dynamic text'
  //   },
  //   {
  //     image:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMGfPMzhmkBOmjVMX1hHQ9d8AK2GU8jOGNA&usqp=CAU',
  //       text: 'Dynamic text'
  //   },
  //   {
  //     image:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMGfPMzhmkBOmjVMX1hHQ9d8AK2GU8jOGNA&usqp=CAU',
  //       text: 'Dynamic text'
  //   },
  // ];
}
