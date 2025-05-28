import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Article } from '../model/article';
import { ArticleQuantityChange } from '../model/ArticleQuantityChange';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleItemComponent implements OnInit {

  public articleClasses;
  public priceClasses;

  @Input() article: Article;
  @Output() emitQuantityChange = new EventEmitter<ArticleQuantityChange>();

  emitData(quantity: number) {
    const data: ArticleQuantityChange = {
      article: this.article,
      units: this.article.quantityInCart + quantity
    };
    this.emitQuantityChange.emit(data);
  }
  constructor() {

  }

  ngOnInit() {
    this.articleClasses = {
      'available': this.article.isOnSale,
      'unavailable': !this.article.isOnSale
    }
    this.priceClasses = {
      'available-price': this.article.isOnSale,
      'unavailable-price': !this.article.isOnSale
    }
  }
}