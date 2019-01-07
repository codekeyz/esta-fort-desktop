import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "app-searchbar",
  templateUrl: "./searchbar.component.html",
  styleUrls: ["./searchbar.component.scss"]
})
export class SearchbarComponent implements OnInit {
  @Output() ontyping = new EventEmitter<String>();

  myFocusVar = false;

  searchControl = new FormControl();

  constructor() {}

  ngOnInit() {
    this.getObservable(this.searchControl.valueChanges).subscribe(
      (userInput: string) => {
        this.ontyping.emit(userInput);
      }
    );
  }

  getObservable(obs: Observable<String>) {
    return obs.pipe(
      map(res => this.searchControl.value),
      debounceTime(500),
      distinctUntilChanged()
    );
  }
}
