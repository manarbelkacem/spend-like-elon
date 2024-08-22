import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ItemType} from "./item.type";
import {CurrencyPipe} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CurrencyPipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  initialWealth:number=236_500_000_000;
  items:ItemType[] = [
      {
        "name": "Pepsi",
        "price": 1,
        "image": "pepsi.png",
        "soldCount": 0
      },
      {
        "name": "Big Mac",
        "price": 5.99,
        "image": "big_mac.png",
        "soldCount": 0
      },
      {
        "name": "Movie Ticket",
        "price": 12,
        "image": "ticket.png",
        "soldCount": 0
      },
      {
        "name": "Crocs",
        "price": 19.99,
        "image": "crocs.jpeg",
        "soldCount": 0
      },
      {
        "name": "Sunglasses",
        "price": 129,
        "image": "sunglasses.jpg",
        "soldCount": 0
      },
      {
        "name": "Airpods",
        "price": 249,
        "image": "airpods.jpeg",
        "soldCount": 0
      },
      {
        "name": "Drone",
        "price": 479,
        "image": "drone.png",
        "soldCount": 0
      },
      {
        "name": "iPhone 15 Pro Max",
        "price": 1_249,
        "image": "iphone.png",
        "soldCount": 0
      },
      {
        "name": "Gucci handbag",
        "price": 4_000,
        "image": "handbag.png",
        "soldCount": 0
      },
      {
        "name": "Hot Tub",
        "price": 6_000,
        "image": "hot-tub.jpg",
        "soldCount": 0
      },
      {
        "name": "Diamond Ring",
        "price": 8_500,
        "image": "diamond-ring.png",
        "soldCount": 0
      },
      {
        "name": "Rolex Submariner",
        "price": 11_000,
        "image": "rolex.jpeg",
        "soldCount": 0
      },
      {
        "name": "Tesla",
        "price": 75_000,
        "image": "tesla.jpg",
        "soldCount": 0
      },
      {
        "name": "Ferrari",
        "price": 250_000,
        "image": "ferrari.jpg",
        "soldCount": 0
      },
      {
        "name": "NY City Apartment",
        "price": 800_000,
        "image": "apartment.png",
        "soldCount": 0
      },
      {
        "name": "Mansion",
        "price": 2_500_000,
        "image": "mansion.jpg",
        "soldCount": 0
      },
      {
        "name": "M1 Abrams",
        "price": 10_000_000,
        "image": "m1-abrams.jpg",
        "soldCount": 0
      },
      {
        "name": "F-35 Fighter Jet",
        "price": 109_000_000,
        "image": "f35-jet.jpg",
        "soldCount": 0
      },
      {
        "name": "Boeing 787 Jet",
        "price": 320_000_000,
        "image": "787.jpg",
        "soldCount": 0
      },
      {
        "name": "Luxury Superyacht",
        "price": 750_000_000,
        "image": "yacht.jpeg",
        "soldCount": 0
      },
      {
        "name": "Art Masterpieces",
        "price": 800_000_000,
        "image": "mona-lisa.jpg",
        "soldCount": 0
      },
      {
        "name": "Skyscraper",
        "price": 1_000_000_000,
        "image": "skyscraper.jpg",
        "soldCount": 0
      },
      {
        "name": "Private Island",
        "price": 1_200_000_000,
        "image": "island.jpg",
        "soldCount": 0
      },
      {
        "name": "Football Team",
        "price": 6_850_000_000,
        "image": "football-team.jpeg",
        "soldCount": 0
      },
      {
        "name": "Give every human 1$",
        "price": 8_200_000_000,
        "image": "dollar.jpeg",
        "soldCount": 0
      },
      {
        "name": "Media Company",
        "price": 10_000_000_000,
        "image": "media-company.png",
        "soldCount": 0
      },
      {
        "name": "Build a Disney World",
        "price": 17_000_000_000,
        "image": "disney.png",
        "soldCount": 0
      },
    ]
  purchase(index:number){
      this.items[index].soldCount++;
  }
  sell(index:number){
    this.items[index].soldCount--;
  }
  getTotalSpending():number{
    let totalSpending=0;

    for (let i = 0; i < this.items.length; i++) {
      const item=this.items[i];
      const itemCost=item.price*item.soldCount;
      totalSpending+=itemCost;
    }
    return totalSpending;
  }

  getCurrentWealth():number{
    return this.initialWealth - this.getTotalSpending();
  }
}
