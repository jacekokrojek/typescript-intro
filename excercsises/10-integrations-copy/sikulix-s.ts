import { app } from  './src/App';
import { screen } from  './src/Screen';
import * as path from 'path';

screen.clickSync(path.resolve("img","Plik.png"))
screen.clickSync(path.resolve("img","Zakoncz.png"))
screen.clickSync(path.resolve("img","Nie_zapisuj.png"))

let t = screen.findSync(path.resolve("img","Start.png"));
screen.dragDrop(t, [t.x + 100, t.y + 100])