import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'app-forbidden',
    templateUrl: './forbidden.component.html',
    styleUrls: ['./forbidden.component.css']
})
export class ForbiddenComponent implements OnInit {
    timer = 0

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        setTimeout(() => this.router.navigateByUrl("/home"), 2000)
        setInterval(() => this.timer+= 6, 100)
    }

}
