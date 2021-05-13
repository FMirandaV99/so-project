import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'so-project';

  ngOnInit(): void {

    $(document).ready(function () {

      $('.game-card').hover(function() {
        // Mouseenter
        $(this).find('.card-front-side').hide();
        $(this).find('.card-back-side').show();
      },
      function () {
        $(this).find('.card-back-side').hide();
        $(this).find('.card-front-side').show();
      });




      // console.log('ready');
      // $('.game-card').hover(function () {
      //   $(this).find('.card-front-side').fadeOut('slow', () => {
      //     $(this).find('.card-back-side').fadeIn('slow', () => {});
      //   });
      // });

      // $('.card-back-side').click(function () {
      //   $(this).fadeOut('slow', () => {
      //     $(this).siblings().find('.card-front-side').fadeIn('slow', () => {});
      //   });
      // });

  });

  }
}
