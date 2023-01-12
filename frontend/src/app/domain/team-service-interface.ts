import League from "@model/League";
import Team from "@model/Team";
import { Observable } from "rxjs";

export abstract class TeamServiceInterface{
    
    abstract fetchByLeague(league: League): Observable<Team[]>;
    abstract getDetails(team: Team): Observable<Team>;
}