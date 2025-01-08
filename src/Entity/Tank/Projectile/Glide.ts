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

import Barrel from "../Barrel";
import Bullet from "./Bullet";

import { InputFlags } from "../../../Const/Enums";
import { BarrelDefinition, TankDefinition } from "../../../Const/TankDefinitions";
import { Inputs } from "../../AI";
import { BarrelBase } from "../TankBody";
import { CameraEntity } from "../../../Native/Camera";

/**
 * Barrel definition for the rocketeer rocket's barrel.
 */
const RocketBarrelDefinition: BarrelDefinition = {
    angle:  2.4179938779914944,
    offset: 0,
    size: 70,
    width: 42,
    delay: 0,
    reload: 0.45,
    recoil: 3.3,
    isTrapezoid: false,
    trapezoidDirection: 0,
    addon: null,
    bullet: {
        type: "bullet",
        health: 0.3,
        damage: 3 / 5,
        speed: 1.1,
        scatterRate: 1,
        lifeLength: 0.25,
        sizeRatio: 1,
        absorbtionFactor: 1
    }
};
const RocketBarrelDefinition2: BarrelDefinition = {
     angle:  -2.4179938779914944,
    offset: 0,
    size: 70,
    width: 42,
    delay: 0,
    reload: 0.45,
    recoil: 3.3,
    isTrapezoid: false,
    trapezoidDirection: 0,
    addon: null,
    bullet: {
        type: "bullet",
        health: 0.3,
        damage: 3 / 5,
        speed: 1.1,
        scatterRate: 1,
        lifeLength: 0.25,
        sizeRatio: 1,
        absorbtionFactor: 1
    }
};
const RocketBarrelDefinition3: BarrelDefinition = {
     angle:  -2.4179938779914944,
    offset: 0,
    size: 0,
    width: 0,
    delay: 1274612468197234678,
    reload: 0.45,
    recoil: 0,
    isTrapezoid: false,
    trapezoidDirection: 0,
    addon: null,
    bullet: {
        type: "bullet",
        health: 0.3,
        damage: 3 / 5,
        speed: 1.1,
        scatterRate: 1,
        lifeLength: 0.25,
        sizeRatio: 1,
        absorbtionFactor: 1
    }
};

/**
 * Represents all rocketeer rockets in game.
 */
export default class Rocket extends Bullet implements BarrelBase {
    /** The rocket's barrel */
    private rocketBarrel: Barrel;

    /** The camera entity (used as team) of the rocket. */
    public cameraEntity: CameraEntity;
    /** The reload time of the rocket's barrel. */
    public reloadTime = 1;
    /** The inputs for when to shoot or not. (Rocket) */
    public inputs = new Inputs();


    public constructor(barrel: Barrel, tank: BarrelBase, tankDefinition: TankDefinition | null, shootAngle: number) {
        super(barrel, tank, tankDefinition, shootAngle);
        
        this.cameraEntity = tank.cameraEntity;

        const rocketBarrel = this.rocketBarrel = new Barrel(this, {...RocketBarrelDefinition});
        rocketBarrel.styleData.values.color = this.styleData.values.color;
         const rocketBarrel2 = this.rocketBarrel = new Barrel(this, {...RocketBarrelDefinition2});
        rocketBarrel2.styleData.values.color = this.styleData.values.color;
        const rocketBarrel3 = this.rocketBarrel = new Barrel(this, {...RocketBarrelDefinition3});
        rocketBarrel3.styleData.values.color = this.styleData.values.color;
    }

    public get sizeFactor() {
        return this.physicsData.values.size / 50;
    }

    public tick(tick: number) {
        this.reloadTime = this.tank.reloadTime;
        if (!this.deletionAnimation && this.rocketBarrel) this.rocketBarrel.definition.width = ((this.barrelEntity.definition.width / 2) * RocketBarrelDefinition.width) / this.physicsData.values.size;

        super.tick(tick);

        if (this.deletionAnimation) return;
        // not fully accurate
        if (tick - this.spawnTick >= this.tank.reloadTime) this.inputs.flags |= InputFlags.leftclick;
        // Only accurate on current version, but we dont want that
        // if (!Entity.exists(this.barrelEntity.rootParent) && (this.inputs.flags & InputFlags.leftclick)) this.inputs.flags ^= InputFlags.leftclick; 
    }
}
