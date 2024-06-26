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

export const body = [
    {anim: blue, name: 'blue'},
    {anim: red, name: 'red'},
    {anim: green, name: 'green'},
    {anim: purple, name: 'purple'},
    {anim: yellow, name: 'yellow'},
];

export const background = [
    {img: forest, name: 'forest'},
    {img: mountains, name: 'mountains'},
    {img: desert, name: 'desert'}
];

export const eyes = [
    {anim: normal, name: 'normal'},
    {anim: angry, name: 'angry'}
];

export const fren = [
    {anim: shroom, name: 'shroom'}
]