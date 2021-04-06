// export interface Movie {
//     title: string;
//     image: string;
//     rating: number;
//     releaseYear: number;
//     genre: string[];
//   }


export class Movie{
  constructor(
              public title: string,
              public image: string,
              public rating: number,
              public releaseYear: number,
              public genre: string[],
              ){}
}