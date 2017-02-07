import { Component, OnInit, ElementRef  } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  constructor(private _elRef: ElementRef) { }

  ngOnInit() {
    jQuery(this._elRef.nativeElement).find('.parallax').parallax();
  }

}
