import { Item } from './item.model';

export class ItemService {
  private items: Item[] = [
    new Item('shoes', 'nike', 24.5, 'nike shoe'),
    new Item('shoes', 'nike', 24.5, 'nike shoe'),
    new Item('shoes', 'nike', 24.5, 'nike shoe'),
    new Item('tops', 'gap', 24.5, 'gap tops'),
    new Item('tops', 'gap', 24.5, 'gap tops'),
    new Item('tops', 'macys', 24.5, 'gap tops'),
    new Item('electronics', 'laptop', 24.5, 'nike shoe'),
    new Item('electronics', 'iphone', 24.5, 'nike shoe'),
    new Item('electronics', 'samsung', 24.5, 'nike shoe'),
  ];
  getItemsList() {
    return this.items.slice();
  }
}
