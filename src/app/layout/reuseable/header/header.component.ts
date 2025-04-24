import { Component, OnInit } from '@angular/core';
import { fadeIn,fade } from '../../../utils/animate';
@Component({
 selector: 'app-header',
 standalone: true,
 imports: [],
 templateUrl: './header.component.html',
 styleUrls: [],
 animations: [fadeIn,fade]
})
export class HeaderComponent implements OnInit {

 tag = 1;
 isDarkMode: boolean =  true;
 options: any = [{ name: 'Home', tag: 1 }, { name: 'Details', tag: 2 }, { name: 'Contant Us', tag: 3 }]
 ngOnInit(): void {

 }

 toggleDarkmode() {
  if (this.isDarkMode) {
   this.isDarkMode = false;
   document.documentElement.style.setProperty('--clr-background', '#ffffff');
   document.documentElement.style.setProperty('--clr-text', '#000000');
   document.documentElement.style.setProperty('--clr-border', '#000000');
  } else {
   this.isDarkMode = true;
   document.documentElement.style.setProperty('--clr-background', '#000000');
   document.documentElement.style.setProperty('--clr-text', '#44ff00');
   document.documentElement.style.setProperty('--clr-border', ' #ffffff');
  }
 }

}
