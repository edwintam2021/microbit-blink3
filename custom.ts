

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace animations {
    /**
     * Blink an LED at a particular interval
     * @param x horizontal led coordinate 
     * @param y vertical led coordinate
     * @param interval time in milliseconds between blinks
     */
    //% block="blink x $x y $y every $interval ms"
    export function blink(x:number, y:number, interval:number): void {
           let sprite = game.createSprite(x,y)
           sprite.setBlink(interval)
           sprite.blink() 
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
