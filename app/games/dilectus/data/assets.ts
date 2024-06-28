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
    {anim: blue, name: 'blue', button: forest},
    {anim: red, name: 'red', button: forest},
    {anim: green, name: 'green', button: forest},
    {anim: purple, name: 'purple', button: forest},
    {anim: 'none', name: 'none', button: grey},
    {anim: 'none', name: 'none', button: grey},
    {anim: 'none', name: 'none', button: grey},
    {anim: 'none', name: 'none', button: grey},
    {anim: 'none', name: 'none', button: grey},
];

export const background = [
    {img: forest, name: 'forest', button: forest},
    {img: mountains, name: 'mountains', button: mountains},
    {img: desert, name: 'desert', button: desert},
    {img: 'none', name: 'none', button: grey},
    {img: 'none', name: 'none', button: grey},
    {img: 'none', name: 'none', button: grey},
    {img: 'none', name: 'none', button: grey},
    {img: 'none', name: 'none', button: grey},
    {img: 'none', name: 'none', button: grey},
];

export const eyes = [
    {anim: normal, name: 'normal', button: forest},
    {anim: angry, name: 'angry', button: forest},
    {anim: 'none', name: 'none', button: grey},
    {anim: 'none', name: 'none', button: grey},
    {anim: 'none', name: 'none', button: grey},
    {anim: 'none', name: 'none', button: grey},
    {anim: 'none', name: 'none', button: grey},
    {anim: 'none', name: 'none', button: grey},
    {anim: 'none', name: 'none', button: grey}
];

export const fren = [
    {anim: shroom, name: 'shroom', button: forest},
    {anim: snail, name: 'snail', button: forest},
    {anim: 'none', name: 'none', button: grey},
    {anim: 'none', name: 'none', button: grey},
    {anim: 'none', name: 'none', button: grey},
    {anim: 'none', name: 'none', button: grey},
    {anim: 'none', name: 'none', button: grey},
    {anim: 'none', name: 'none', button: grey},
    {anim: 'none', name: 'none', button: grey}
]