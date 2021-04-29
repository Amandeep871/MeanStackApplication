import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Music } from './music';

@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {
  private readonly baseUrl = 'http://localhost:3000';
  private readonly musicsUrl = 'http://localhost:3000/api/music';

  constructor(private http: HttpClient) { }

  private handleError(error:any){
    console.log(error);
    
  }

  getMusics() {
    return this.http.get(`${this.baseUrl}/api/music`)
        .pipe(map((musics: Music[]) => musics)).toPromise();
}
getSingleMusic(musicId:string):Promise<void|Music>{
  return this.http.get(this.musicsUrl + '/' + musicId)
  .toPromise()
  .then(response => response as Music)
  .catch(this.handleError);
 }
 createMusic(newMusic: Music): Promise<void | Music> {
  return this.http.post(this.musicsUrl, newMusic)
  .toPromise()
  .then(response => response as Music)
  .catch(this.handleError);
}  

deleteMusic(musicId: string): Promise<void | Music>{
  if(confirm("Are you sure you want to delete.")){
  return this.http.delete(this.musicsUrl + '/' + musicId)
  .toPromise()
  .then(response => response as Music)
  .catch(this.handleError);
  }
}

updateMusic(newMusic: Music): Promise<void | Music>{
  var upUrl = this.musicsUrl+ '/' + newMusic.title;
  return this.http.put(upUrl, newMusic)
  .toPromise()
  .then(response => response as Music)
  .catch(this.handleError);
}
}
