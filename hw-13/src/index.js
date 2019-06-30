import View from './js/view';
import Model from './js/model';
import Controler from './js/controller';
import EventEmitter from './js/event';
// import './scss/style.scss';

const view = new View;
const model = new Model;

new Controler(model,view);

view.showHandlebars('#bookmark', '#bookmark-list',model.bookmark);