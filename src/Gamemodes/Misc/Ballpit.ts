/*
    DiepCustom - custom tank game server that shares diep.io's WebSocket protocol
    Copyright (C) 2022 ABCxFF (github.com/ABCxFF)

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program. If not, see <https://www.gnu.org/licenses/>
*/

import GameServer from "../../Game";
import ArenaEntity from "../../Native/Arena";
import ObjectEntity from "../../Entity/Object";
import MazeWall from "../../Entity/Misc/MazeWall";

import Pentagon from "../../Entity/Shape/Pentagon";

import { Color, ArenaFlags, PhysicsFlags } from "../../Const/Enums";
import { NameGroup } from "../../Native/FieldGroups";
import AbstractShape from "../../Entity/Shape/AbstractShape";
import { SandboxShapeManager } from "../Sandbox";
import Square from "../../Entity/Shape/Square";
import Triangle from "../../Entity/Shape/Triangle";
import NecromancerSquare from "../../Entity/Tank/Projectile/NecromancerSquare";

/**
 * Only spawns crashers
 */
class CustomShapeManager extends SandboxShapeManager {
    protected spawnShape(): AbstractShape {
        const {x, y} = this.arena.findSpawnLocation();

        const penta = new Square(this.game, Math.random() < 0.25,);

        penta.positionData.values.x = Math.sign(x) * (Math.abs(x) - 200);
        penta.positionData.values.y = Math.sign(y) * (Math.abs(y) - 200);
        penta.relationsData.values.owner = penta.relationsData.values.team = this.arena;

        return penta;
    }
}

/**
 * Ball Gamemode Arena
 */
export default class BallArena extends ArenaEntity {
    /** Controller of all shapes in the arena. */
	protected shapes: CustomShapeManager = new CustomShapeManager(this);

