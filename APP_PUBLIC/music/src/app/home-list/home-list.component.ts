import { Component, OnInit } from '@angular/core';
import { Music } from '../music';
import { MusicServiceService } from '../music-service.service';
import{ ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  musics: Music[];
  constructor(private musicService: MusicServiceService, private router: Router) { }

  ngOnInit(): void {
    this.musicService.getMusics()
      .then(results => {
       this.musics = results;
      });
  }
  public deleteMusic(musicId: string): void{
    this.musicService.deleteMusic(musicId);
    this.router.navigateByUrl('');
  }

}
