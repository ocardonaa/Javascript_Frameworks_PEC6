import { Injectable } from '@angular/core';
import { Article } from './model/article';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Article[];

  constructor() {
    this.articles = [
      new Article('Football Ball', 'https://media.istockphoto.com/id/91712739/es/foto/pelota-de-f%C3%BAtbol.jpg?s=612x612&w=0&k=20&c=YTrM0cjnsDMBagE47GTiHxDtE00Mb3v27jvD_yyxyfk=', 10, true, 1),
      new Article('Basketball Ball', 'https://http2.mlstatic.com/D_NQ_NP_756138-MLA75912369814_042024-O.webp', 8, false, 0),
      new Article('Volleyball Ball', 'https://media.istockphoto.com/id/145922285/es/foto/aislado-de-voleibol.jpg?s=612x612&w=0&k=20&c=y5zSWmKW1UWurYKOfkl9Do259c6GexK-tl0SLJjwXDU=', 9, true, 1)
    ]
  }

  getArticles(): Observable<Article[]> {
    return of(this.articles);
  }

  createArticle(article: Article): Observable<Article>{
    let foundArticle = this.articles.find(each => each.name === article.name);
    if (foundArticle) {
      return of(false);
    }
    this.articles.push(article);
    console.log(this.articles);
    return of(true);
  }

  changeQuantity(nameArticle: string, units: number): Observable<any> {
    let foundArticle = this.articles.find(each => each.name === nameArticle);
    if (foundArticle) {
      foundArticle.quantityInCart = units;
      if(foundArticle.quantityInCart < 0) {
        foundArticle.quantityInCart = 0;
      }
      return of(true);
    }
    else {
      return of(false);
    }
  }
}
