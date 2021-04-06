import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
arr=[1,3,2,5,2,1,4,2,1];
// newarr:any[];
//arr=[1,3,2,5,2,1,4,2,1];
  ngOnInit(): void {
  }
 
 abc()
  { 
    alert(this.arr);
    let aaa= this.arr.filter((item,pos)=>this.arr.indexOf(item)===pos);
    alert(aaa);

      // XXXXXX let aaa= this.arr.filter(function(item,pos){
      //  this.arr.indexOf(item)==pos;})
      //  alert("hii: "+aaa)

      // XXXXXXX let pt = this.arr.filter(function(item, pos){
      //   this.arr.indexOf(item)==pos;
      // })
      // alert(pt)

      // VVVVVVVV let aaa= this.arr.filter((item, pos) =>this.arr.indexOf(item)===pos);
      //   alert(aaa)
  }

  //  alert("lkhkjh")
  //  debugger
  //   const arr=[1,3,2,5,2,1,4,2,1];
  //   alert(arr)
  //    this.newarr= arr.filter(function(item,pos){
  //      arr.indexOf(item)==pos;
  //   });
  //   alert("hii:"+this.newarr)
}