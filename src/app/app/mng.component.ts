import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-mng',
  templateUrl: './mng.component.html',
  styleUrls: ['./mng.component.css']
})
export class MngComponent {
  @Input() treelists: any

  itemClick(i) {

    i._open = i._open
    console.log(i)
  }
}
