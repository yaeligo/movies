import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie';
import { MOVIES } from '../movies';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private router: Router) { }

  movies = MOVIES;
  selectedMovie: Movie;

  // new json to check
  newMovie = {
    "title": "The Godfather",
    "image": "https://img.mako.co.il/2018/08/29/Working_Hard_Or_Hardly_Working_18_8_i.jpg",
    //"image": "https://www.imdb.com/title/tt0068646/mediaviewer/rm746868224",- source from interview but dont work
    "rating": 9.2,
    "releaseYear": 2005,//2012,//1972,
    "genre": [
      "Crime",
      "Drama" 
    ]
    // "title": "Rush",
    // "image": "https://api.androidhive.info/json/movies/9.jpg",
    // "rating": 8.3,
    // "releaseYear": 2013,
    // "genre": ["Animation", "Comedy", "Family"]
  };

  ngOnInit(): void {
  }
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
    let t;
    //sessionStorage.setItem(t,this.selectedMovie.title);
    sessionStorage["test1"]= this.selectedMovie.title;
    // alert(sessionStorage.getItem("test1"))
    var x= sessionStorage.getItem("test1")
    alert("x: "+x)
    if(x!=null)
    {
        //alert("okkk")
        this.router.navigate(['three',{x:x}]);
    }
  }

  flag=0;
  y;
  check(){
    debugger
    alert(this.movies.length)
    for(var i=0; i < this.movies.length; i++)
    {
        if(this.movies[i].title == this.newMovie.title)
          this.flag=1;
    }
    if(this.flag==1) //exist in array
      alert(this.newMovie.title+" exist in array,")
    if(this.flag==0) //now add in the correct place
    {
      for(var j=0; j< this.movies.length;)
      {
        if(this.newMovie.releaseYear < this.movies[j].releaseYear)
            j++;
        if(this.newMovie.releaseYear > this.movies[j].releaseYear)
        {
            j--;
            //this.y=j;
            break;
        }
           
      }
      this.movies.splice(j+1,0,this.newMovie)
      alert(this.movies.length)
      alert(this.movies[15].title)
      //this.movies.push(this.newMovie)
      // sessionStorage.removeItem('test1')
      // sessionStorage["newImg"]= this.newMovie.image;
      // var imagenew= sessionStorage.getItem("newImg")
      // alert("imagenew: "+imagenew)
    }
}
    //hhh? alert(this.hhh.title): alert("hii");
   // if(!(hhh.title))//if null, not exists in array
        // for(var j=0; j<this.movies.length;)
        // {
        //   while(this.newMovie.releaseYear < this.movies[j].releaseYear)           
        //     {
        //       j--;             
        //       //this.movies[j].apply.push(this.newMovie);
        //     }
        //     break;            
        // }
        // this.movies.push(this.newMovie);
  }


