import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from './item.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
  providers: [ItemService],
})
export class ItemsListComponent implements OnInit {
  items: Item[];
  category: string = 'tops';
  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.items = this.itemService.getItemsList();
  }
}
