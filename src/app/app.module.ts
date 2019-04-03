import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeDetectionStrategyComponent } from './change-detection-strategy/change-detection-strategy.component';
import { OnPushComponent } from './on-push/on-push.component';
import { DetectChangesComponent } from './detect-changes/detect-changes.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeDetectionStrategyComponent,
    OnPushComponent,
    DetectChangesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
