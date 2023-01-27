import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  arts:any
  isSpinning:boolean=false
  constructor(private api:ApiService){
    this.getArtDetails()
    window.addEventListener("scroll", (e)=>{
      console.log(window.screenTop)
    })
  }
  ngOnInit(): void {
    
  }
  getArtDetails(){
    this.isSpinning=true
    this.api.getArt().subscribe({
      next:(res:any)=>{
        this.isSpinning=false
        console.log(res)
        this.arts = res.data.map((val:any)=>val.attributes)
      },
      error:(err)=>{
        this.isSpinning=false
        console.log(err)
      }
    })
  }
}