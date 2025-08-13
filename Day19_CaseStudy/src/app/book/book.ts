import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.html',
  styleUrl: './book.css'
})
export class Book {
  productName = 'IKIGAI';
  productPrice = 40;
  addedToCart = false;
  addToCart() {
    this.addedToCart = true;
}

}
