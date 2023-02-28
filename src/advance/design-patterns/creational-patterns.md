# 创建型模式

> 创建型模式提供了创建对象的机制， 能够提升已有代码的灵活性和可复用性。

[[toc]]

## 1. 工厂方法

> 工厂方法模式是一种创建型设计模式， 其在父类中提供一个创建对象的方法， 允许子类决定实例化对象的类型。

亦称：虚拟构造函数、`Virtual Constructor`、`Factory Method`

### 1.1 方案

工厂方法模式建议使用特殊的**工厂方法代替对于对象构造函数的直接调用** （即使用 `new`运算符）。 不用担心， 对象仍将通过 `new` 运算符创建， 只是该运算符改在工厂方法中调用罢了。 工厂方法返回的对象通常被称作 “产品”。

### 1.2 场景

- 无法预知对象确切类别及其依赖关系时
    - 工厂方法将创建产品的代码与实际使用产品的代码分离， 从而能在不影响其他代码的情况下扩展产品创建部分代码。
- 扩展你软件库或框架的内部组件

### 1.3 实现方式

1. 让所有产品都遵循同一接口。 该接口必须声明对所有产品都有意义的方法。

2. 在创建类中添加一个空的工厂方法。 该方法的返回类型必须遵循通用的产品接口。

3. 在创建者代码中找到对于产品构造函数的所有引用。 将它们依次替换为对于工厂方法的调用， 同时将创建产品的代码移入工厂方法。 你可能需要在工厂方法中添加临时参数来控制返回的产品类型。

 工厂方法的代码看上去可能非常糟糕。 其中可能会有复杂的 switch分支运算符， 用于选择各种需要实例化的产品类。 但是不要担心， 我们很快就会修复这个问题。

4. 现在， 为工厂方法中的每种产品编写一个创建者子类， 然后在子类中重写工厂方法， 并将基本方法中的相关创建代码移动到工厂方法中。

5. 如果应用中的产品类型太多， 那么为每个产品创建子类并无太大必要， 这时你也可以在子类中复用基类中的控制参数。

### 1.4 代码示例

```ts
interface Product {
    operation(): string;
}
```

```ts
// ProductA
class ProductA implements Product {
    public operation(): string {
        return 'Result of the {ProductA}';
    }
}

// ProductB
class ProductB implements Product {
    public operation(): string {
        return 'Result of the {ProductB}';
    }
}
```

```ts
// Creator.ts
abstract class Creator {
    
    public abstract factoryMethod(): Product;

    public someOperation(): string {
        // 调用工厂方法创建产品
        const product = this.factoryMethod();
        // Now, use the product.
        return `Creator: The same creator's code has just worked with ${product.operation()}`;
    }
}
```

```ts
class CreatorA extends Creator {
   
    public factoryMethod(): Product {
        return new ProductA();
    }
}

class CreatorB extends Creator {
   
    public factoryMethod(): Product {
        return new ProductB();
    }
}
```

```ts
function clientCode(creator: Creator) {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
}

console.log('App: Launched with the CreatorA.');
clientCode(new CreatorA());
console.log('');

console.log('App: Launched with the CreatorB.');
clientCode(new CreatorB());
```

```
App: Launched with the CreatorA.
Client: I'm not aware of the creator's class, but it still works.
Creator: The same creator's code has just worked with {Result of the ProductA}

App: Launched with the CreatorB.
Client: I'm not aware of the creator's class, but it still works.
Creator: The same creator's code has just worked with {Result of the ProductB}
```

## 2. 抽象工厂

> 抽象工厂模式是一种创建型设计模式， 它能创建一系列相关的对象， 而无需指定其具体类。

### 2.1 方案

1. 以不同的产品类型与产品变体为维度绘制矩阵。

2. 为所有产品声明抽象产品接口。 然后让所有具体产品类实现这些接口。

3. 声明抽象工厂接口， 并且在接口中为所有抽象产品提供一组构建方法。

4. 为每种产品变体实现一个具体工厂类。

5. 在应用程序中开发初始化代码。 该代码根据应用程序配置或当前环境， 对特定具体工厂类进行初始化。 然后将该工厂对象传递给所有需要创建产品的类。

6. 找出代码中所有对产品构造函数的直接调用， 将其替换为对工厂对象中相应构建方法的调用。

### 2.2 场景

- 需要与多个不同系列的相关产品交互， 但是由于无法提前获取相关信息， 或者出于对未来扩展性的考虑， 你不希望代码基于产品的具体类进行构建
    - 抽象工厂为你提供了一个接口， 可用于创建每个系列产品的对象。 只要代码通过该接口创建对象， 那么你就不会生成与应用程序已生成的产品类型不一致的产品
- 有一个基于一组抽象方法的类， 且其主要功能因此变得不明确， 那么在这种情况下可以考虑使用抽象工厂模式    

### 2.3 代码示例

```ts
interface Button {
    paint(): void
}

