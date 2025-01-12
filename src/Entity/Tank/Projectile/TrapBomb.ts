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

/** * /
 * Barrel definition for the skimmer skimmer's barrel.
 */
const SkimmerBarrelDefinition: BarrelDefinition = {
    angle:  0.3,
    offset: 0,
    size: 0,
    width: 42,
    delay: 4.26666666667,
    reload: 0.65,
    recoil: 0,
    isTrapezoid: false,
    trapezoidDirection: 0,
    addon: null,
    bullet: {
        type: "trap",
        health: 0.30,
        damage: 3 / 5,
        speed: 1.1,
        scatterRate: 1,
        lifeLength: 1.5,
        sizeRatio: 1,
        absorbtionFactor: 1
    }
};
const SkimmerBarrelDefinition2: BarrelDefinition = {
    angle:  0.6,
    offset: 0,
    size: 0,
    width: 42,
    delay: 4.26666666667,
    reload: 0.65,
    recoil: 0,
    isTrapezoid: false,
    trapezoidDirection: 0,
    addon: null,
    bullet: {
        type: "trap",
        health: 0.3,
        damage: 3 / 5,
        speed: 1.1,
        scatterRate: 1,
        lifeLength: 1.5,
        sizeRatio: 1,
        absorbtionFactor: 1
    }
};
const SkimmerBarrelDefinition3: BarrelDefinition = {
    angle:  0.9,
    offset: 0,
    size: 0,
    width: 42,
    delay: 4.26666666667,
    reload: 0.65,
    recoil: 0,
    isTrapezoid: false,
    trapezoidDirection: 0,
    addon: null,
    bullet: {
        type: "trap",
        health: 0.3,
        damage: 3 / 5,
        speed: 1.1,
        scatterRate: 1,
        lifeLength: 1.5,
        sizeRatio: 1,
        absorbtionFactor: 1
    }
};
const SkimmerBarrelDefinition4: BarrelDefinition = {
    angle:  1.2,
    offset: 0,
    size: 0,
    width: 42,
    delay: 4.26666666667,
    reload: 0.65,
    recoil: 0,
    isTrapezoid: false,
    trapezoidDirection: 0,
    addon: null,
    bullet: {
        type: "trap",
        health: 0.3,
        damage: 3 / 5,
        speed: 1.1,
        scatterRate: 1,
        lifeLength: 1.5,
        sizeRatio: 1,
        absorbtionFactor: 1
    }
};
const SkimmerBarrelDefinition5: BarrelDefinition = {
    angle:  1.5,
    offset: 0,
    size: 0,
    width: 42,
    delay: 4.26666666667,
    reload: 0.65,
    recoil: 0,
    isTrapezoid: false,
    trapezoidDirection: 0,
    addon: null,
    bullet: {
        type: "trap",
        health: 0.3,
        damage: 3 / 5,
        speed: 1.1,
        scatterRate: 1,
        lifeLength: 1.5,
        sizeRatio: 1,
        absorbtionFactor: 1
    }
};


