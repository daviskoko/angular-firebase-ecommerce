import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";

import { Item, Image, Category } from "./index";

@Injectable()
export class ItemService {

  private header = new Headers({'Content-Type':'application/json'});
  private firbaseApi = 'https://apfem-c20fc.firebaseio.com/';
  
  // Item sample data
  private items: Item[] = [
    new Item('angular-t-shirt', 'Angular T-Shirt', new Category('t-shirt', 'T-Shirts'), 120, 135, 'In Stock', 'Lorem ipsum dolor sit amet, no agam populo apeirian pri, ea eirmod scaevola voluptatibus per. No est maluisset sadipscing, duo soluta dignissim dissentiet ei, malis possim posidonium ad has. Dico error utamur an est, ex tantas expetendis sit. Convenire disputando repudiandae nam no, laudem malorum quaeque sit id.',
    [
      new Image('http://devstickers.com/assets/img/pro/tee/8ki7_mhoodiez.png'),
      new Image('http://devstickers.com/assets/img/pro/tee/lrj4_mens.png')
    ]),
    new Item('gulp-sass-cup', 'Gulp & Sass Cup', new Category('cup', 'Cups'), 90, 105, 'Pre-Order', 'Lorem ipsum dolor sit amet, no agam populo apeirian pri, ea eirmod scaevola voluptatibus per. No est maluisset sadipscing, duo soluta dignissim dissentiet ei, malis possim posidonium ad has. Dico error utamur an est, ex tantas expetendis sit. Convenire disputando repudiandae nam no, laudem malorum quaeque sit id.',
    [
      new Image('http://www.joel-chrabie.com/res/js/gulpsass.png'),
      new Image('http://vesparny.github.io/angular-kickstart/assets/images/gulp-logo.png')
    ]),
    new Item('google-cup', 'Google Cup', new Category('cup', 'Cups'), 96, 117, 'In Stock', 'Lorem ipsum dolor sit amet, no agam populo apeirian pri, ea eirmod scaevola voluptatibus per. No est maluisset sadipscing, duo soluta dignissim dissentiet ei, malis possim posidonium ad has. Dico error utamur an est, ex tantas expetendis sit. Convenire disputando repudiandae nam no, laudem malorum quaeque sit id.',
    [
      new Image('https://images-na.ssl-images-amazon.com/images/I/71aEJmSmIYL._SX355_.jpg'),
      new Image('http://www.mypeyronies.com/image-files/hourglass-penis-indentations.jpg')
    ]),
    new Item('female-t-shirts', 'Female T-Shirts(Pink)', new Category('t-shirt', 'T-Shirts'), 90, 108, 'Pre-Order', 'Lorem ipsum dolor sit amet, no agam populo apeirian pri, ea eirmod scaevola voluptatibus per. No est maluisset sadipscing, duo soluta dignissim dissentiet ei, malis possim posidonium ad has. Dico error utamur an est, ex tantas expetendis sit. Convenire disputando repudiandae nam no, laudem malorum quaeque sit id.',
    [
      new Image('https://www.mulboo.com.au/wp-content/uploads/2013/04/Ladies-Pink-T-shirt.png'),
      new Image('https://shop.googlemerchandisestore.com/store/20160512512/assets/items/images/GGOEGAAX0339.jpg')
    ]),
    new Item('female-google-t-shirts-black', 'White Female T-Shirts', new Category('t-shirt', 'T-Shirts'), 90, 108, 'Pre-Order', 'Lorem ipsum dolor sit amet, no agam populo apeirian pri, ea eirmod scaevola voluptatibus per. No est maluisset sadipscing, duo soluta dignissim dissentiet ei, malis possim posidonium ad has. Dico error utamur an est, ex tantas expetendis sit. Convenire disputando repudiandae nam no, laudem malorum quaeque sit id.',
    [
      new Image('http://www.titanui.com/wp-content/uploads/2013/05/18/Wemen-T-Shirt-Vector-Mockup.jpg'),
      new Image('https://gcontent.robertsonmarketing.com/store/20160512512/assets/themes/theme1_en/images/home/jun17/hero3_youtube.png')
    ]),
    new Item('google-t-shirts-white', 'Google T-Shirts(White)', new Category('t-shirt', 'T-Shirts'), 30, 68, 'Pre-Order', 'Lorem ipsum dolor sit amet, no agam populo apeirian pri, ea eirmod scaevola voluptatibus per. No est maluisset sadipscing, duo soluta dignissim dissentiet ei, malis possim posidonium ad has. Dico error utamur an est, ex tantas expetendis sit. Convenire disputando repudiandae nam no, laudem malorum quaeque sit id.',
    [
      new Image('https://ae01.alicdn.com/kf/HTB1Ep4kIFXXXXXIaXXXq6xXFXXXn/2017-Newest-Mans-T-Shirt-Simple-Summer-font-b-Logo-b-font-font-b-Google-b.jpg'),
      new Image('https://76.my/Malaysia/google-logo-t-shirt-onlinepasar-1506-05-OnlinePasar@21.jpg')
    ])
  ];

  constructor( private http: Http ) { }

  // Get items from the API
  getItems(){
    return this.http.get(this.firbaseApi + 'items.json')
                    .map((response: Response) => response.json() as Item[]);
  }

  // Get an item by id
  getItem(id: number){
    return this.items[id];
  }

  // Store items to the your DB
  storeItem() {    
    let body = JSON.stringify(this.items);
    return this.http.put(this.firbaseApi + 'items.json', body, {headers: this.header});
  }

  // Handle all errors if any
  private handleError (error: Response | any) {
    // use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
        errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
