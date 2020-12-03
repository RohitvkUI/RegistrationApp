import { Item } from './item.model';

export class ItemService {
  private items: Item[] = [
    new Item('shoe', 'nike', 24.5, 'nike shoe'),
    new Item('shoe', 'nike', 24.5, 'nike shoe'),
    new Item('shoe', 'nike', 24.5, 'nike shoe'),
    new Item('tops', 'gap', 24.5, 'gap tops'),
    new Item('tops', 'gap', 24.5, 'gap tops'),
    new Item('tops', 'macys', 24.5, 'gap tops'),
    new Item('belts', 'macys', 24.5, 'nike shoe'),
    new Item('belts', 'macys', 24.5, 'nike shoe'),
    new Item('belts', 'macys', 24.5, 'nike shoe'),
  ];
  getItemsList() {
    return this.items.slice();
  }
}
