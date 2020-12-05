import { Output } from '@angular/core';
import { EventEmitter } from 'events';

export class CategoryService {
  featureSelected = new EventEmitter<string>();
}
