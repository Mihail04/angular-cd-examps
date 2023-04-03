import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {DetachNodeComponent} from './detach-node/detach-node.component';
import {NodeOnPushComponent} from './node-on-push/node-on-push.component';
import {NodeComponent} from './node/node.component';


@NgModule({
  declarations: [
    AppComponent,
    NodeComponent,
    NodeOnPushComponent,
    DetachNodeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
