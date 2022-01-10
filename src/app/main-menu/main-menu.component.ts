import { Component, OnInit } from '@angular/core';
import { MenuOption } from './main-menu.component.model';

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

  mainMenuList: MenuOption[] = [
    {
      label: 'ซื้อประกัน',
      subMenu: [
        {
          label: 'ประกัน xxx',
          subMenu: [],
        },
      ],
    },
    {
      label: 'โปรโมชั่น',
      subMenu: [],
    },
    {
      label: 'เคลมประกัน',
      subMenu: [
        {
          label: 'ประกัน xxx',
          subMenu: [],
        },
      ],
    },
    {
      label: 'ช่วยเหลือ',
      subMenu: [
        {
          label: 'ประกัน xxx',
          subMenu: [],
        },
      ],
    },
    {
      label: 'รู้จักประกัน.com',
      subMenu: [
        {
          label: 'ประกัน xxx',
          subMenu: [],
        },
      ],
    },
    {
      label: 'บทความ',
      subMenu: [],
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
