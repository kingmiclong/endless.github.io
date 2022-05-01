/*  Button Prefab Used in order to handle the minigame
 *  Author: Vincent Kurniadjaja
 *
 */

class Button extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, hp,) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);

        // Variables to track button behavior
        this.isClickable = false;
        this.refreshTime = (Math.floor(Math.random() * 10) + 5) * 100;
        this.gain = 10;

        // If tap/click is in button and button is on, set button to off resets timer to a random time
        // Also increases the hp
        this.setInteractive();

        this.on('pointerdown', () => {
            if (this.isClickable == true) {
                this.isClickable = false;
                this.refreshTime = (Math.floor(Math.random() * 10) + 5) * 100;
                hp.increase(this.gain);
            }
        });
        

    }


    update() {
        // Decrements Internal Timer
        if (this.isClickable == false && this.refreshTime > 0) {
            this.refreshTime -= 1;
        }

        // Sets button to 'on' when timer hits 0
        if (this.refreshTime <= 0) {
            this.isClickable = true;
        }

        // Toggles Button Images
        if (this.isClickable == true) {
            this.setFrame(0);
        } else {
            this.setFrame(1);
        }

        
    }


    reset() {
        this.isClickable = false;
        this.refreshTime = 60;
    }
}