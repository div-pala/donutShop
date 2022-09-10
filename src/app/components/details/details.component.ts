import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Donut } from 'src/app/interfaces/donut';
import { DonutService } from 'src/app/services/donut-service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  details:Donut | any;
  id:number = 0;
  extras:string[]=[];
  
  
  constructor(private donutService:DonutService, private route:ActivatedRoute) { }

  ngOnInit(): void {
     this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      this.getDonutDetailsResponseApi();  
      });
   }

  getDonutDetailsResponseApi(){
     this.donutService.getDonutDetails(this.id).subscribe((data) => {
      this.details = data
      this.extras = data.extras;
     });
  }
 
}