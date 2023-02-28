# 结构型模式

> 结构型模式介绍如何将对象和类组装成较大的结构， 并同时保持结构的灵活和高效。

[[toc]]

## 1. 适配器（Adapter）

> 适配器模式是一种结构型设计模式， 它能使接口不兼容的对象能够相互合作。

### 1.1 方案

1. 确保至少有两个类的接口不兼容：
    - 一个无法修改 （通常是第三方、 遗留系统或者存在众多已有依赖的类） 的功能性服务类。
    - 一个或多个将受益于使用服务类的客户端类。
2. 声明客户端接口， 描述客户端如何与服务交互。

3. 创建遵循客户端接口的适配器类。 所有方法暂时都为空。

4。 在适配器类中添加一个成员变量用于保存对于服务对象的引用。 通常情况下会通过构造函数对该成员变量进行初始化， 但有时在调用其方法时将该变量传递给适配器会更方便。

5. 依次实现适配器类客户端接口的所有方法。 适配器会将实际工作委派给服务对象， 自身只负责接口或数据格式的转换。

6. 客户端必须通过客户端接口使用适配器。 这样一来， 你就可以在不影响客户端代码的情况下修改或扩展适配器。
### 1.2 场景

- 希望使用某个类， 但是其接口与其他代码不兼容时
    - 适配器模式允许你创建一个中间层类， 其可作为代码与遗留类、 第三方类或提供怪异接口的类之间的转换器。
- 需要复用这样一些类， 他们处于同一个继承体系， 并且他们又有了额外的一些共同的方法， 但是这些共同的方法不是所有在这一继承体系中的子类所具有的共性    
    - 将缺失功能添加到一个适配器类中是一种优雅得多的解决方案
### 1.3 代码示例

```ts
class Target {
    public request(): string {
        return 'Target: The default target\'s behavior.';
    }
}

class Adaptee {
    public specificRequest(): string {
        return '.eetpadA eht fo roivaheb laicepS';
    }
}

/**
 * The Adapter makes the Adaptee's interface compatible with the Target's
 * interface.
 */
class Adapter extends Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee;
    }

    public request(): string {
        const result = this.adaptee.specificRequest().split('').reverse().join('');
        return `Adapter: (TRANSLATED) ${result}`;
    }
}
```

```ts
function clientCode(target: Target) {
    console.log(target.request());
}

console.log('Client: I can work just fine with the Target objects:');
const target = new Target();
clientCode(target);

console.log('');

const adaptee = new Adaptee();
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log('');

console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter(adaptee);
clientCode(adapter);
```

```
Client: I can work just fine with the Target objects:
Target: The default target's behavior.

Client: The Adaptee class has a weird interface. See, I don't understand it:
Adaptee: .eetpadA eht fo roivaheb laicepS

Client: But I can work with it via the Adapter:
Adapter: (TRANSLATED) Special behavior of the Adaptee.
```

## 2. 桥接 （Bridge）

> 桥接模式是一种结构型设计模式， 可将一个大类或一系列紧密相关的类拆分为抽象和实现两个独立的层次结构， 从而能在开发时分别使用。

层次结构中的第一层 （通常称为抽象部分） 将包含对第二层 （实现部分） 对象的引用。 抽象部分将能将一些 （有时是绝大部分） 对自己的调用委派给实现部分的对象。 所有的实现部分都有一个通用接口， 因此它们能在抽象部分内部相互替换。

### 2.1 方案

1. 明确类中独立的维度。 独立的概念可能是： 抽象/平台， 域/基础设施， 前端/后端或接口/实现。

2. 了解客户端的业务需求， 并在抽象基类中定义它们。

3. 确定在所有平台上都可执行的业务。 并在通用实现接口中声明抽象部分所需的业务。

4. 为你域内的所有平台创建实现类， 但需确保它们遵循实现部分的接口。

5. 在抽象类中添加指向实现类型的引用成员变量。 抽象部分会将大部分工作委派给该成员变量所指向的实现对象。

6. 如果你的高层逻辑有多个变体， 则可通过扩展抽象基类为每个变体创建一个精确抽象。

7. 客户端代码必须将实现对象传递给抽象部分的构造函数才能使其能够相互关联。 此后， 客户端只需与抽象对象进行交互， 无需和实现对象打交道。
### 2.2 场景

- 要拆分或重组一个具有多重功能的庞杂类 （例如能与多个数据库服务器进行交互的类），
- 在几个独立维度上扩展一个类
- 需要在运行时切换不同实现方法
    - 顺便提一句， 最后一点是很多人混淆**桥接模式**和**策略模式**的主要原因。 记住， 设计模式并不仅是一种对类进行组织的方式， 它还能用于沟通意图和解决问题
### 2.3 代码示例

```ts
class Abstraction {
    protected implementation: Implementation;

    constructor(implementation: Implementation) {
        this.implementation = implementation;
    }

    public operation(): string {
        const result = this.implementation.operationImplementation();
        return `Abstraction: Base operation with:\n${result}`;
    }
}

class ExtendedAbstraction extends Abstraction {
    public operation(): string {
        const result = this.implementation.operationImplementation();
        return `ExtendedAbstraction: Extended operation with:\n${result}`;
    }
}

interface Implementation {
    operationImplementation(): string;
}

class ConcreteImplementationA implements Implementation {
    public operationImplementation(): string {
        return 'ConcreteImplementationA: Here\'s the result on the platform A.';
    }
}

class ConcreteImplementationB implements Implementation {
    public operationImplementation(): string {
        return 'ConcreteImplementationB: Here\'s the result on the platform B.';
    }
}

function clientCode(abstraction: Abstraction) {
    // ..

    console.log(abstraction.operation());

    // ..
}

let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);
clientCode(abstraction);

console.log('');

implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);
clientCode(abstraction);
```

## 3. 组合（Composite）
> 亦称： 对象树、Object Tree、Composite

> 组合模式是一种结构型设计模式， 你可以使用它将对象组合成树状结构， 并且能像使用独立对象一样使用它们。

## 4. 装饰（Decorator）

## 5. 外观（Facade）

## 6. 享元（Flyweight）


## 7. 代理（Proxy）