interface Checkbox {
    paint(): void
}

class WinButton implements Button {
    paint() {
        console.log('WinButton painted!')
    }
}

class MacButton implements Button {
    paint() {
        console.log('MacButton painted!')
    }
}

class WinCheckbox implements Button {
    paint() {
        console.log('WinCheckbox painted!')
    }
}

class MacCheckbox implements Button {
    paint() {
        console.log('MacCheckbox painted!')
    }
}
```

```ts
// 抽象工厂接口声明了一组能返回不同抽象产品的方法。这些产品属于同一个系列
// 且在高层主题或概念上具有相关性。同系列的产品通常能相互搭配使用。系列产
// 品可有多个变体，但不同变体的产品不能搭配使用。
interface GUIFactory {
    createButton(): Button
    createCheckbox(): Checkbox
}

class WinGUIFactory implements GUIFactory {
    createButton() {
        return new WinButton()
    }

    createCheckbox() {
        return new WinCheckbox()
    }
}

class MacGUIFactory implements GUIFactory {
    createButton() {
        return new MacButton()
    }

    createCheckbox() {
        return new MacCheckbox()
    }
}
```

```ts
function clientCode(factory: GUIFactory) {
    const button = factory.createButton()
    const checkbox = factory.createCheckbox()

    button.paint()
    checkbox.paint()
}

console.log('Client: Testing client code with the first factory type...');
clientCode(new WinGUIFactory());

console.log('----------------------------------------------------------------');

console.log('Client: Testing the same client code with the second factory type...');
clientCode(new MacGUIFactory());
```

```
"Client: Testing client code with the first factory type..." 
"WinButton painted!" 
"WinCheckbox painted!" 
"----------------------------------------------------------------" 
"Client: Testing the same client code with the second factory type..." 
"MacButton painted!" 
"MacCheckbox painted!" 
```

## 3. 生成器

> 生成器模式是一种创建型设计模式， 使你能够分步骤创建复杂对象。 该模式允许你使用相同的创建代码生成不同类型和形式的对象。

### 3.1 问题

假设有这样一个复杂对象， 在对其进行构造时需要对诸多成员变量和嵌套对象进行繁复的初始化工作。 这些初始化代码通常深藏于一个包含众多参数且让人基本看不懂的构造函数中； 甚至还有更糟糕的情况， 那就是这些代码散落在客户端代码的多个位置。

### 3.2 方案

生成器模式建议将对象构造代码从产品类中抽取出来， 并将其放在一个名为生成器的独立对象中。

1. 清晰地定义通用步骤， 确保它们可以制造所有形式的产品。 否则你将无法进一步实施该模式。

2. 在基本生成器接口中声明这些步骤。

3. 为每个形式的产品创建具体生成器类， 并实现其构造步骤。

不要忘记实现获取构造结果对象的方法。 你不能在生成器接口中声明该方法， 因为不同生成器构造的产品可能没有公共接口， 因此你就不知道该方法返回的对象类型。 但是， 如果所有产品都位于单一类层次中， 你就可以安全地在基本接口中添加获取生成对象的方法。

考虑创建主管类。 它可以使用同一生成器对象来封装多种构造产品的方式。

5. 客户端代码会同时创建生成器和主管对象。 构造开始前， 客户端必须将生成器对象传递给主管对象。 通常情况下， 客户端只需调用主管类构造函数一次即可。 主管类使用生成器对象完成后续所有制造任务。 还有另一种方式， 那就是客户端可以将生成器对象直接传递给主管类的制造方法。

6. 只有在所有产品都遵循相同接口的情况下， 构造结果可以直接通过主管类获取。 否则， 客户端应当通过生成器获取构造结果。

### 3.3 场景

- 使用生成器模式可避免 “重叠构造函数 （telescopic constructor）” 的出现
- 当你希望使用代码创建不同形式的产品 （例如石头或木头房屋） 时， 可使用生成器模式
- 使用生成器构造组合树或其他复杂对象

### 3.4 代码示例

```ts
class ProductA {
    public parts: string[] = [];

