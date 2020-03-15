import {Component} from '@angular/core';
import {lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  randomText: string = lorem.sentence();
  userText = '';

  public handleInput(event): void {
    this.userText = event.target.value;
  }

  public compareInputs(randomLetter: string, enteredLetter: string): string {
    if (!enteredLetter) {
      return 'pending';
    }
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