const SkimmerBarrelDefinition6: BarrelDefinition = {
    angle:  1.8,
    offset: 0,
    size: 0,
    width: 42,
    delay: 4.26666666667,
    reload: 0.65,
    recoil: 0,
    isTrapezoid: false,
    trapezoidDirection: 0,
    addon: null,
    bullet: {
        type: "trap",
        health: 0.3,
        damage: 3 / 5,
        speed: 1.1,
        scatterRate: 1,
        lifeLength: 1.5,
        sizeRatio: 1,
        absorbtionFactor: 1
    }
};
const SkimmerBarrelDefinition7: BarrelDefinition = {
    angle:  2.1,
    offset: 0,
    size: 0,
    width: 42,
    delay: 4.26666666667,
    reload: 0.65,
    recoil: 0,
    isTrapezoid: false,
    trapezoidDirection: 0,
    addon: null,
    bullet: {
        type: "trap",
        health: 0.3,
        damage: 3 / 5,
        speed: 1.1,
        scatterRate: 1,
        lifeLength: 1.5,
        sizeRatio: 1,
        absorbtionFactor: 1
    }
};
const SkimmerBarrelDefinition8: BarrelDefinition = {
    angle:  2.4,
    offset: 0,
    size: 0,
    width: 42,
    delay: 4.26666666667,
    reload: 0.65,
    recoil: 0,
    isTrapezoid: false,
    trapezoidDirection: 0,
    addon: null,
    bullet: {
        type: "trap",
        health: 0.3,
        damage: 3 / 5,
        speed: 1.1,
        scatterRate: 1,
        lifeLength: 1.5,
        sizeRatio: 1,
        absorbtionFactor: 1
    }
};
const SkimmerBarrelDefinition9: BarrelDefinition = {
    angle:  2.7,
    offset: 0,
    size: 0,
    width: 42,
    delay: 4.26666666667,
    reload: 0.65,
    recoil: 0,
    isTrapezoid: false,
    trapezoidDirection: 0,
    addon: null,
    bullet: {
        type: "trap",
        health: 0.3,
        damage: 3 / 5,
        speed: 1.1,
        scatterRate: 1,
        lifeLength: 1.5,
        sizeRatio: 1,
        absorbtionFactor: 1
    }
};
const SkimmerBarrelDefinition10: BarrelDefinition = {
    angle:  3,
    offset: 0,
    size: 0,
    width: 42,
    delay: 4.26666666667,
    reload: 0.65,
    recoil: 0,
    isTrapezoid: false,
    trapezoidDirection: 0,
    addon: null,
    bullet: {
        type: "trap",
        health: 0.3,
        damage: 3 / 5,
        speed: 1.1,
        scatterRate: 1,
        lifeLength: 1.5,
        sizeRatio: 1,
        absorbtionFactor: 1
    }
};
const SkimmerBarrelDefinition11: BarrelDefinition = {
    angle:  3.3,
    offset: 0,
    size: 0,
    width: 42,
    delay: 4.26666666667,
    reload: 0.65,
    recoil: 0,
    isTrapezoid: false,
    trapezoidDirection: 0,
    addon: null,
    bullet: {
        type: "trap",
        health: 0.3,
        damage: 3 / 5,
        speed: 1.1,
        scatterRate: 1,
        lifeLength: 1.5,
        sizeRatio: 1,
        absorbtionFactor: 1
    }
};
const SkimmerBarrelDefinition12: BarrelDefinition = {
    angle:  -0.3,
    offset: 0,
    size: 0,
    width: 42,
    delay: 4.26666666667,
    reload: 0.65,
    recoil: 0,
    isTrapezoid: false,
    trapezoidDirection: 0,
    addon: null,
    bullet: {
        type: "trap",
        health: 0.3,
        damage: 3 / 5,
        speed: 1.1,
        scatterRate: 1,
        lifeLength: 1.5,
        sizeRatio: 1,
        absorbtionFactor: 1
    }
};
const SkimmerBarrelDefinition13: BarrelDefinition = {
    angle:  -0.6,
    offset: 0,
    size: 0,
    width: 42,
    delay: 4.26666666667,
    reload: 0.65,
    recoil: 0,
    isTrapezoid: false,
    trapezoidDirection: 0,
    addon: null,
    bullet: {
        type: "trap",
        health: 0.3,
        damage: 3 / 5,
        speed: 1.1,
        scatterRate: 1,
        lifeLength: 1.5,
        sizeRatio: 1,
        absorbtionFactor: 1
    }
};


