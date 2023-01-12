import { PlayerServiceInterface } from "@domain/player-service-interface";
import Player from "@model/Player";
import Team from "@model/Team";
import { Observable, of } from "rxjs";

export class DumbPlayerService implements PlayerServiceInterface {

    fetchByTeam(team: Team): Observable<Player[]> {
        return of<Player[]>([
            {
                "_id": "5d2d058cda07b95bb8f16f80",
                "name": "Pierre-Emerick Aubameyang",
                "position": "Forward",
                "thumbnail": "https://www.thesportsdb.com/images/media/player/thumb/fnk3u51520755737.jpg",
                "signin": {
                    "amount": 63750000,
                    "currency": "eur"
                },
                "born": new Date("1989-06-19T01:37:19.198Z")

            },
            {
                "_id": "5d2d9024da07b95bb8f1718e",
                "name": "Olivier Giroud",
                "position": "Forward",
                "thumbnail": "https://www.thesportsdb.com/images/media/player/cutout/pe0azg1557049473.png",
                "signin": {
                    "amount": 18000000,
                    "currency": "gpp"
                },
                "born": new Date("1986-10-01T04:49:19.198Z")
            },
            {
                "_id": "5d2d0653da07b95bb8f16fa8",
                "name": "Mesut Ozil",
                "position": "Midfielder",
                "thumbnail": "https://www.thesportsdb.com/images/media/player/thumb/g0xlkp1510859385.jpg",
                "signin": {
                    "amount": 42500000,
                    "currency": "gpp"
                },
                "born": new Date("1988-10-16T05:34:19.198Z")

            }
        ]);
    }
}