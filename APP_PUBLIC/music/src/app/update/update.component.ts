import { Component, OnInit } from '@angular/core';
import { MusicServiceService } from '../music-service.service';
import { Music } from '../music';
import{ ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [MusicServiceService]
})
export class UpdateComponent implements OnInit {

 

  constructor(private musicService: MusicServiceService,private route:ActivatedRoute, private router: Router) { }
  newMusic: Music;
  pageData = {
    header: {
      title:'',
      genre:'',
      albumName:'',
      artistName:'',
      releaseDate: new Date
      
     
    }
  }
  ngOnInit(): void { 
    
    this.route.params.pipe(switchMap((params: Params) => {
      return this.musicService.getSingleMusic(params.musicid);
    }))
    .subscribe((newMusic: Music) => {
      console.log("current album", newMusic);
      this.newMusic = newMusic;
      this.pageData.header.title = newMusic.title;
      this.pageData.header.genre = newMusic.genre;
      this.pageData.header.albumName = newMusic.albumName.name;
      this.pageData.header.artistName = newMusic.artistName;
      this.pageData.header.releaseDate = newMusic.releaseDate;
      
    });
  }



  public updateMusic(newMusic: Music): void{
    console.log("update")
    this.musicService.updateMusic(newMusic);
    this.router.navigateByUrl('');
  }

}

