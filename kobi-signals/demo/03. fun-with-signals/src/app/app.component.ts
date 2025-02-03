import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { mySignal } from './my-signal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
 // readonly firstSignal = signal(42);
 // readonly secondSignal = signal('Signals');

  readonly firstSignal = mySignal(42);
   readonly secondSignal = mySignal('Signals');


  setSignal() {
    //signal is a function
    // contains other properties
     // sets new value
    this.firstSignal.set(10)
  }
  updateSignal() {
    //
    // like a reducer in react
    // sets new value based on original value
    // takes original state and calculate new one
    // update
    this.firstSignal.update(value => value + 1)
  }

  constructor() {
    console.log('The first signal value is:', this.firstSignal());
    console.log('The second signal value is:', this.secondSignal());

  }
}
