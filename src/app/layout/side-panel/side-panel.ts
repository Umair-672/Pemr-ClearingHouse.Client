import { AfterViewInit, Component } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-side-panel',
  standalone: false,
  templateUrl: './side-panel.html',
  styleUrl: './side-panel.scss'
})
export class SidePanel implements AfterViewInit {
  ngAfterViewInit() {
    feather.replace();
  }
}
