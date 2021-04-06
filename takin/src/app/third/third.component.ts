import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MOVIES } from '../movies';
import { Movie } from '../movie';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  c:Movie;
  selectedMovie: Movie;
  myForm: FormGroup;
  
  newMovie = {
    "title": "The Godfather",
    "image": "https://www.imdb.com/title/tt0068646/mediaviewer/rm746868224",
    "rating": 9.2,
    "releaseYear": 2005,//2012,//1972,
    "genre": [
      "Crime",
      "Drama" 
    ]

  };
  ngOnInit(): void {
    var y= sessionStorage.getItem("test1")
    for(var i=0; i<MOVIES.length; i++)
    {
      if(MOVIES[i].title==y)
      {
        this.c= MOVIES[i];
        this.selectedMovie= MOVIES[i];
        this.selectedMovie.releaseYear= MOVIES[i].releaseYear;
      }
    }
   
    //alert(this.selectedMovie.title+"  "+this.selectedMovie.releaseYear+"  "+this.selectedMovie.rating+" "+this.selectedMovie.image+" "+this.selectedMovie.genre)

    //alert(this.c.title+"  "+this.c.releaseYear+"  "+this.c.rating+" "+this.c.image+" "+this.c.genre)
    //if((MOVIES.forEach(x=>x.title==y))!=null)
        
    
    alert(y)
  }

}
