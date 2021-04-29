import { Component, OnInit } from '@angular/core';
import { Music } from '../music';
import { MusicServiceService } from '../music-service.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  providers: [MusicServiceService]
})
export class DetailsPageComponent implements OnInit {

  constructor(private musicService: MusicServiceService, private route: ActivatedRoute) { }

  newMusic: Music;
  pageContent = {
    header: {
      title: '',
      body: ''
    }
  };


  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {
      return this.musicService.getSingleMusic(params.musicId);
      
    }))
      .subscribe((newMusic: Music) => {
        console.log('selected Music', newMusic);
        this.newMusic = newMusic;
        this.pageContent.header.title = newMusic.title;
        this.pageContent.header.body = 'Details for selected Album.';
      });
      //console.log(params.musicid);
  }

}