    public constructor(game: GameServer) {
        super(game);

        this.arenaData.values.flags |= ArenaFlags.canUseCheats;
        this.updateBounds(3500, 3500);

        const ball = new ObjectEntity(game);
        ball.nameData = new NameGroup(ball);
        ball.nameData.values.name = "im pacman"
        ball.physicsData.values.sides = 1;
        ball.styleData.values.color = Color.ScoreboardBar;
        ball.physicsData.values.size = 200;
        ball.physicsData.values.absorbtionFactor = 10;
        ball.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball.relationsData.values.team = ball;
        const ball2 = new ObjectEntity(game);
        ball2.nameData = new NameGroup(ball);
        ball2.nameData.values.name = "im pacman"
        ball2.physicsData.values.sides = 1;
        ball2.styleData.values.color = Color.ScoreboardBar;
        ball2.physicsData.values.size = 200;
        ball2.physicsData.values.absorbtionFactor = 10;
        ball2.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball2.relationsData.values.team = ball2;
         const ball3 = new ObjectEntity(game);
        ball3.nameData = new NameGroup(ball);
        ball3.nameData.values.name = "im pacman"
        ball3.physicsData.values.sides = 1;
        ball3.styleData.values.color = Color.ScoreboardBar;
        ball3.physicsData.values.size = 200;
        ball3.physicsData.values.absorbtionFactor = 10;
        ball3.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball3.relationsData.values.team = ball3;
        const ball4 = new ObjectEntity(game);
        ball4.nameData = new NameGroup(ball);
        ball4.nameData.values.name = "im pacman"
        ball4.physicsData.values.sides = 1;
        ball4.styleData.values.color = Color.ScoreboardBar;
        ball4.physicsData.values.size = 200;
        ball4.physicsData.values.absorbtionFactor = 10;
        ball4.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball4.relationsData.values.team = ball4;
        const ball5 = new ObjectEntity(game);
        ball5.nameData = new NameGroup(ball);
        ball5.nameData.values.name = "im pacman"
        ball5.physicsData.values.sides = 1;
        ball5.styleData.values.color = Color.ScoreboardBar;
        ball5.physicsData.values.size = 200;
        ball5.physicsData.values.absorbtionFactor = 10;
        ball5.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball5.relationsData.values.team = ball5;
         const ball6 = new ObjectEntity(game);
        ball6.nameData = new NameGroup(ball);
        ball6.nameData.values.name = "im pacman"
        ball6.physicsData.values.sides = 1;
        ball6.styleData.values.color = Color.ScoreboardBar;
        ball6.physicsData.values.size = 200;
        ball6.physicsData.values.absorbtionFactor = 10;
        ball6.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball6.relationsData.values.team = ball6;
         const ball7 = new ObjectEntity(game);
        ball7.nameData = new NameGroup(ball);
        ball7.nameData.values.name = "im pacman"
        ball7.physicsData.values.sides = 1;
        ball7.styleData.values.color = Color.ScoreboardBar;
        ball7.physicsData.values.size = 200;
        ball7.physicsData.values.absorbtionFactor = 10;
        ball7.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball7.relationsData.values.team = ball7;
         const ball8 = new ObjectEntity(game);
        ball8.nameData = new NameGroup(ball);
        ball8.nameData.values.name = "im pacman"
        ball8.physicsData.values.sides = 1;
        ball8.styleData.values.color = Color.ScoreboardBar;
        ball8.physicsData.values.size = 200;
        ball8.physicsData.values.absorbtionFactor = 10;
        ball8.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball8.relationsData.values.team = ball8;
         const ball9 = new ObjectEntity(game);
        ball9.nameData = new NameGroup(ball);
        ball9.nameData.values.name = "im pacman"
        ball9.physicsData.values.sides = 1;
        ball9.styleData.values.color = Color.ScoreboardBar;
        ball9.physicsData.values.size = 200;
        ball9.physicsData.values.absorbtionFactor = 10;
        ball9.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball9.relationsData.values.team = ball9;
         const ball10 = new ObjectEntity(game);
        ball10.nameData = new NameGroup(ball);
        ball10.nameData.values.name = "im pacman"
        ball10.physicsData.values.sides = 1;
        ball10.styleData.values.color = Color.ScoreboardBar;
        ball10.physicsData.values.size = 200;
        ball10.physicsData.values.absorbtionFactor = 10;
        ball10.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball10.relationsData.values.team = ball10;
        const ball11 = new ObjectEntity(game);
        ball11.nameData = new NameGroup(ball);
        ball11.nameData.values.name = "im pacman"
        ball11.physicsData.values.sides = 1;
        ball11.styleData.values.color = Color.ScoreboardBar;
        ball11.physicsData.values.size = 200;
        ball11.physicsData.values.absorbtionFactor = 10;
        ball11.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball11.relationsData.values.team = ball11;
        const ball12 = new ObjectEntity(game);
        ball12.nameData = new NameGroup(ball);
        ball12.nameData.values.name = "im pacman"
        ball12.physicsData.values.sides = 1;
        ball12.styleData.values.color = Color.ScoreboardBar;
        ball12.physicsData.values.size = 200;
        ball12.physicsData.values.absorbtionFactor = 10;
        ball12.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball12.relationsData.values.team = ball12;
        const ball13 = new ObjectEntity(game);
        ball13.nameData = new NameGroup(ball);
        ball13.nameData.values.name = "im pacman"
        ball13.physicsData.values.sides = 1;
        ball13.styleData.values.color = Color.ScoreboardBar;
        ball13.physicsData.values.size = 200;
        ball13.physicsData.values.absorbtionFactor = 10;
        ball13.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball13.relationsData.values.team = ball13;
        const ball14 = new ObjectEntity(game);
        ball14.nameData = new NameGroup(ball);
        ball14.nameData.values.name = "im pacman"
        ball14.physicsData.values.sides = 1;
        ball14.styleData.values.color = Color.ScoreboardBar;
        ball14.physicsData.values.size = 200;
        ball14.physicsData.values.absorbtionFactor = 10;
        ball14.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball14.relationsData.values.team = ball14;
        const ball15 = new ObjectEntity(game);
        ball15.nameData = new NameGroup(ball);
        ball15.nameData.values.name = "im pacman"
        ball15.physicsData.values.sides = 1;
        ball15.styleData.values.color = Color.ScoreboardBar;
        ball15.physicsData.values.size = 200;
        ball15.physicsData.values.absorbtionFactor = 10;
        ball15.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball15.relationsData.values.team = ball15;
        const ball16 = new ObjectEntity(game);
        ball16.nameData = new NameGroup(ball);
        ball16.nameData.values.name = "im pacman"
        ball16.physicsData.values.sides = 1;
        ball16.styleData.values.color = Color.ScoreboardBar;
        ball16.physicsData.values.size = 200;
        ball16.physicsData.values.absorbtionFactor = 10;
        ball16.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball16.relationsData.values.team = ball16;
        const ball17 = new ObjectEntity(game);
        ball17.nameData = new NameGroup(ball);
        ball17.nameData.values.name = "im pacman"
        ball17.physicsData.values.sides = 1;
        ball17.styleData.values.color = Color.ScoreboardBar;
        ball17.physicsData.values.size = 200;
        ball17.physicsData.values.absorbtionFactor = 10;
        ball17.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball17.relationsData.values.team = ball17;
        const ball18 = new ObjectEntity(game);
        ball18.nameData = new NameGroup(ball);
        ball18.nameData.values.name = "im pacman"
        ball18.physicsData.values.sides = 1;
        ball18.styleData.values.color = Color.ScoreboardBar;
        ball18.physicsData.values.size = 200;
        ball18.physicsData.values.absorbtionFactor = 10;
        ball18.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball18.relationsData.values.team = ball18;
        const ball19 = new ObjectEntity(game);
        ball19.nameData = new NameGroup(ball);
        ball19.nameData.values.name = "im pacman"
        ball19.physicsData.values.sides = 1;
        ball19.styleData.values.color = Color.ScoreboardBar;
        ball19.physicsData.values.size = 200;
        ball19.physicsData.values.absorbtionFactor = 10;
        ball19.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball19.relationsData.values.team = ball19;
        const ball20 = new ObjectEntity(game);
        ball20.nameData = new NameGroup(ball);
        ball20.nameData.values.name = "im pacman"
        ball20.physicsData.values.sides = 1;
        ball20.styleData.values.color = Color.ScoreboardBar;
        ball20.physicsData.values.size = 200;
        ball20.physicsData.values.absorbtionFactor = 10;
        ball20.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball20.relationsData.values.team = ball20;
        const ball21 = new ObjectEntity(game);
        ball21.nameData = new NameGroup(ball);
        ball21.nameData.values.name = "im pacman"
        ball21.physicsData.values.sides = 1;
        ball21.styleData.values.color = Color.ScoreboardBar;
        ball21.physicsData.values.size = 200;
        ball21.physicsData.values.absorbtionFactor = 10;
        ball21.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball21.relationsData.values.team = ball21;
        const ball22 = new ObjectEntity(game);
        ball22.nameData = new NameGroup(ball);
        ball22.nameData.values.name = "im pacman"
        ball22.physicsData.values.sides = 1;
        ball22.styleData.values.color = Color.ScoreboardBar;
        ball22.physicsData.values.size = 200;
        ball22.physicsData.values.absorbtionFactor = 10;
        ball22.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball22.relationsData.values.team = ball22;
        const ball23 = new ObjectEntity(game);
        ball23.nameData = new NameGroup(ball);
        ball23.nameData.values.name = "im pacman"
        ball23.physicsData.values.sides = 1;
        ball23.styleData.values.color = Color.ScoreboardBar;
        ball23.physicsData.values.size = 200;
        ball23.physicsData.values.absorbtionFactor = 10;
        ball23.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball23.relationsData.values.team = ball23;
        const ball24 = new ObjectEntity(game);
        ball24.nameData = new NameGroup(ball);
        ball24.nameData.values.name = "im pacman"
        ball24.physicsData.values.sides = 1;
        ball24.styleData.values.color = Color.ScoreboardBar;
        ball24.physicsData.values.size = 200;
        ball24.physicsData.values.absorbtionFactor = 10;
        ball24.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball24.relationsData.values.team = ball24;
        const ball25 = new ObjectEntity(game);
        ball25.nameData = new NameGroup(ball);
        ball25.nameData.values.name = "im pacman"
        ball25.physicsData.values.sides = 1;
        ball25.styleData.values.color = Color.ScoreboardBar;
        ball25.physicsData.values.size = 200;
        ball25.physicsData.values.absorbtionFactor = 10;
        ball25.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball25.relationsData.values.team = ball25;
        const ball26 = new ObjectEntity(game);
        ball26.nameData = new NameGroup(ball);
        ball26.nameData.values.name = "im pacman"
        ball26.physicsData.values.sides = 1;
        ball26.styleData.values.color = Color.ScoreboardBar;
        ball26.physicsData.values.size = 200;
        ball26.physicsData.values.absorbtionFactor = 10;
        ball26.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball26.relationsData.values.team = ball26;
        const ball27 = new ObjectEntity(game);
        ball27.nameData = new NameGroup(ball);
        ball27.nameData.values.name = "im pacman"
        ball27.physicsData.values.sides = 1;
        ball27.styleData.values.color = Color.ScoreboardBar;
        ball27.physicsData.values.size = 200;
        ball27.physicsData.values.absorbtionFactor = 10;
        ball27.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball27.relationsData.values.team = ball27;
        const ball28 = new ObjectEntity(game);
        ball28.nameData = new NameGroup(ball);
        ball28.nameData.values.name = "im pacman"
        ball28.physicsData.values.sides = 1;
        ball28.styleData.values.color = Color.ScoreboardBar;
        ball28.physicsData.values.size = 200;
        ball28.physicsData.values.absorbtionFactor = 10;
        ball28.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball28.relationsData.values.team = ball28;
        const ball29 = new ObjectEntity(game);
        ball29.nameData = new NameGroup(ball);
        ball29.nameData.values.name = "im pacman"
        ball29.physicsData.values.sides = 1;
        ball29.styleData.values.color = Color.ScoreboardBar;
        ball29.physicsData.values.size = 200;
        ball29.physicsData.values.absorbtionFactor = 10;
        ball29.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball29.relationsData.values.team = ball29;
        const ball30 = new ObjectEntity(game);
        ball30.nameData = new NameGroup(ball);
        ball30.nameData.values.name = "im pacman"
        ball30.physicsData.values.sides = 1;
        ball30.styleData.values.color = Color.ScoreboardBar;
        ball30.physicsData.values.size = 200;
        ball30.physicsData.values.absorbtionFactor = 10;
        ball30.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball30.relationsData.values.team = ball30;
    }
}