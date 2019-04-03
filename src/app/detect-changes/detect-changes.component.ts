import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-detect-changes',
  templateUrl: './detect-changes.component.html',
  styleUrls: ['./detect-changes.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetectChangesComponent implements OnInit {

  @Input() value: number ;
  counter: number = 0;

  constructor(private ref: ChangeDetectorRef) {
  }

  ngOnInit() {

    setInterval(()=>{
      this.counter ++;
      this.ref.detectChanges();
    }, 10000);
  }

}
