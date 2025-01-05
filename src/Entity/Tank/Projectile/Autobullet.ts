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

import LivingEntity from "../../Live";
import Barrel from "../Barrel";
import Bullet from "./Bullet"

import { HealthFlags, PositionFlags, PhysicsFlags, Stat, StyleFlags } from "../../../Const/Enums";
import { TankDefinition } from "../../../Const/TankDefinitions";
import { BarrelBase } from "../TankBody";
import {CameraEntity} from "../../../Native/Camera"
import { EntityStateFlags } from "../../../Native/Entity";
import { InputFlags } from "../../../Const/Enums"

import { Addon, AddonById } from "../Addons";
import AutoTurret from "../AutoTurret"
import { Inputs } from "../../AI"

import { DevTank } from "../../../Const/DevTankDefinitions";
import { PI2 } from "../../../util";

/**
 * The trap class represents the trap (projectile) entity in diep.
 */
export default class AutoTrap extends Bullet {
    /** Number of ticks before the trap cant collide with its own team. */
    protected collisionEnd = 0;

    public cameraEntity: CameraEntity;
    /** The reload time of the rocket's barrel. */
    public reloadTime = 1;
    /** The inputs for when to shoot or not. (Rocket) */
    public inputs = new Inputs();

    private turreta: AutoTurret;

    public constructor(barrel: Barrel, tank: BarrelBase, tankDefinition: TankDefinition | null, shootAngle: number) {
        super(barrel, tank, tankDefinition, shootAngle);

        this.cameraEntity = tank.cameraEntity;

        const auto = this.turreta = new AutoTurret(this, {
            angle: 0,
            offset: 0,
            size: 48,
            width: 32,
            delay: 0.01,
            reload: 1.5,
            recoil: 0.05,
            isTrapezoid: false,
            trapezoidDirection: 0,
            addon: null,
            bullet: {
                type: "bullet",
                sizeRatio: 1,
                health: 0.45,
                damage: 0.5,
                speed: 1,
                scatterRate: 1,
                lifeLength: 0.55,
                absorbtionFactor: 1
            }
        });
        auto.positionData.values.angle = shootAngle;
        auto.ai.viewRange = 650 * tank.sizeFactor;

        const bulletDefinition = barrel.definition.bullet;

        this.baseSpeed = (barrel.bulletAccel / 2) + 30 - Math.random() * barrel.definition.bullet.scatterRate;
        this.baseAccel = 60;
        this.physicsData.values.sides = bulletDefinition.sides ?? 1;
        if (this.physicsData.values.flags & PhysicsFlags.noOwnTeamCollision) this.physicsData.values.flags ^= PhysicsFlags.noOwnTeamCollision;
        this.physicsData.values.flags |= PhysicsFlags.onlySameOwnerCollision;
        this.styleData.values.flags &= ~StyleFlags.hasNoDmgIndicator;

        this.collisionEnd = this.lifeLength >> 3;
        this.lifeLength = (600 * barrel.definition.bullet.lifeLength) >> 3;
        if (tankDefinition && tankDefinition.id === DevTank.Bouncy) this.collisionEnd = this.lifeLength - 1;
        
        // Check this?
        this.positionData.values.angle = Math.random() * PI2;

        
    }

    public get sizeFactor() {
        return this.physicsData.values.size / 40;
    }

    public tick(tick: number) {
        super.tick(tick);
        this.reloadTime = this.tank.reloadTime;



        if (this.deletionAnimation) return;
        // not fully accurate
        if (tick - this.spawnTick >= this.tank.reloadTime) this.inputs.flags |= InputFlags.leftclick;
        // Only accurate on current version, but we dont want that
        // if (!Entity.exists(this.barrelEntity.rootParent) && (this.inputs.flags & InputFlags.leftclick)) this.inputs.flags ^= InputFlags.leftclick; 

        if (tick - this.spawnTick === this.collisionEnd) {
            if (this.physicsData.values.flags & PhysicsFlags.onlySameOwnerCollision) this.physicsData.flags ^= PhysicsFlags.onlySameOwnerCollision;
            this.physicsData.values.flags |= PhysicsFlags.noOwnTeamCollision;
        }
    }
}
