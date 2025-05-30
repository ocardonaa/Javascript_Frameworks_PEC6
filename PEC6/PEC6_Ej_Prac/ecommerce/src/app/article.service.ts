import { Injectable } from '@angular/core';
import { Article } from './model/article';
import { Observable, of as ObservableOf, throwError as ObservableThrow } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  //private articles: Article[];

  constructor(private http: HttpClient) {
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('api/articles');
  }

  createArticle(article: any): Observable<any> {
    /*
    let foundArticle = this.articles.find(each => each.name === article.name);
    if (foundArticle) {
      console.log('Article already exists');
      return ObservableThrow({msg: 'Article already exists'});
    }
    const newArticle = new Article(article.name, article.url, article.price, article.onSale, article.quantityInCart);
    this.articles.push(newArticle);
    console.log(this.articles);
    console.log('Article created');
    return ObservableOf({msg: 'Article created'});
    */
    const newArticle = new Article(4, article.name, article.url, article.price, article.onSale, article.quantityInCart);
    return this.http.post<Article[]>('api/articles', newArticle);
  }

  changeQuantity(articleID: number, units: number): Observable<Article> {
    /*
    let foundArticle = this.articles.find(each => each.name === nameArticle);
    if (foundArticle) {
      foundArticle.quantityInCart = units;
      if (foundArticle.quantityInCart < 0) {
        foundArticle.quantityInCart = 0;
      }
      return ObservableOf(true);
    }
    else {
      return ObservableThrow({ msg: 'Article not found' });
    }
      */
    return this.http.patch<Article>('/api/article/' + articleID, {
      quantityInCart: units
    })
  }
}