const SkimmerBarrelDefinition14: BarrelDefinition = {
    angle:  -0.9,
    offset: 0,
    size: 0,
    width: 42,
    delay: 4.26666666667,
    reload: 0.65,
    recoil: 0,
    isTrapezoid: false,
    trapezoidDirection: 0,
    addon: null,
    bullet: {
        type: "trap",
        health: 0.3,
        damage: 3 / 5,
        speed: 1.1,
        scatterRate: 1,
        lifeLength: 1.5,
        sizeRatio: 1,
        absorbtionFactor: 1
    }
};
const SkimmerBarrelDefinition15: BarrelDefinition = {
    angle:  -1.2,
    offset: 0,
    size: 0,
    width: 42,
    delay: 4.26666666667,
    reload: 0.65,
    recoil: 0,
    isTrapezoid: false,
    trapezoidDirection: 0,
    addon: null,
    bullet: {
        type: "trap",
        health: 0.3,
        damage: 3 / 5,
        speed: 1.1,
        scatterRate: 1,
        lifeLength: 1.5,
        sizeRatio: 1,
        absorbtionFactor: 1
    }
};
const SkimmerBarrelDefinition16: BarrelDefinition = {
    angle:  -1.5,
    offset: 0,
    size: 0,
    width: 42,
    delay: 4.26666666667,
    reload: 0.65,
    recoil: 0,
    isTrapezoid: false,
    trapezoidDirection: 0,
    addon: null,
    bullet: {
        type: "trap",
        health: 0.3,
        damage: 3 / 5,
        speed: 1.1,
        scatterRate: 1,
        lifeLength: 1.5,
        sizeRatio: 1,
        absorbtionFactor: 1
    }
};
const SkimmerBarrelDefinition17: BarrelDefinition = {
    angle:  -1.8,
    offset: 0,
    size: 0,
    width: 42,
    delay: 4.26666666667,
    reload: 0.65,
    recoil: 0,
    isTrapezoid: false,
    trapezoidDirection: 0,
    addon: null,
    bullet: {
        type: "trap",
        health: 0.3,
        damage: 3 / 5,
        speed: 1.1,
        scatterRate: 1,
        lifeLength: 1.5,
        sizeRatio: 1,
        absorbtionFactor: 1
    }
};
const SkimmerBarrelDefinition18: BarrelDefinition = {
    angle:  -2.1,
    offset: 0,
    size: 0,
    width: 42,
    delay: 4.26666666667,
    reload: 0.65,
    recoil: 0,
    isTrapezoid: false,
    trapezoidDirection: 0,
    addon: null,
    bullet: {
        type: "trap",
        health: 0.3,
        damage: 3 / 5,
        speed: 1.1,
        scatterRate: 1,
        lifeLength: 1.5,
        sizeRatio: 1,
        absorbtionFactor: 1
    }
};
const SkimmerBarrelDefinition19: BarrelDefinition = {
    angle:  -2.4,
    offset: 0,
    size: 0,
    width: 42,
    delay: 4.26666666667,
    reload: 0.65,
    recoil: 0,
    isTrapezoid: false,
    trapezoidDirection: 0,
    addon: null,
    bullet: {
        type: "trap",
        health: 0.3,
        damage: 3 / 5,
        speed: 1.1,
        scatterRate: 1,
        lifeLength: 1.5,
        sizeRatio: 1,
        absorbtionFactor: 1
    }
};
const SkimmerBarrelDefinition20: BarrelDefinition = {
    angle:  -2.7,
    offset: 0,
    size: 0,
    width: 42,
    delay: 4.26666666667,
    reload: 0.65,
    recoil: 0,
    isTrapezoid: false,
    trapezoidDirection: 0,
    addon: null,
    bullet: {
        type: "trap",
        health: 0.3,
        damage: 3 / 5,
        speed: 1.1,
        scatterRate: 1,
        lifeLength: 1.5,
        sizeRatio: 1,
        absorbtionFactor: 1
    }
};

/**
 * Represents all skimmereer skimmers in game.
 */
export default class skimmer extends Bullet implements BarrelBase {
    /** Default speed the skimmer spins */
    public static BASE_ROTATION = 0.1;

    /** The skimmer's barrels */
    private skimmerBarrels: Barrel[];

