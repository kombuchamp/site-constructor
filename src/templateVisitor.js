import { row, col, header, p, img } from './util';

export const templateVisitor = {
    title: ({ value, options: { level, style } }) => {
        return row(col(header(value, level)), style);
    },
    text: ({ value, options: { style } }) => {
        return row(col(p(value)), style);
    },
    columns: ({ value, options: { style } }) => {
        return row(value.map(val => col(val)).join(''), style);
    },
    image: ({ value, options: { imgStyle, style } }) => {
        return row(img(value, imgStyle), style);
    },
    _default: () => '',
};
