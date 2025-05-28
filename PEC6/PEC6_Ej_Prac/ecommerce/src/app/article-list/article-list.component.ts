import { Component } from '@angular/core';
import { Article } from '../model/article';
import { ArticleQuantityChange } from '../model/ArticleQuantityChange';

@Component({
  selector: 'app-article-list',
  template: `
            <div class="container">
                <app-article-item (emitQuantityChange)='onRecievedData($event)' *ngFor="let article of articles" [article]="article"></app-article-item>
            </div>
            `,
  styles: [
    `
            * {
              box-sizing: border-box;
            }

            .container {
              display: flex;
              flex-direction: column;
            }
          `
  ]
})
export class ArticleListComponent {

  recievedQuantityChange: ArticleQuantityChange;

  onRecievedData(data: ArticleQuantityChange) {
    this.recievedQuantityChange = data;
    this.recievedQuantityChange.article.quantityInCart = this.recievedQuantityChange.units < 1 ? 0 : this.recievedQuantityChange.units;
    console.log(this.recievedQuantityChange);
  }

  articles: Article[] = [
    new Article('Football Ball', 'https://media.istockphoto.com/id/91712739/es/foto/pelota-de-f%C3%BAtbol.jpg?s=612x612&w=0&k=20&c=YTrM0cjnsDMBagE47GTiHxDtE00Mb3v27jvD_yyxyfk=', 10, true, 1),
    new Article('Basketball Ball', 'https://http2.mlstatic.com/D_NQ_NP_756138-MLA75912369814_042024-O.webp', 8, false, 0),
    new Article('Volleyball Ball', 'https://media.istockphoto.com/id/145922285/es/foto/aislado-de-voleibol.jpg?s=612x612&w=0&k=20&c=y5zSWmKW1UWurYKOfkl9Do259c6GexK-tl0SLJjwXDU=', 9, true, 1)
  ]
}