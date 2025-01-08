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
 * Barrel definition for the skimmer skimmer's barrel.
 */
const SkimmerBarrelDefinition: BarrelDefinition = {
    angle:  2.4179938779914944,
    offset: 0,
    size: 70,
    width: 42,
    delay: 0,
    reload: 0.35,
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
        lifeLength: 1,
        sizeRatio: 1,
        absorbtionFactor: 1
    }
};
const SkimmerBarrelDefinition2: BarrelDefinition = {
    angle:  -2.4179938779914944,
    offset: 0,
    size: 70,
    width: 42,
    delay: 0,
    reload: 0.35,
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
        lifeLength: 1,
        sizeRatio: 1,
        absorbtionFactor: 1
    }
};
const SkimmerBarrelDefinition3: BarrelDefinition = {
    angle:  3.1415926,
    offset: 0,
    size: 70,
    width: 42,
    delay: 0,
    reload: 0.35,
    recoil: 1.65,
    isTrapezoid: false,
    trapezoidDirection: 0,
    addon: null,
    bullet: {
        type: "bullet",
        health: 0.3,
        damage: 3 / 5,
        speed: 1.1,
        scatterRate: 1,
        lifeLength: 1,
        sizeRatio: 1,
        absorbtionFactor: 1
    }
};
const SkimmerBarrelDefinition4: BarrelDefinition = {
    angle:  3.1415926 / 2,
    offset: 0,
    size: 70,
    width: 42,
    delay: 0,
    reload: 0.35,
    recoil: 14,
    isTrapezoid: false,
    trapezoidDirection: 0,
    addon: null,
    bullet: {
        type: "bullet",
        health: 0.3,
        damage: 3 / 5,
        speed: 1.1,
        scatterRate: 1,
        lifeLength: 1,
        sizeRatio: 1,
        absorbtionFactor: 1
    }
};
const SkimmerBarrelDefinition5: BarrelDefinition = {
    angle:  -3.1415926 / 2,
    offset: 0,
    size: 70,
    width: 42,
    delay: 1.5,
    reload: 0.35,
    recoil: 14,
    isTrapezoid: false,
    trapezoidDirection: 0,
    addon: null,
    bullet: {
        type: "bullet",
        health: 0.3,
        damage: 3 / 5,
        speed: 1.1,
        scatterRate: 1,
        lifeLength: 1,
        sizeRatio: 1,
        absorbtionFactor: 1
    }
};

/**
 * Represents all skimmereer skimmers in game.
 */
export default class Skimmer extends Bullet implements BarrelBase {
    /** Default speed the skimmer spins */
    public static BASE_ROTATION = 100.1;

    /** The skimmer's barrels */
    private skimmerBarrels: Barrel[];

    /** The camera entity (used as team) of the skimmer. */
    public cameraEntity: CameraEntity;
    /** The reload time of the skimmer's barrel. */
    public reloadTime = 15;
    /** The inputs for when to shoot or not. (skimmer) */
    public inputs: Inputs;
    /** The direction the bullet will rotating in. */
    private rotationPerTick = Skimmer.BASE_ROTATION;


    public constructor(barrel: Barrel, tank: BarrelBase, tankDefinition: TankDefinition | null, shootAngle: number, direction: number) {
        super(barrel, tank, tankDefinition, shootAngle);

         this.rotationPerTick = direction;


        this.cameraEntity = tank.cameraEntity;

        const skimmerBarrels: Barrel[] = this.skimmerBarrels =[];

        const s1 = new class extends Barrel {
            // Keep the width constant
            protected resize() {
                super.resize();
                this.physicsData.values.width = this.definition.width
                // this.physicsData.state.width = 0;
            }
        }(this, {...SkimmerBarrelDefinition});
        const s2 = new class extends Barrel {
            // Keep the width constant
            protected resize() {
                super.resize();
                this.physicsData.values.width = this.definition.width
                // this.physicsData.state.width = 0;
            }
        }(this, {...SkimmerBarrelDefinition2});
        const s3 = new class extends Barrel {
            // Keep the width constant
            protected resize() {
                super.resize();
                this.physicsData.values.width = this.definition.width
                // this.physicsData.state.width = 0;
            }
        }(this, {...SkimmerBarrelDefinition3});
        const s4 = new class extends Barrel {
            // Keep the width constant
            protected resize() {
                super.resize();
                this.physicsData.values.width = this.definition.width
                // this.physicsData.state.width = 0;
            }
        }(this, {...SkimmerBarrelDefinition4});
        const s5 = new class extends Barrel {
            // Keep the width constant
            protected resize() {
                super.resize();
                this.physicsData.values.width = this.definition.width
                // this.physicsData.state.width = 0;
            }
        }(this, {...SkimmerBarrelDefinition5});

        s1.styleData.values.color = this.styleData.values.color;
        s2.styleData.values.color = this.styleData.values.color;
        s3.styleData.values.color = this.styleData.values.color;
        s4.styleData.values.color = this.styleData.values.color;
        s5.styleData.values.color = this.styleData.values.color;

        skimmerBarrels.push(s1, s2, s3, s4, s5);

        this.inputs = new Inputs();
        this.inputs.flags |= InputFlags.leftclick;
    }

    public get sizeFactor() {
        return this.physicsData.values.size / 50;
    }
    
    public tick(tick: number) {
        this.reloadTime = this.tank.reloadTime;
        this.positionData.angle += this.rotationPerTick = 0;
        super.tick(tick);

        if (this.deletionAnimation) return;


        // Only accurate on current version, but we dont want that
        // if (!Entity.exists(this.barrelEntity.rootParent) && (this.inputs.flags & InputFlags.leftclick)) this.inputs.flags ^= InputFlags.leftclick;
    }
}
