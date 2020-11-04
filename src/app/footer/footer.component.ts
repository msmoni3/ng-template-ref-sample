import { Component, OnInit,ElementRef,ViewChild , Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faHeart = faHeart;
  @ViewChild("tv") tv : ElementRef;
  @Input("temp") temp : number;

  constructor() { 
    
  }

  get fontawesomeInUrl(): boolean {
    return !window.location.hostname.includes('fontawesome');
  }
  ngOnInit() {
    // console.log(this.editInUrl);
    console.log(window.location.hostname.includes('fontawesome'));
  }


}