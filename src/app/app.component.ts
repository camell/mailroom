import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
config = {
    panels: [
      { name: 'AMERICAS GUEST', description: '' },
      { name: 'WASTED SPACE', description: '' },
      { name: 'SERE', description: '' }
    ]
  };
}


