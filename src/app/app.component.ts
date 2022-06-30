import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular';
  fontsize = 30;

  userName = localStorage.getItem("userName");
  user=Number(localStorage.getItem("user"));
  role:any =localStorage.getItem("role");

  constructor(private router:Router)
  {

  }

  logout():void{
       localStorage.clear();
       this.router.navigate(["home"]).then(() => {
         window.location.reload();
       })
  }
}
