import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  data = [
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMGfPMzhmkBOmjVMX1hHQ9d8AK2GU8jOGNA&usqp=CAU',
        text: 'Dynamic textyttttttttttttttttttttt'
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMGfPMzhmkBOmjVMX1hHQ9d8AK2GU8jOGNA&usqp=CAU',
        text: 'Dynamic text'
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMGfPMzhmkBOmjVMX1hHQ9d8AK2GU8jOGNA&usqp=CAU',
        text: 'Dynamic text'
    },
  ];
}