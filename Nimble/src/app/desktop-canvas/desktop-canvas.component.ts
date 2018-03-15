import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop-canvas',
  templateUrl: './desktop-canvas.component.html',
  styleUrls: ['./desktop-canvas.component.css']
})
export class DesktopCanvasComponent implements OnInit {

    icons = false;
    files = false;
    folder = false;
    constructor() { }

    ngOnInit() {
    	let bg = <HTMLImageElement> document.getElementById('bg');
	    let canvas = <HTMLCanvasElement> document.getElementById('desktopCanvas'),
	        ctx = canvas.getContext('2d');
	    canvas.height = bg.height;
		  canvas.width = Math.round(bg.height*(bg.naturalWidth/bg.naturalHeight));

	    // ctx.beginPath();
	    // ctx.moveTo(0, 0);
	    // ctx.lineTo(canvas.width, canvas.height);
	    // ctx.stroke();
    }

    login() {
    	let bg = <HTMLImageElement> document.getElementById('bg');
    	let login = <HTMLImageElement> document.getElementById('login');
    	bg.src = "../assets/desktop-canvas/macDesktop.png";
  		login.parentNode.removeChild(login);
      this.icons = true;
    }

    openFinder() {
      this.files = true;
    }

    openFolder() {
      this.folder = true;
    }

}
