import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // variable and functions for create sketch
  selectedSize:any
  selectedFace:any
  isFrameSelected:boolean=false

  sizes:any
  faces:any
  image:any
  onSelectSize(size:any){
    this.selectedSize = size
  }
  onSelectFace(face:any){
    this.selectedFace=face
  }
  

  getOptions(){
    this.api.getSizeOptions().subscribe({
      next: (data:any)=>{
        this.sizes =  data?.data.map((size:any)=>size.attributes)
        console.log(data)

      },
      error: (err)=>{
        console.log(err)
      }
    })
    this.api.getFaceOptions().subscribe({
      next: (data:any)=>{
        this.faces = data?.data.map((size:any)=>size.attributes).sort((prev:any,next:any)=>prev.Face-next.Face)
        console.log(data)
      },
      error: (err)=>{
        console.log(err)
      }
    })

  }

  arts: any
  isSpinning: boolean = false
  dummy = [
    {
      "Name": "Naval Kishore",
      "Price": 2000,
      "Discount": 15,
      "Description": null,
      "InstagramLink": null,
      "YoutubeLink": "https://www.youtube.com/shorts/6t6o2LDskzk",
      "createdAt": "2023-01-26T22:56:52.654Z",
      "updatedAt": "2023-01-26T20:15:53.036Z",
      "publishedAt": "2023-01-26T23:00:08.154Z",
      "Sold": false,
      "Image": {
        "data": {
          "id": 8,
          "attributes": {
            "name": "art1.png",
            "alternativeText": null,
            "caption": null,
            "width": 265,
            "height": 377,
            "formats": {
              "thumbnail": {
                "ext": ".png",
                "url": "https://res.cloudinary.com/dtpbzgmxs/image/upload/v1674764142/thumbnail_art1_235d7657be.png",
                "hash": "thumbnail_art1_235d7657be",
                "mime": "image/png",
                "name": "thumbnail_art1.png",
                "path": null,
                "size": 27.53,
                "width": 110,
                "height": 156,
                "provider_metadata": {
                  "public_id": "thumbnail_art1_235d7657be",
                  "resource_type": "image"
                }
              }
            },
            "hash": "art1_235d7657be",
            "ext": ".png",
            "mime": "image/png",
            "size": 27.35,
            "url": "https://res.cloudinary.com/dtpbzgmxs/image/upload/v1674764142/art1_235d7657be.png",
            "previewUrl": null,
            "provider": "cloudinary",
            "provider_metadata": {
              "public_id": "art1_235d7657be",
              "resource_type": "image"
            },
            "createdAt": "2023-01-26T20:15:43.333Z",
            "updatedAt": "2023-01-26T20:15:43.333Z"
          }
        }
      }
    },
    {
      "Name": "Johnny",
      "Price": 2000,
      "Discount": 20,
      "Description": null,
      "InstagramLink": null,
      "YoutubeLink": "https://www.youtube.com/shorts/rDny4YJGAEc",
      "createdAt": "2023-01-26T23:08:42.712Z",
      "updatedAt": "2023-01-26T20:16:43.752Z",
      "publishedAt": "2023-01-26T23:09:15.978Z",
      "Sold": false,
      "Image": {
        "data": {
          "id": 9,
          "attributes": {
            "name": "johnny.png",
            "alternativeText": null,
            "caption": null,
            "width": 261,
            "height": 387,
            "formats": {
              "thumbnail": {
                "ext": ".png",
                "url": "https://res.cloudinary.com/dtpbzgmxs/image/upload/v1674764190/thumbnail_johnny_76df26acce.png",
                "hash": "thumbnail_johnny_76df26acce",
                "mime": "image/png",
                "name": "thumbnail_johnny.png",
                "path": null,
                "size": 27.39,
                "width": 105,
                "height": 156,
                "provider_metadata": {
                  "public_id": "thumbnail_johnny_76df26acce",
                  "resource_type": "image"
                }
              }
            },
            "hash": "johnny_76df26acce",
            "ext": ".png",
            "mime": "image/png",
            "size": 27.74,
            "url": "https://res.cloudinary.com/dtpbzgmxs/image/upload/v1674764190/johnny_76df26acce.png",
            "previewUrl": null,
            "provider": "cloudinary",
            "provider_metadata": {
              "public_id": "johnny_76df26acce",
              "resource_type": "image"
            },
            "createdAt": "2023-01-26T20:16:31.123Z",
            "updatedAt": "2023-01-26T20:16:31.123Z"
          }
        }
      }
    },
    {
      "Name": "Elephant",
      "Price": 2000,
      "Discount": 20,
      "Description": null,
      "InstagramLink": null,
      "YoutubeLink": "https://www.youtube.com/shorts/qoYOuSw_Oqk",
      "createdAt": "2023-01-26T23:05:45.837Z",
      "updatedAt": "2023-01-26T20:17:29.890Z",
      "publishedAt": "2023-01-26T23:05:58.839Z",
      "Sold": false,
      "Image": {
        "data": {
          "id": 10,
          "attributes": {
            "name": "ele.png",
            "alternativeText": null,
            "caption": null,
            "width": 262,
            "height": 381,
            "formats": {
              "thumbnail": {
                "ext": ".png",
                "url": "https://res.cloudinary.com/dtpbzgmxs/image/upload/v1674764234/thumbnail_ele_de870684f5.png",
                "hash": "thumbnail_ele_de870684f5",
                "mime": "image/png",
                "name": "thumbnail_ele.png",
                "path": null,
                "size": 28.96,
                "width": 107,
                "height": 156,
                "provider_metadata": {
                  "public_id": "thumbnail_ele_de870684f5",
                  "resource_type": "image"
                }
              }
            },
            "hash": "ele_de870684f5",
            "ext": ".png",
            "mime": "image/png",
            "size": 34.72,
            "url": "https://res.cloudinary.com/dtpbzgmxs/image/upload/v1674764233/ele_de870684f5.png",
            "previewUrl": null,
            "provider": "cloudinary",
            "provider_metadata": {
              "public_id": "ele_de870684f5",
              "resource_type": "image"
            },
            "createdAt": "2023-01-26T20:17:14.403Z",
            "updatedAt": "2023-01-26T20:17:14.403Z"
          }
        }
      }
    }
  ]
  @ViewChild('card') card!:ElementRef
  constructor(private api: ApiService) {
    this.getArtDetails()
    window.addEventListener("scroll", (e) => {
      console.log(window.screenTop)
    })
  }
  selectedMagnifiedImage:any
  ngOnInit(): void {
    this.getArtDetails()
    this.getOptions()
  }
  getArtDetails() {
    this.isSpinning = true
    this.api.getArt().subscribe({
      next: (res: any) => {
        this.isSpinning = false
        // console.log(res)
        this.arts = res.data.map((val: any) => val.attributes)
        console.log(this.arts)
      },
      error: (err) => {
        this.isSpinning = false
        console.log(err)
      }
    })
  }
  onCardSelect(){
  }
  onMagnifyClick(img:string='', close=false){
    if(!close){
      this.selectedMagnifiedImage = img 
      document.body.style.overflow='hidden'
    }else{
      this.selectedMagnifiedImage=''
      document.body.style.overflow='overlay'
    }
  }
}