import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Donut } from 'src/app/interfaces/donut';
import { DonutService } from 'src/app/services/donut-service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartTotal:number = 0;
  donut:Donut | any;
  inCart:boolean=false;
  cartItems:Donut[] = [];
  id:number=0;
  totalCalories:number=0;
  totalPrice:number=1;

  constructor(private service:DonutService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      this.getDonutDetails();  
      });
  }

  getDonutDetails(){
    this.service.getDonutDetails(this.id).subscribe((data)=>{
      this.donut = data,
      console.log("In Cart method",data),
      this.addToCart(data);
    });
  }

  addToCart(details:Donut) :void{
    this.inCart = true;
    this.cartItems.push(details);
    console.log("Cart Items", this.cartItems);
  }

  removeDonut(id:number):void{
    console.log("After Deleted Items", this.cartItems);
    if (this.cartItems.length > 0 && id<=this.cartItems.length) {      
      for(let i=0; i < this.cartItems.length ; i++){
        if (i == id ) {
          this.cartItems.splice(id, 1);
        }
      }
    } 
    console.log("After Deleted Items", this.cartItems);
  }

  addCalories(){
    for(var item=1; item<this.cartItems.length; item++){
      this.totalCalories += this.donut.calories;
      console.log("Total Calories value ======", this.totalCalories);
    }    
  }

  addTotal(){
    for(var i=1; i<this.cartItems.length; i++){
      this.totalPrice += i*1;
    }
  }
  
  navigateToHome() {
    this.router.navigate(['donutsList']);
  }
}
