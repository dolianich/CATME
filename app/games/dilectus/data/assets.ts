import blue from './src/body/blue.json';
import red from './src/body/red.json';
import green from './src/body/green.json';
import purple from './src/body/purple.json';
import yellow from './src/body/yellow.json';
import forest from './src/background/forest.svg';
import mountains from './src/background/mountains.svg';
import desert from './src/background/desert.svg';
import normal from './src/eyes/normal.json';
import angry from './src/eyes/angry.json';
import shroom from './src/frens/shroom.json';
import snail from './src/frens/snail.json';
import grey from './src/general/grey.svg';

export const body = [
    {id: 0 ,anim: blue, name: 'blue', button: forest},
    {id: 1, anim: red, name: 'red', button: forest},
    {id: 2, anim: green, name: 'green', button: forest},
    {id: 3, anim: purple, name: 'purple', button: forest},
    {id: 4, anim: 'none', name: 'none', button: grey},
    {id: 5, anim: 'none', name: 'none', button: grey},
    {id: 6, anim: 'none', name: 'none', button: grey},
    {id: 7, anim: 'none', name: 'none', button: grey},
    {id: 8, anim: 'none', name: 'none', button: grey},
];

export const background = [
    {id: 0, img: forest, name: 'forest', button: forest},
    {id: 1, img: mountains, name: 'mountains', button: mountains},
    {id: 2, img: desert, name: 'desert', button: desert},
    {id: 3, img: 'none', name: 'none', button: grey},
    {id: 4, img: 'none', name: 'none', button: grey},
    {id: 5, img: 'none', name: 'none', button: grey},
    {id: 6, img: 'none', name: 'none', button: grey},
    {id: 7, img: 'none', name: 'none', button: grey},
    {id: 8, img: 'none', name: 'none', button: grey},
];

export const eyes = [
    {id: 0, anim: normal, name: 'normal', button: forest},
    {id: 1, anim: angry, name: 'angry', button: forest},
    {id: 2, anim: 'none', name: 'none', button: grey},
    {id: 3, anim: 'none', name: 'none', button: grey},
    {id: 4, anim: 'none', name: 'none', button: grey},
    {id: 5, anim: 'none', name: 'none', button: grey},
    {id: 6, anim: 'none', name: 'none', button: grey},
    {id: 7, anim: 'none', name: 'none', button: grey},
    {id: 8, anim: 'none', name: 'none', button: grey}
];

export const fren = [
    {id: 0, anim: shroom, name: 'shroom', button: forest},
    {id: 1, anim: snail, name: 'snail', button: forest},
    {id: 2, anim: 'none', name: 'none', button: grey},
    {id: 3, anim: 'none', name: 'none', button: grey},
    {id: 4, anim: 'none', name: 'none', button: grey},
    {id: 5, anim: 'none', name: 'none', button: grey},
    {id: 6, anim: 'none', name: 'none', button: grey},
    {id: 7, anim: 'none', name: 'none', button: grey},
    {id: 8, anim: 'none', name: 'none', button: grey}
]