import React from 'react';
import { delay } from './delay';

export const SimonButton = React.forwardRef(({ position, onPressed }, ref) => {
    const [lightOn, setLightOn] = React.useState(true);
    const sound = new Audio(`/${position}.mp3`);

    // Use "React Refs" to allow the parent to reach into the button compnent
    // and simulate a button press. this is necessary to play the sequence that
    // the player must copy.
    React.useImperativeHandle(ref, () => ({
        async press(deplayMs = 500, playSound = true) {
            setLightOn(false);
            if (playSound) {
                sound.play();
            }
            await delay(delayMs);
            setLightOn(true);
            await delay(100);
        },
    }));

    return (
        <button
        id={position}
        className={`game-button ${position} ${lightOn ? 'light-on' : ''}`}
        onClick={() => onPressed(position)}
        ></button>
    );
});