    /** The camera entity (used as team) of the skimmer. */
    public cameraEntity: CameraEntity;
    /** The reload time of the skimmer's barrel. */
    public reloadTime = 15;
    /** The inputs for when to shoot or not. (skimmer) */
    public inputs: Inputs;

    /** The direction the bullet will rotating in. */
    


    public constructor(barrel: Barrel, tank: BarrelBase, tankDefinition: TankDefinition | null, shootAngle: number, direction: number) {
        super(barrel, tank, tankDefinition, shootAngle);

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
        const s2Definition = {...SkimmerBarrelDefinition,SkimmerBarrelDefinition2, SkimmerBarrelDefinition3, SkimmerBarrelDefinition4, SkimmerBarrelDefinition5, SkimmerBarrelDefinition6, SkimmerBarrelDefinition7, SkimmerBarrelDefinition8, SkimmerBarrelDefinition9, SkimmerBarrelDefinition10, SkimmerBarrelDefinition11, SkimmerBarrelDefinition12, SkimmerBarrelDefinition13, SkimmerBarrelDefinition14, SkimmerBarrelDefinition15, SkimmerBarrelDefinition16, SkimmerBarrelDefinition17, SkimmerBarrelDefinition18, SkimmerBarrelDefinition19, SkimmerBarrelDefinition20 };
        s2Definition.angle += Math.PI
        const s2 = new class extends Barrel {
            // Keep the width constant
            protected resize() {
                super.resize();
                this.physicsData.width = this.definition.width
            }
        }(this, SkimmerBarrelDefinition2);
const s3Definition = {...SkimmerBarrelDefinition3};
        s3Definition.angle += Math.PI
        const s3 = new class extends Barrel {
            // Keep the width constant
            protected resize() {
                super.resize();
                this.physicsData.width = this.definition.width
            }
        }(this, SkimmerBarrelDefinition3);
const s4Definition = {...SkimmerBarrelDefinition4};
        s4Definition.angle += Math.PI
 const s4 = new class extends Barrel {
            // Keep the width constant
            protected resize() {
                super.resize();
                this.physicsData.width = this.definition.width
            }
        }(this, SkimmerBarrelDefinition4);
const s5Definition = {...SkimmerBarrelDefinition5};
        s5Definition.angle += Math.PI
 const s5 = new class extends Barrel {
            // Keep the width constant
            protected resize() {
                super.resize();
                this.physicsData.width = this.definition.width
            }
        }(this, SkimmerBarrelDefinition5);
const s6Definition = {...SkimmerBarrelDefinition6};
        s6Definition.angle += Math.PI
 const s6 = new class extends Barrel {
            // Keep the width constant
            protected resize() {
                super.resize();
                this.physicsData.width = this.definition.width
            }
        }(this, SkimmerBarrelDefinition6);
const s7Definition = {...SkimmerBarrelDefinition7};
        s7Definition.angle += Math.PI
 const s7 = new class extends Barrel {
            // Keep the width constant
            protected resize() {
                super.resize();
                this.physicsData.width = this.definition.width
            }
        }(this, SkimmerBarrelDefinition7);
const s8Definition = {...SkimmerBarrelDefinition8};
        s8Definition.angle += Math.PI
 const s8 = new class extends Barrel {
            // Keep the width constant
            protected resize() {
                super.resize();
                this.physicsData.width = this.definition.width
            }
        }(this, SkimmerBarrelDefinition8);
const s9Definition = {...SkimmerBarrelDefinition9};
        s9Definition.angle += Math.PI
 const s9 = new class extends Barrel {
            // Keep the width constant
            protected resize() {
                super.resize();
                this.physicsData.width = this.definition.width
            }
        }(this, SkimmerBarrelDefinition9);
        s1.styleData.values.color = this.styleData.values.color;
        s2.styleData.values.color = this.styleData.values.color;
const s10Definition = {...SkimmerBarrelDefinition10};
        s10Definition.angle += Math.PI
 const s10 = new class extends Barrel {
            // Keep the width constant
            protected resize() {
                super.resize();
                this.physicsData.width = this.definition.width
            }
        }(this, SkimmerBarrelDefinition10);
const s11Definition = {...SkimmerBarrelDefinition11};
        s11Definition.angle += Math.PI
 const s11 = new class extends Barrel {
            // Keep the width constant
            protected resize() {
                super.resize();
                this.physicsData.width = this.definition.width
            }
        }(this, SkimmerBarrelDefinition11);
const s12Definition = {...SkimmerBarrelDefinition12};
        s12Definition.angle += Math.PI
 const s12 = new class extends Barrel {
            // Keep the width constant
            protected resize() {
                super.resize();
                this.physicsData.width = this.definition.width
            }
        }(this, SkimmerBarrelDefinition12);
const s13Definition = {...SkimmerBarrelDefinition13};
        s13Definition.angle += Math.PI
 const s13 = new class extends Barrel {
            // Keep the width constant
            protected resize() {
                super.resize();
                this.physicsData.width = this.definition.width
            }
        }(this, SkimmerBarrelDefinition13);
const s14Definition = {...SkimmerBarrelDefinition14};
        s14Definition.angle += Math.PI
 const s14 = new class extends Barrel {
            // Keep the width constant
            protected resize() {
                super.resize();
                this.physicsData.width = this.definition.width
            }
        }(this, SkimmerBarrelDefinition14);
const s15Definition = {...SkimmerBarrelDefinition15};
        s15Definition.angle += Math.PI
 const s15 = new class extends Barrel {
            // Keep the width constant
            protected resize() {
                super.resize();
                this.physicsData.width = this.definition.width
            }
        }(this, SkimmerBarrelDefinition15);
const s16Definition = {...SkimmerBarrelDefinition16};
        s16Definition.angle += Math.PI
 const s16 = new class extends Barrel {
            // Keep the width constant
            protected resize() {
                super.resize();
                this.physicsData.width = this.definition.width
            }
        }(this, SkimmerBarrelDefinition16);
const s17Definition = {...SkimmerBarrelDefinition17};
        s17Definition.angle += Math.PI
 const s17 = new class extends Barrel {
            // Keep the width constant
            protected resize() {
                super.resize();
                this.physicsData.width = this.definition.width
            }
        }(this, SkimmerBarrelDefinition17);
const s18Definition = {...SkimmerBarrelDefinition18};
        s18Definition.angle += Math.PI
 const s18 = new class extends Barrel {
            // Keep the width constant
            protected resize() {
                super.resize();
                this.physicsData.width = this.definition.width
            }
        }(this, SkimmerBarrelDefinition18);
const s19Definition = {...SkimmerBarrelDefinition19};
        s19Definition.angle += Math.PI
 const s19 = new class extends Barrel {
            // Keep the width constant
            protected resize() {
                super.resize();
                this.physicsData.width = this.definition.width
            }
        }(this, SkimmerBarrelDefinition19);
const s20Definition = {...SkimmerBarrelDefinition20};
        s20Definition.angle += Math.PI
 const s20 = new class extends Barrel {
            // Keep the width constant
            protected resize() {
                super.resize();
                this.physicsData.width = this.definition.width
            }
        }(this, SkimmerBarrelDefinition20);

        skimmerBarrels.push(s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20);

        this.inputs = new Inputs();
        this.inputs.flags |= InputFlags.leftclick;
        this.baseAccel=25
    }

    public get sizeFactor() {
        return this.physicsData.values.size / 50;
    }

    public tick(tick: number) {
        this.reloadTime = this.tank.reloadTime;
        super.tick(tick);

        if (this.deletionAnimation) return;
        // Only accurate on current version, but we dont want that
        // if (!Entity.exists(this.barrelEntity.rootParent) && (this.inputs.flags & InputFlags.leftclick)) this.inputs.flags ^= InputFlags.leftclick;
    }
}
