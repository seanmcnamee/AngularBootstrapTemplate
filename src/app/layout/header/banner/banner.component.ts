import { Component, Input} from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class BannerComponent {
  @Input() title?: string;
  @Input() subTitle?: string;
  constructor() {}
}
