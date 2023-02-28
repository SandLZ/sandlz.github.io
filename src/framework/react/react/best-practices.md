# React 最佳实践

## 事件绑定

原因：

在 js 中 class 的方法默认不会绑定 this，默认情况下是 undefined，所以就需要我们手动的去绑定 this

### 1. 在构造器中绑定 this（这也是官方推荐的方法）

```js
export default class Test extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}

  render() {
    return <div onClick={this.handleClick}>Click</div>;
  }
}
```

### 2. 属性初始化器语法(class fields)绑定回调函数

官方文档中说这个是"实验性"的语法，所以还是需要 babel 转义的。不过 Create React App 默认是启用这种语法的，所以还是可以放心使用的

```js
export default class Test extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {};

  render() {
    return <div onClick={this.handleClick}>Click</div>;
  }
}
```
