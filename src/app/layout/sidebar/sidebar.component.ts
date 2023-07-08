import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private drawer: MatDrawer) { }
  setDrawer(drawer: MatDrawer) {
    this.drawer = drawer;
  }

  closeDrawer() {
    if (this.drawer) {
      this.drawer.close();
    }
  }
}