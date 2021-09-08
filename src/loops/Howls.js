import {Howl, Howler} from 'howler';
import futureFunkFile from "./future_funk.mp3";
import stutterBreakbeatsFile from "./stutter_breakbeats.mp3";
import bassWarwickFile from "./bass_warwick.mp3";
import electricGuitarFile from "./electric_guitar.mp3";
import stompySloshFile from "./stompy_slosh.mp3";
import groove1File from "./groove1.mp3";
import groove2File from "./groove2.mp3";
import mazePoliticsFile from "./maze_politics.mp3";
import silentStarFile from "./silent_star.mp3";

export const futureFunk = new Howl({
    src: [futureFunkFile],
});
export const stutterBreakbeats = new Howl({
    src: [stutterBreakbeatsFile],
});
export const bassWarwick = new Howl({
    src: [bassWarwickFile],
});
export const electricGuitar = new Howl({
    src: [electricGuitarFile],
});
export const stompySlosh = new Howl({
    src: [stompySloshFile],
});
export const silentStar = new Howl({
    src: [silentStarFile],
});
export const groove1 = new Howl({
    src: [groove1File],
});
export const groove2 = new Howl({
    src: [groove2File],
});
export const mazePolitics = new Howl({
    src: [mazePoliticsFile],
});