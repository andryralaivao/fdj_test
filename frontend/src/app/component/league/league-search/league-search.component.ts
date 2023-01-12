import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map, of, switchMap, tap } from 'rxjs';

import League from '@model/League';
import { LeagueServiceInterface } from '@domain/league-service-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-league-search',
  templateUrl: './league-search.component.html',
  styleUrls: ['./league-search.component.css']
})
export class LeagueSearchComponent implements AfterViewInit {

  public leagues?: League[];
  public isLoading = false;
  public displayResults = false;
  @ViewChild('leagueSearchInput') searchInput!: ElementRef;

  constructor(private leagueService: LeagueServiceInterface, private router: Router) { }

  ngAfterViewInit(): void {
    this.searchLeagues();
  }

  searchLeagues() {

    const searchStream$ = fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(450),
        distinctUntilChanged(),
        tap(() => this.isLoading = true),
        switchMap((term) => term ? this.getLeagues(term) : of<any>(this.leagues)),
        tap(() => {
          this.isLoading = false;
          this.displayResults = true;
        }));

    searchStream$.subscribe((data: any) => {
      this.isLoading = false
      this.leagues = data;
    })
  }

  async getLeagues(term: string) {

    this.leagueService.searchByTerm(term)
      .subscribe(leagues => {
        this.leagues = leagues;
      },
        error => {
          console.log(error);
        })
  }

  goToLeague(leagueId?: String){
    this.displayResults = false;
    this.router.navigate(["/league", leagueId])
  }
}
