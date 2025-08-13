import { Component, signal } from '@angular/core';
import { PriceFormatPipe } from './pipes/price-format-pipe';
import { ProductList } from './products/product-list/product-list';
import { Highlight } from './directives/highlight';

@Component({
  selector: 'app-root',
  imports: [PriceFormatPipe,Highlight,ProductList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Day20_CaseStudy');
}
