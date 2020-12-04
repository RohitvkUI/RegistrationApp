import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from './item.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
  providers: [ItemService],
})
export class ItemsListComponent implements OnInit, OnChanges {
  items: Item[];
  @Input() fs: string;
  category: string = 'tops';
  constructor(private itemService: ItemService) {}
  ngOnChanges() {
    this.items = this.itemService
      .getItemsList()
      .filter((item) => item.category === this.fs);
    console.log('on changes', this.fs);
  }
  ngOnInit() {
    this.items = this.itemService
      .getItemsList()
      .filter((item) => item.category === this.category);
  }
}