    public listParts(): void {
        console.log(`Product parts: ${this.parts.join(', ')}\n`);
    }
}
```

```ts
interface Builder {
    producePartA(): void;
    producePartB(): void;
    producePartC(): void;
}

class BuilderA implements Builder {
    private product: ProductA;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new ProductA();
    }
    
    public producePartA(): void {
        this.product.parts.push('PartA1');
    }

    public producePartB(): void {
        this.product.parts.push('PartB1');
    }

    public producePartC(): void {
        this.product.parts.push('PartC1');
    }
    
    public getProduct(): ProductA {
        const result = this.product;
        this.reset();
        return result;
    }
}
```

```ts
class Director {
    private builder: Builder;
    
    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }
    
    public buildMinimalViableProduct(): void {
        this.builder.producePartA();
    }

    public buildFullFeaturedProduct(): void {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    }
}
```

```ts
function clientCode(director: Director) {
    const builder = new ConcreteBuilder1();
    director.setBuilder(builder);

    console.log('Standard basic product:');
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();

    console.log('Standard full featured product:');
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();

    // Remember, the Builder pattern can be used without a Director class.
    console.log('Custom product:');
    builder.producePartA();
    builder.producePartC();
    builder.getProduct().listParts();
}

const director = new Director();
clientCode(director);
```

```
Standard basic product:
Product parts: PartA1

Standard full featured product:
Product parts: PartA1, PartB1, PartC1

Custom product:
Product parts: PartA1, PartC1
```

## 4. 原型

> 原型模式是一种创建型设计模式， 使你能够复制已有对象， 而又无需使代码依赖它们所属的类。

所有的原型类都必须有一个通用的接口， 使得即使在对象所属的具体类未知的情况下也能复制对象。 原型对象可以生成自身的完整副本， 因为相同类的对象可以相互访问对方的私有成员变量。

### 4.1 问题

如果你有一个对象， 并希望生成与其完全相同的一个复制品， 你该如何实现呢？ 首先， 你必须新建一个属于相同类的对象。 然后， 你必须遍历原始对象的所有成员变量， 并将成员变量值复制到新对象中。

不错！ 但有个小问题。 并非所有对象都能通过这种方式进行复制， 因为有些对象可能拥有私有成员变量， 它们在对象本身以外是不可见的。

### 4.2 方案

原型模式将克隆过程**委派给被克隆的实际对象**。 模式为所有支持克隆的对象声明了一个通用接口， 该接口让你能够克隆对象， 同时又无需将代码和对象所属类耦合。 通常情况下， 这样的接口中仅包含一个 克隆方法。

所有的类对 克隆方法的实现都非常相似。 该方法会创建一个当前类的对象， 然后将原始对象所有的成员变量值复制到新建的类中。 你甚至可以复制私有成员变量， 因为绝大部分编程语言都允许对象访问其同类对象的私有成员变量。

1. 支持克隆的对象即为原型。 当你的对象有几十个成员变量和几百种类型时， 对其进行克隆甚至可以代替子类的构造。

其运作方式如下： 创建一系列不同类型的对象并不同的方式对其进行配置。 如果所需对象与预先配置的对象相同， 那么你只需克隆原型即可， 无需新建一个对象。

创建原型接口， 并在其中声明 克隆方法。 如果你已有类层次结构， 则只需在其所有类中添加该方法即可。

2. 原型类必须另行定义一个以该类对象为参数的构造函数。 构造函数必须复制参数对象中的所有成员变量值到新建实体中。 如果你需要修改子类， 则必须调用父类构造函数， 让父类复制其私有成员变量值。

如果编程语言不支持方法重载， 那么你可能需要定义一个特殊方法来复制对象数据。 在构造函数中进行此类处理比较方便， 因为它在调用 new运算符后会马上返回结果对象。

3. 克隆方法通常只有一行代码： 使用 new运算符调用原型版本的构造函数。 注意， 每个类都必须显式重写克隆方法并使用自身类名调用 new运算符。 否则， 克隆方法可能会生成父类的对象。

你还可以创建一个中心化原型注册表， 用于存储常用原型。

4. 你可以新建一个工厂类来实现注册表， 或者在原型基类中添加一个获取原型的静态方法。 该方法必须能够根据客户端代码设定的条件进行搜索。 搜索条件可以是简单的字符串， 或者是一组复杂的搜索参数。 找到合适的原型后， 注册表应对原型进行克隆， 并将复制生成的对象返回给客户端。

最后还要将对子类构造函数的直接调用替换为对原型注册表工厂方法的调用。

### 4.3 场景

- 需要复制一些对象， 同时又希望代码独立于这些对象所属的具体类， 可以使用原型模式。
- 如果子类的区别仅在于其对象的初始化方式， 那么你可以使用该模式来减少子类的数量。 别人创建这些子类的目的可能是为了创建特定类型的对象。

### 4.4 代码示例

```ts
abstract class Shape {
    x: number;
    y: number;
    color: number;

