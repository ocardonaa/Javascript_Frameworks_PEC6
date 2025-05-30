import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../article.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-list',
  template: `
            <div class="container">
                <app-article-item *ngFor="let article of articles$ | async" [article]="article"></app-article-item>
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
export class ArticleListComponent implements OnInit {

  public articles$: Observable<Article[]>;

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articles$ = this.articleService.getArticles();
  }
  
}