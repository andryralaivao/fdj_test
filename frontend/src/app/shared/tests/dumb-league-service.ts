import { LeagueServiceInterface } from "@domain/league-service-interface";
import League from "@model/League";
import { Observable, of } from "rxjs";

export class DumbLeagueService implements LeagueServiceInterface {
  
    searchByTerm(term: string): Observable<League[]> {
      return of<League[]>([
        {
          "_id": "5d2cdcf7da07b95bb8f16ed1",
          "name": "English Premier League"
        }
      ]);
    }
    getDetails(league: League): Observable<League> {
      return of<League>(
        {
          "_id": "5d2cdcf7da07b95bb8f16ed1",
          "name": "English Premier League"
        }
      );
    }
  }