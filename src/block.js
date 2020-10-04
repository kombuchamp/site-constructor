export class Block {
    constructor({ type, value, options = {} }) {
        this.type = type;
        this.value = value;
        this.options = options;
    }

    acceptVisitor(visitor) {
        return (visitor[this.type] || visitor._default)(this);
    }
}
