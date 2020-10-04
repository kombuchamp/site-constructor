import image from './assets/awesome-beholder.png';

export function row(content, style) {
    return `<div class="row" style="${stringifyStyle(style)}">${content}</div>`;
}
export function col(content, style) {
    return `<div class="col-sm" style="${stringifyStyle(
        style
    )}">${content}</div>`;
}
export function header(content, level = 1, style) {
    return `<h${level} style="${stringifyStyle(style)}">${content}</h${level}>`;
}
export function p(content, style) {
    return `<p style="${stringifyStyle(style)}">${content}</p>`;
}
export function img(src, style) {
    return `<img src="${src ?? image}" style="${stringifyStyle(style)}" />`;
}
export function block(type) {
    return `
        <form name="${type}" autocomplete="off">
            <h5>${type}</h5>
            <div class="form-group">
                <input class="form-control form-control-sm" name="value" placeholder="value${
                    type === 'columns' ? ' (semicolon separated)' : ''
                }">
            </div>
            <div class="form-group">
                <input class="form-control form-control-sm" name="style" placeholder="style">
            </div>
            <button type="submit" class="btn btn-primary btn-sm">Add</button>
        </form>
        <hr/>
    `;
}
export function stringifyStyle(style) {
    if (!style) return '';
    return Object.entries(style)
        .map(([key, val]) => `${key}:${val}`)
        .join(';');
}

export function parseStyle(style) {
    return style.split(';').reduce((acc, cur) => {
        const [k, v] = cur.split(':');
        acc[k] = v;
        return acc;
    }, {});
}
