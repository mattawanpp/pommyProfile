import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  socialImagePaths: string[] = [
    '../../assets/icons/facebook.svg',
    '../../assets/icons/youtube.svg',
    '../../assets/icons/twitter.svg',
    '../../assets/icons/line.svg',
    '../../assets/icons/instagram.svg',
  ];
  constructor() {}

  ngOnInit(): void {}
}
