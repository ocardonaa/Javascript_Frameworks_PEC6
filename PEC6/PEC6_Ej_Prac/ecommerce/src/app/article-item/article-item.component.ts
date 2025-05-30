import { Component, Input } from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent {

  @Input()

  public article: Article;
  public articleClasses;
  public priceClasses;

  constructor(private articleService: ArticleService) {

  }

  onChangeQuantity(event: Event, change: number) {
    this.articleService.changeQuantity(this.article.id, change)
      .subscribe((article) => this.article.quantityInCart = change);
  }
}