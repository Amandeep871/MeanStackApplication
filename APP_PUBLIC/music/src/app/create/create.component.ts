import { Component, OnInit } from '@angular/core';
import { MusicServiceService } from '../music-service.service';
import { Music } from '../music';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [MusicServiceService]
})
export class CreateComponent implements OnInit {

  public newMusic: Music = {
    _id: '',
    title: '',
    genre: '',
   
    artistName: '',
    albumName: {
      name:'',
      img: ''
    },
    releaseDate: new Date
   
  };

  constructor(private musicService: MusicServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  public createNewMusic(newMusic: Music): void{
    this.musicService.createMusic(newMusic);
    this.router.navigate(['']);
  }

}
