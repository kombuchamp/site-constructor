import { templateVisitor } from './templateVisitor';

export class Model {
    constructor(node, ...blocks) {
        this.node = node;
        this.blocks = blocks;
        this.render();
    }
    add(block) {
        this.blocks.push(block);
        this.update();
    }
    remove(idx) {
        if (idx == null) {
            this.blocks.pop();
        } else {
            this.blocks.splice(idx, 1);
        }
        this.update();
    }
    render() {
        this.blocks.forEach(block => {
            let html = block.acceptVisitor(templateVisitor);
            this.node.insertAdjacentHTML('beforeend', html);
        });
    }
    clear() {
        this.node.innerHTML = '';
    }
    update() {
        this.clear();
        this.render();
    }
}
