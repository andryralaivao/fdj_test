import Player from "@model/Player";
import Team from "@model/Team";
import { Observable } from "rxjs";

export abstract class PlayerServiceInterface{
    
    abstract fetchByTeam(team: Team): Observable<Player[]>;
}