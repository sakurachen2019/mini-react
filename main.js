/*
 * @Author: Ying
 * @Date: 2020-09-14 14:46:18
 * @LastEditTime: 2020-09-15 10:37:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mini-react\main.js
 */
import { Component, createElement, render } from './mini-react.js';

class MyComponent extends Component {
    render() {
        // return createElement("div", this.props, this.children);
        let e = <div style="color:#3f50b5; padding-top:2em; padding-left:4em">
            {this.children}
        </div>;
        for (let key in this.props) {
            e.setAttribute(key, this.props[key]);
        }
        return e;
    }
}

render(<MyComponent id="parentId" class="parentClass">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <MyComponent id="childId" class="childClass" style="color:#f44336; padding-left:4em">
        <div>D</div>
    </MyComponent>
</MyComponent>, document.body);