    constructor(target: Shape) {
        if (target != null) {
            this.x = target.x;
            this.y = target.y;
            this.color = target.color;
        }
    }
   
    abstract clone(): Shape;

    public  equals(object2: Object): boolean {
        if (!(object2 instanceof Shape)) return false;
        const shape2 = object2 as Shape;
        return shape2.x == this.x && shape2.y == this.y && shape2.color === this.color;
    }
}
```

```ts
class Circle extends Shape {
    radius: number;

    constructor(target: Circle) {
        super(target);
        if (target != null) {
            this.radius = target.radius;
        }
    }

    @Override
    clone(): Shape {
        return new Circle(this);
    }

    @Override
    public equals(object2: Object): boolean {
        if (!(object2 instanceof Circle) || !super.equals(object2)) return false;
        const shape2 = object2 as Circle;
        return shape2.radius == radius;
    }
}
```

```ts
const shapes: any[] = []

const circle = new Circle();
circle.x = 10;
circle.y = 20;
circle.radius = 15;
circle.color = "red";

shapes.push(circle);

const anotherCircle = circle.clone();
shapes.push(anotherCircle);

console.log(shapes)
```

```
[Circle: {
  "x": 10,
  "y": 20,
  "color": "red",
  "radius": 15
}, 
Circle: {
  "x": 10,
  "y": 20,
  "color": "red",
  "radius": 15
}] 
```

## 5. 单例

> 单例模式是一种创建型设计模式， 让你能够保证一个类只有一个实例， 并提供一个访问该实例的全局节点。

### 5.1 问题

单例模式同时解决了两个问题， 所以违反了**单一职责原则**：

1. **保证一个类只有一个实例**
2. **为该实例提供一个全局访问节点**

### 5.2 方案

所有单例的实现都包含以下两个相同的步骤：

- 将默认构造函数设为私有， 防止其他对象使用单例类的 `new` 运算符。
- 新建一个静态构建方法作为构造函数。 该函数会 “偷偷” 调用私有构造函数来创建对象， 并将其保存在一个静态成员变量中。 此后所有对于该函数的调用都将返回这一缓存对象。

### 5.3 应用场景

- 程序中的某个类对于所有客户端只有一个可用的实例
- 严格地控制全局变量


### 5.4 代码示例

```ts
class Singleton {
    private static instance: Singleton;
    
    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    public someBusinessLogic() {
        // ...
    }
}

function clientCode() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
}

clientCode();
```

## 与其他模式的关系

- 在许多设计工作的初期都会使用**工厂方法模式** （较为简单， 而且可以更方便地通过子类进行定制）， 随后演化为使用**抽象工厂模式**、 **原型模式**或**生成器模式** （更灵活但更加复杂）。

- **抽象工厂模式**通常基于一组工厂方法， 但你也可以使用**原型模式**来生成这些类的方法。

- **原型**可用于保存**命令模式**的历史记录。

- 大量使用**组合模式**和**装饰模式**的设计通常可从对于**原型**的使用中获益。 你可以通过该模式来复制复杂结构， 而非从零开始重新构造。

- **原型**并不基于继承， 因此没有继承的缺点。 另一方面， 原型需要对被复制对象进行复杂的初始化。 **工厂方法**基于继承， 但是它不需要初始化步骤。

- 有时候**原型**可以作为**备忘录模式**的一个简化版本， 其条件是你需要在历史记录中存储的对象的状态比较简单， 不需要链接其他外部资源， 或者链接可以方便地重建。

- **抽象工厂**、 **生成器**和**原型**都可以用**单例模式**来实现。