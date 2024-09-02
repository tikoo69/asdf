import * as core from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';
import { RouterOutlet } from '@angular/router';
@core.Component({
  selector: 'app-front-layout',
  standalone: true,
  imports: [NavbarComponent,
    FooterComponent,RouterOutlet],
  templateUrl: './front-layout.component.html',
  styleUrl: './front-layout.component.scss'
})
export class FrontLayoutComponent {

}
