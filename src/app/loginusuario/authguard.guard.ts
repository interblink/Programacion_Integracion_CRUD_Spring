import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterState, RouterStateSnapshot } from "@angular/router";
import { ApiserviceService } from "./apiservice.service";

@Injectable({
    providedIn: 'root'
  })
  export class AuthguardGuard implements CanActivate{

    constructor(private dataService: ApiserviceService, private router:Router){}
    
    canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ):boolean{
        const routeUrl:string = state.url;
        return this.isLogin(routeUrl);
    }

    isLogin(routeUrl:string):boolean{
        if(this.dataService.isLoggedIn()){
            return true;
        }else{
            this.dataService.redirectUrl = routeUrl;
            this.router.navigate(['/login'],{queryParams:{returnUrl:routeUrl}});
            return false;
        }
    }
  
}