import { TeamServiceInterface } from "@domain/team-service-interface";
import League from "@model/League";
import Team from "@model/Team";
import { Observable, of } from "rxjs";

export class DumbTeamService implements TeamServiceInterface {

    fetchByLeague(league: League): Observable<Team[]> {
        return of<Team[]>([
            {
                "_id": "5d2d01fdda07b95bb8f16f0a",
                "name": "Arsenal"
            },
            {
                "_id": "5d2d02d7da07b95bb8f16f2a",
                "name": "Manchester City"
            },
            {
                "_id": "5d2d8f60da07b95bb8f17170",
                "name": "Chelsea",
            }
        ]);
    }

    getDetails(team: Team): Observable<Team> {
        return of<Team>(
            {
                "_id": "5d2d8f60da07b95bb8f17170",
                "name": "Chelsea"
            }
        );
    }
}