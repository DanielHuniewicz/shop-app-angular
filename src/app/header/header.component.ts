import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public getScreenWidth: number;
  public getScreenHeight: number;

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }
}
