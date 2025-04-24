import { Component } from '@angular/core';
import { HeaderComponent } from "./reuseable/header/header.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FooterComponent } from "./reuseable/footer/footer.component";

@Component({
 selector: 'app-layout',
 standalone: true,
 imports: [HeaderComponent, DashboardComponent, FooterComponent],
 templateUrl: './layout.component.html',
 styleUrls: []
})
export class LayoutComponent {

}
