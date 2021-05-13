import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Game } from '../../models/game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  games: Game[] = [];

  gamesRaw: any = [
    {
      name: 'FIFA 21 Standard Edition PS4 PS5',
      image:
        'https://www.buygames.ps/1734-thickbox_default/fifa-21-standard-edition-ps4.jpg',
      metacritic: '72',
      longtobeat: '56&#189; Hours  - 189 Hours \t\t\t\t\t\t\t',
      actualPrice: 'US$59.99',
      isOnOffert: true,
      previusPrice: 'US$59.99',
    },
    {
      name: 'Resident Evil Village PS4 PS5',
      image:
        'https://www.buygames.ps/1798-thickbox_default/resident-evil-village-ps4-ps5.jpg',
      metacritic: '84',
      longtobeat: '8&#189; Hours \t\t\t\t\t\t\t',
      actualPrice: 'US$59.99',
      isOnOffert: false,
      previusPrice: 'US$59.99',
    },
    {
      name: 'Grand Theft Auto V PS4 PS5',
      image:
        'https://www.buygames.ps/151-thickbox_default/grand-theft-auto-v-ps4.jpg',
      metacritic: '97',
      longtobeat: '31&#189; Hours \t\t\t\t\t\t\t',
      actualPrice: '$29.99',
      isOnOffert: false,
      previusPrice: '$29.99',
    },
    {
      name: 'Uncharted 4: A Thief’s End PS4 PS5',
      image:
        'https://www.buygames.ps/192-thickbox_default/uncharted-4-a-thiefs-end-ps4.jpg',
      metacritic: '93',
      longtobeat: '15 Hours \t\t\t\t\t\t\t',
      actualPrice: 'US$19.99',
      isOnOffert: false,
      previusPrice: 'US$19.99',
    },
    {
      name: 'HITMAN 3 PS4 PS5',
      image:
        'https://www.buygames.ps/1782-thickbox_default/hitman-3-ps4-ps5.jpg',
      metacritic: '87',
      longtobeat: '8 Hours \t\t\t\t\t\t\t',
      actualPrice: '$59.99',
      isOnOffert: false,
      previusPrice: '$59.99',
    },
    {
      name: 'DOOM PS4 PS5',
      image: 'https://www.buygames.ps/190-thickbox_default/doom-ps4.jpg',
      metacritic: '85',
      longtobeat: '11&#189; Hours \t\t\t\t\t\t\t',
      actualPrice: 'US$19.99',
      isOnOffert: false,
      previusPrice: 'US$19.99',
    },
    {
      name: 'Returnal PS5',
      image: 'https://www.buygames.ps/1797-thickbox_default/returnal-ps5.jpg',
      metacritic: '86',
      longtobeat: '16&#189; Hours \t\t\t\t\t\t\t',
      actualPrice: 'US$69.99',
      isOnOffert: false,
      previusPrice: 'US$69.99',
    },
    {
      name: 'DARK SOULS III PS4 PS5',
      image:
        'https://www.buygames.ps/191-thickbox_default/dark-souls-iii-ps4.jpg',
      metacritic: '89',
      longtobeat: '32 Hours \t\t\t\t\t\t\t',
      actualPrice: 'US$59.99',
      isOnOffert: false,
      previusPrice: 'US$59.99',
    },
    {
      name: 'Marvel&#039;s Spider-Man: Miles Morales PS4 PS5',
      image:
        'https://www.buygames.ps/1742-thickbox_default/marvel-s-spider-man-miles-morales-ps4.jpg',
      metacritic: '84',
      longtobeat: '7&#189; Hours \t\t\t\t\t\t\t',
      actualPrice: 'US$49.99',
      isOnOffert: false,
      previusPrice: 'US$49.99',
    },
    {
      name: 'Watch Dogs: Legion - Standard Edition PS4 PS5',
      image:
        'https://www.buygames.ps/1765-thickbox_default/watch-dogs-legion-standard-edition-ps4.jpg',
      metacritic: '70',
      longtobeat: '17&#189; Hours \t\t\t\t\t\t\t',
      actualPrice: '$59.99',
      isOnOffert: true,
      previusPrice: '$59.99',
    },
    { time: 'Runtime - Concurrent mode: 172,959667 seconds' },
  ];

  constructor(public dataService: DataService) {}

  ngOnInit(): void {

    this.games = this.formatResponse(this.gamesRaw);
    // this.dataService.test().subscribe((res) => {
    //   console.log(res);
    // });
  }

  formatResponse(array: []): [] {
    array.pop();

    return array;
  }
}
