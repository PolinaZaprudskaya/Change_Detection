import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent implements OnInit {

  @Input() value: number ;
  counter: number = 0;
  constructor() {
  }

  ngOnInit() {
    setInterval(()=>{
      this.counter ++;
    }, 30000)
  }

}
