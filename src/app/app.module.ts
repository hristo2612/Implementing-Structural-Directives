import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UnlessDirective } from './directives/unless.directive';
import { IfDirective } from './directives/if.directive';
import { IfSimpleComponent } from './components/if-simple/if-simple.component';
import { IfElseComponent } from './components/if-else/if-else.component';
import { IfThenElseComponent } from './components/if-then-else/if-then-else.component';
import { IfAsComponent } from './components/if-as/if-as.component';
import { UnlessIfComponent } from './components/unless-if/unless-if.component';

@NgModule({
  declarations: [
    AppComponent,
    UnlessDirective,
    IfSimpleComponent,
    IfElseComponent,
    IfThenElseComponent,
    IfAsComponent,
    UnlessIfComponent,
    IfDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
