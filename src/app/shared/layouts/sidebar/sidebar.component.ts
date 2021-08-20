import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  showFiller = false;
  showFirst = true;

  constructor(public authService: AuthService) {}

  toggleIcon() {}

  ngOnInit(): void {}
}
