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
import Nonagon from "../../Entity/Shape/Wentagon";
import LiveWall from "../../Entity/Misc/LiveWall";

/**
 * Only spawns crashers
 */
class CustomShapeManager extends SandboxShapeManager {
    protected spawnShape(): AbstractShape {
        const {x, y} = this.arena.findSpawnLocation();

        const penta = new Nonagon(this.game, Math.random() < 0.25,);

        penta.positionData.values.x = Math.sign(x) * (Math.abs(x) - 200);
        penta.positionData.values.y = Math.sign(y) * (Math.abs(y) - 200);
        penta.relationsData.values.owner = penta.relationsData.values.team = this.arena;

        return penta;
    }
}

/**
 * ball Gamemode Arena
 */
export default class ballArena extends ArenaEntity {
    /** Controller of all shapes in the arena. */
	protected shapes: CustomShapeManager = new CustomShapeManager(this);

    public constructor(game: GameServer) {
        super(game);

        this.arenaData.values.flags |= ArenaFlags.canUseCheats;
        this.updateBounds(3500, 3500);

        const ball = new LiveWall(this.game, 0, -800, 400, 1500);
        ball.physicsData.values.sides = 4;
        ball.styleData.values.color = Color.Box;
        ball.physicsData.values.size = 200;
        ball.physicsData.values.absorbtionFactor = 0;
        ball.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball.relationsData.values.team = ball;
        const ball2 = new LiveWall(this.game, 400, -800, 400, 1500);
        ball2.physicsData.values.sides = 4;
        ball2.styleData.values.color = Color.Box;
        ball2.physicsData.values.size = 200;
        ball2.physicsData.values.absorbtionFactor = 0;
        ball2.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball2.relationsData.values.team = ball2;
        const ball3 = new LiveWall(this.game, -400, -800, 400, 1500);
        ball3.physicsData.values.sides = 4;
        ball3.styleData.values.color = Color.Box;
        ball3.physicsData.values.size = 200;
        ball3.physicsData.values.absorbtionFactor = 0;
        ball3.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball3.relationsData.values.team = ball3;
        const ball4 = new LiveWall(this.game, 800, -800, 400, 1500);
        ball4.physicsData.values.sides = 4;
        ball4.styleData.values.color = Color.Box;
        ball4.physicsData.values.size = 200;
        ball4.physicsData.values.absorbtionFactor = 0;
        ball4.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball4.relationsData.values.team = ball4;
        const ball5 = new LiveWall(this.game, -800, -800, 400, 1500);
        ball5.physicsData.values.sides = 4;
        ball5.styleData.values.color = Color.Box;
        ball5.physicsData.values.size = 200;
        ball5.physicsData.values.absorbtionFactor = 0;
        ball5.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        ball5.relationsData.values.team = ball5;
        const wall2 = new MazeWall(this.game, 0, 700, 400, 1500);
        wall2.physicsData.flags |= PhysicsFlags.canEscapeArena
        const wall3 = new MazeWall(this.game, 1400, 200, 3000, 350);
        wall3.physicsData.flags |= PhysicsFlags.canEscapeArena
        const wall4 = new MazeWall(this.game, -900, 700, 1500, 350);
        wall4.physicsData.flags |= PhysicsFlags.canEscapeArena
        const dall = new ObjectEntity(game);
        dall.nameData = new NameGroup(dall);
        dall.nameData.values.name = "im pacman"
        dall.physicsData.values.sides = 1;
        dall.styleData.values.color = Color.ScoreboardBar;
        dall.physicsData.values.size = 100;
        dall.physicsData.values.absorbtionFactor = 10;
        dall.physicsData.values.flags |= PhysicsFlags.isBase | PhysicsFlags.noOwnTeamCollision;
        dall.relationsData.values.team = dall;
    }
}