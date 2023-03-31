export class CD {
  id!: number;
  title!: string;
  author!: string;
  price!: number;
  thumbnail!: string;
  dateDeSortie!: Date;
  quantity!: number;
  onSale?: boolean;

  constructor(title: string, author: string, price: number, image: string, dateDeSortie: Date, quantity: number, onSale: boolean) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.thumbnail = image;
    this.dateDeSortie = dateDeSortie;
    this.quantity = quantity;
    if (onSale != undefined) {
      this.onSale = onSale;
    }
  }



}
