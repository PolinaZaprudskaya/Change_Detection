import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-change-detection-strategy',
  templateUrl: './change-detection-strategy.component.html',
  styleUrls: ['./change-detection-strategy.component.sass'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChangeDetectionStrategyComponent implements OnInit {
  @Input() fromParent: number ;
  counter: number = 0;
  constructor() { }

  ngOnInit() {
    setInterval(()=>{
      this.counter++;
    }, 1000)
  }

}
