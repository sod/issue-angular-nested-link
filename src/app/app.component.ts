import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a href="/?source=outer" class="outer">Outer Link
      <br>
      <a href="/?source=inner" class="inner" (click)="$event.stopPropagation()">Inner Link</a>

      <div>content behind inner, inside outer</div>
    </a>
  `,
  styles: [
    `
      .outer, .inner {
        display: block;
        border: 1px solid transparent;
        background-color: #99000099;
      }

      .inner {
        margin: 2rem;
        border-color: #99000012;
        background-color: #99000099;
      }

      .outer {
        border-color: #009900;
        background-color: #00990099;
      }
`
  ]
})
export class AppComponent {
  title = 'issue-angular-nested-link';
}
