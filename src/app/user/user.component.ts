import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: [ './user.component.css' ]
})
export class UserComponent implements OnInit, OnDestroy {
	private fristObsSubscription: Subscription;
	constructor(private route: ActivatedRoute, private userservice: UserService) {}

	ngOnInit() {
		this.fristObsSubscription = interval(1000).subscribe((count) => {
			console.log(count);
		});
	}

	ngOnDestroy() {
		this.fristObsSubscription.unsubscribe();
	}

	onActivate() {
		this.userservice.activatedEmitter.next(true);
	}
}
