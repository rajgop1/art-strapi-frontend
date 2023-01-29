import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // arts:any
  title = 'art-frontend';

  constructor(private api: ApiService,) {
    // this.getArtDetails()
    window.addEventListener("scroll", (e) => {
      console.log(window.screenTop)
    })
  }
  // getArtDetails(){
  //   this.api.getArt().subscribe({
  //     next:(res:any)=>{
  //       console.log(res)
  //       this.arts = res.data.map((val:any)=>val.attributes)
  //     },
  //     error:(err)=>{
  //       console.log(err)
  //     }
  //   })
  // }
}
