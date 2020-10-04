import { Model } from './model';
import { block, parseStyle } from './util';
import { Block } from './block';

const BLOCK_TYPES = ['title', 'text', 'columns', 'image'];

export class App {
    constructor(model) {
        this._site = document.getElementById('site');
        this._sidebar = document.getElementById('panel');
        this.model = model;
    }

    run() {
        this.model = new Model(
            this._site,
            ...this.model.map(block => new Block(block))
        );

        this._sidebar.insertAdjacentHTML(
            'afterbegin',
            BLOCK_TYPES.map(block).join('')
        );
        this._sidebar.insertAdjacentHTML(
            'beforeend',
            `<form name="remove">
                <button class="btn btn-danger">Remove last</button>
            </form>`
        );
        this._sidebar.addEventListener('submit', e => {
            e.preventDefault();

            let type = e.target.name;

            if (type === 'remove') {
                return this.model.remove();
            }

            let value = e.target.value.value;
            if (value.length === 0) {
                return;
            }
            if (type === 'columns') {
                // Just was lazy to add multiple inputs
                value = value.split(';');
            }
            let style = parseStyle(e.target.style.value);

            let block = new Block({ type, value, options: { style } });
            this.model.add(block);
        });
    }
}
