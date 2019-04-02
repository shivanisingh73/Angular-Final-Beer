import { Component, OnInit } from '@angular/core';
import { DataDetailService } from '../data-detail.service';
import {Router} from '@angular/router'
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  public db_data;
  public key_value;
  public whole_values;
  public new_category;
  public new_details;
  public card1: string[];
  public to_search;
  public keys;
  public values;
  public new_cat;
  public new_company_details;
  public searchResult = [];
  public substring: any;
  public check: boolean;
  array;
  new_array;
 valueEnter:string;
 

  constructor(private ser_obj: DataDetailService,private router:Router,public authService: AuthService) {

  }

  ngOnInit() {

    this.ser_obj.getData().subscribe((data) => {
      this.db_data=data;
    });
     
    
  }
  home()
  {
    if(localStorage.getItem("isLoggedIn")=='false')
    {
      this.router.navigate(['/login_page']);
    }
    else{
      this.router.navigate(['/cards']);
    }
  }

  // logout()
  // {
  //   console.log("logout");
    
  //   localStorage.setItem('isLoggedIn','false');
  //   localStorage.removeItem('token_value');
  //   this.router.navigate(['/login_page']);
    
  // }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login_page']);
  }

  onEnter(value: string) 
  {
    console.log("onEnter value",value);
    this.valueEnter=value; 
    this.searching();
  }

  searchString(string, substring) {

    return string.includes(substring);
  }
  
  pushValue(array, value) {
      this.new_array.push(value)
      this.array = this.new_array;
      //document.getElementById("searchbox").innerHTML=" ";

            console.log("Searched Array",this.array);
  }
  searching()
  { 
    this.new_array=[];
    this.substring=this.valueEnter;
    console.log("searching",this.substring);
    this.db_data.cat.map((element) => 
    {
      if (this.searchString(element.beerstyle, this.substring) || this.searchString(element.category, this.substring)) {
        console.log("searchresult",this.searchResult)
        console.log("element",element);
        this.pushValue(this.searchResult, element)
      }
    })

    this.db_data.company_details.map((element) => 
    {
      if (this.searchString(element.AV, this.substring) || this.searchString(element.About, this.substring) || this.searchString(element.BN, this.substring)
        || this.searchString(element.FG, this.substring) || this.searchString(element.SRM, this.substring)
        || this.searchString(element.company, this.substring) || this.searchString(element.features, this.substring)) {
        this.pushValue(this.searchResult, this.db_data.cat[element.cat_id ])
      }
    })
}
}

// import { Component, OnInit } from '@angular/core';
// import { DataDetailService } from '../data-detail.service';
// import {Router} from '@angular/router'



// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent implements OnInit {
//   public db_data;
//   public key_value;
//   public whole_values;
//   public new_category;
//   public new_details;
//   public card1: string[];
//   public to_search;
//   public keys;
//   public values;
//   public new_cat;
//   public new_company_details;
//   public searchResult = [];
//   public substring: any;
//   public check: boolean;
//   array;
//  valueEnter:string;
 

//   constructor(private ser_obj: DataDetailService,private router:Router) {

//   }

//   ngOnInit() {

//     this.ser_obj.getData().subscribe((data) => {
//       this.db_data=data;
//     });
     
    
//   }

//   logout()
//   {
//     console.log("logout");
    
//     localStorage.setItem('isLoggedIn','false');
//     localStorage.removeItem('token_value');
//     this.router.navigate(['/login_page']);
    
//   }

//   onEnter(value: string) 
//   {
//     console.log("onEnter value",value);
//     this.valueEnter=value; 
//     this.searching();
//   }

//   searchString(string, substring) {
    
//     return string.includes(substring);
//   }
  
//   pushValue(array, value) {
    
//       array.push(value)
//       this.array = array;
//             console.log("Searched Array",array);
//   }
//   searching()
//   { 
  
//     this.substring=this.valueEnter;
//     console.log("searching",this.substring);
//     this.db_data.cat.map((element) => 
//     {
//       if (this.searchString(element.beerstyle, this.substring) || this.searchString(element.category, this.substring)) {
//         console.log("searchresult",this.searchResult)
//         console.log("element",element);
//         this.pushValue(this.searchResult, element)
//       }
//     })

//     this.db_data.company_details.map((element) => 
//     {
//       if (this.searchString(element.AV, this.substring) || this.searchString(element.About, this.substring) || this.searchString(element.BN, this.substring)
//         || this.searchString(element.FG, this.substring) || this.searchString(element.SRM, this.substring)
//         || this.searchString(element.company, this.substring) || this.searchString(element.features, this.substring)) {
//         this.pushValue(this.searchResult, this.db_data.cat[element.cat_id - 1])
//       }
//     })
// }
// }
