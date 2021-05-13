import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  games = [
    {
      title: 'FIFA 21 Standard Edition',
      image:
        'https://www.buygames.ps/1734-thickbox_default/fifa-21-standard-edition-ps4.jpg',
      metacritic: '50',
      longtobeat: '59 Hours - 189 Hours',
      prices: ['US$24.89'],
    },
    {
      title: 'FIFA 21 Standard Edition',
      image:
        'https://www.buygames.ps/1734-thickbox_default/fifa-21-standard-edition-ps4.jpg',
      metacritic: '71',
      longtobeat: '59 Hours - 189 Hours',
      prices: ['US$59.99', 'US$24.89'],
    },
    {
      title: 'FIFA 21 Standard Edition',
      image:
        'https://www.buygames.ps/1734-thickbox_default/fifa-21-standard-edition-ps4.jpg',
      metacritic: '71',
      longtobeat: '59 Hours - 189 Hours',
      prices: ['US$59.99'],
    },
    {
      title: 'FIFA 22 Standard Edition',
      image:
        'https://www.buygames.ps/1734-thickbox_default/fifa-21-standard-edition-ps4.jpg',
      metacritic: '45',
      longtobeat: '59 Hours - 189 Hours',
      prices: ['US$59.99', 'US$24.89'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
