/*
 * @Author: Ying
 * @Date: 2020-09-14 21:56:10
 * @LastEditTime: 2020-09-15 10:06:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mini-react\mini-react.js
 */
class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type);
    }

    setAttribute(name, value) {
        this.root.setAttribute(name, value);
    }

    appendChild(component) {
        this.root.appendChild(component.root);
    }
}

class TextWrapper {
    constructor(content) {
        this.root = document.createTextNode(content);
    }

    setAttribute(name, value) {
        this.root.setAttribute(name, value);
    }
}

export class Component {
    constructor() {
        this.props = Object.create(null);
        this.children = [];
        this._root;
    }

    setAttribute(name, value) {
        this.props[name] = value;
    }

    appendChild(component) {
        this.children.push(component);
    }

    get root() {
        if (!this._root) {
            this._root = this.render().root;
        }
        return this._root;
    }
}

export function render(component, parentElement) {
    parentElement.appendChild(component.root);
}

export function createElement(type, attributes, ...children) {
    let e;
    if (typeof type === "string") {
        e = new ElementWrapper(type);
    } else {
        e = new type;
    }

    for (let key in attributes) {
        e.setAttribute(key, attributes[key]);
    }

    for (let child of children) {
        if (typeof child === "object" && child instanceof Array) {
            child.forEach(subChild => {
                e.appendChild(subChild);
            });
            continue;
        }

        if (typeof child === "string") {
            child = new TextWrapper(child);
        }
        e.appendChild(child);
    }

    return e;
}
