import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MongoDbComponent } from '@components/mongo-db/mongo-db.component';

@Component({
  selector: 'app-tabs',
  imports: [MatTabsModule, MongoDbComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent {}
