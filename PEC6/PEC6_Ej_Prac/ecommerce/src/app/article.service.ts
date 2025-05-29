import { Injectable } from '@angular/core';
import { Article } from './model/article';
import { Observable, of as ObservableOf, throwError as ObservableThrow } from 'rxjs';

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
    return ObservableOf(this.articles);
  }

  createArticle(article: Article): Observable<any>{
    let foundArticle = this.articles.find(each => each.name === article.name);
    if (foundArticle) {
      console.log('Article already exists');
      return ObservableThrow({msg: 'Article already exists'});
    }
    this.articles.push(article);
    console.log(this.articles);
    console.log('Article created');
    return ObservableOf({msg: 'Article created'});
  }

  changeQuantity(nameArticle: string, units: number): Observable<any> {
    let foundArticle = this.articles.find(each => each.name === nameArticle);
    if (foundArticle) {
      foundArticle.quantityInCart = units;
      if(foundArticle.quantityInCart < 0) {
        foundArticle.quantityInCart = 0;
      }
      return ObservableOf(true);
    }
    else {
      return ObservableOf(false);
    }
  }
}
