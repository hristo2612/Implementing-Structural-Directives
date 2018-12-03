import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UnlessDirective } from './directives/unless.directive';
import { IfasDirective } from './directives/ifas.directive';
import { IfSimpleComponent } from './components/if-simple/if-simple.component';
import { IfElseComponent } from './components/if-else/if-else.component';
import { IfThenElseComponent } from './components/if-then-else/if-then-else.component';
import { IfAsComponent } from './components/if-as/if-as.component';

@NgModule({
  declarations: [
    AppComponent,
    UnlessDirective,
    IfasDirective,
    IfSimpleComponent,
    IfElseComponent,
    IfThenElseComponent,
    IfAsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
