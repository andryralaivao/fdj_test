import League from "@model/League";
import { Observable } from "rxjs";

export abstract class LeagueServiceInterface{
    
    abstract searchByTerm(term: string): Observable<League[]>;
    abstract getDetails(league: League): Observable<League>;
}