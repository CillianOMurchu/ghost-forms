import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TabsComponent } from './components/tabs/tabs.component';

@Component({
  selector: 'app-root',
  imports: [MatSlideToggleModule, TabsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ghost-forms';
}
