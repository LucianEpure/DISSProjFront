import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
 
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let role = sessionStorage.getItem('role')
        if (role !== null) {
            return true;
        }
 
        // not logged in so redirect to login page
        this.router.navigate(['/Log-in']);
        return false;
    }
}