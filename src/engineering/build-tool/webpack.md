# Webpack

## 简介

`Webpack` 是一个打包工具，他的宗旨是一切静态资源皆可打包。有人就会问为什么要`Webpack`？
`Webpack`是现代前端技术的基石，常规的开发方式，比如jquery,html,css静态网页开发已经落后了。现在是MVVM的时代，数据驱动界面。
`Webpack` 它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其打包为合适的格式以供浏览器使用。

## 核心概念

- **`Entry`**   入口(告诉`Webpack` 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，`Webpack` 会找出有哪些模块和库是入口起点（直接和间接）的依赖)
- **`Output`**  出口(告诉`Webpack` 应该在哪个目录输出构建结果，以及如何命名这些文件，默认为：`./dist`)
- **`Loader`**  模块转换器(将所有类型的文件转换为 `Webpack` 能够处理的有效模块，然后你就可以利用 `Webpack` 的打包能力，对它们进行处理)
- **`Plugins`** 插件(在 `Webpack` 构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想要的事情)
- **`Module`**  模块(在 `Webpack` 里一个模块对应着一个文件，`Webpack` 会从配置的 `Entry` 开始递归找出所有依赖的模块)

## 构建流程

1. **初始化参数**：从配置⽂件和 Shell 语句中读取与合并参数，得出最终的参数；
2. **开始编译**：⽤上⼀步得到的参数初始化 Compiler 对象，加载所有配置的插件，执⾏对象的 run ⽅法开始执⾏编译；
3. **确定入口**：根据配置中的 entry 找出所有的⼊⼝⽂件；
4. **编译模块**：从⼊⼝⽂件出发，调⽤所有配置的 `Loader` 对模块进⾏翻译，再找出该模块依赖的模块，再递归本步骤直到所有⼊⼝依赖的⽂件都经过了本步骤的处理；
5. **完成模块编译**：在经过第4步使⽤ `Loader` 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；
6. **输出资源**：根据⼊⼝和模块之间的依赖关系，组装成⼀个个包含多个模块的 `Chunk`，再把每个 `Chunk` 转换成⼀个 单独的⽂件加⼊到输出列表，这步是可以修改输出内容的最后机会；
7. **输出完成**：在确定好输出内容后，根据配置确定输出的路径和⽂件名，把⽂件内容写⼊到⽂件系统。

在以上过程中，`Webpack` 会在特定的时间点⼴播出特定的事件，插件在监听到感兴趣的事件后会执⾏特定的逻辑，并 且插件可以调⽤ `Webpack` 提供的 API 改变 `Webpack` 的运⾏结果。

## 问题

### webpack与grunt、gulp的不同？

`Grunt`、`Gulp`是基于任务运⾏的⼯具： 它们会⾃动执⾏指定的任务，就像流⽔线，把资源放上去然后通过不同插件进⾏加⼯，它们包含活跃的社区，丰富的插 件，能⽅便的打造各种⼯作流。` Webpack`是基于模块化打包的⼯具: ⾃动化处理模块,`webpack`把⼀切当成模块，当 `webpack`处理应⽤程序时，它会递归地构建⼀个依赖关系图 (dependency graph)，其中包含应⽤程序需要的每个模块，然后将所有这些模块打包成⼀个或多个 bundle。 因此这是完全不同的两类⼯具,⽽现在主流的⽅式是⽤`npm script`代替`Grunt`、`Gulp`,`npm script`同样可以打造任务流.

### webpack、rollup、parcel优劣？

- **webpack** 适⽤于⼤型复杂的前端站点构建: webpack有强⼤的loader和插件⽣态,打包后的⽂件实际上就是⼀个⽴即 执⾏函数，这个⽴即执⾏函数接收⼀个参数，这个参数是模块对象，键为各个模块的路径，值为模块内容。⽴即执 ⾏函数内部则处理模块之间的引⽤，执⾏模块等,这种情况更适合⽂件依赖复杂的应⽤开发. 
- **rollup** 适⽤于基础库的打包，如vue、d3等: Rollup 就是将各个模块打包进⼀个⽂件中，并且通过 Tree-shaking 来删 除⽆⽤的代码,可以最⼤程度上降低代码体积,但是rollup没有webpack如此多的的如代码分割、按需加载等⾼级功 能，其更聚焦于库的打包，因此更适合库的开发. 
- **parcel** 适⽤于简单的实验性项⽬: 他可以满⾜低⻔槛的快速看到效果,但是⽣态差、报错信息不够全⾯都是他的硬 伤，除了⼀些玩具项⽬或者实验项⽬不建议使⽤

### 有哪些常⻅的Loader？

- **file-loader**：把⽂件输出到⼀个⽂件夹中，在代码中通过相对 URL 去引⽤输出的⽂件 
- **url-loader**：和 file-loader 类似，但是能在⽂件很⼩的情况下以 base64 的⽅式把⽂件内容注⼊到代码中去 
- **source-map-loader**：加载额外的 Source Map ⽂件，以⽅便断点调试 
- **image-loader**：加载并且压缩图⽚⽂件 
- **babel-loader**：把 ES6 转换成 ES5 
- **css-loader**：加载 CSS，⽀持模块化、压缩、⽂件导⼊等特性 
- **style-loader**：把 CSS 代码注⼊到 JavaScript 中，通过 DOM 操作去加载 CSS
- **eslint-loader**：通过 ESLint 检查 JavaScript 代码

### 有哪些常⻅的Plugin？ 

- **define-plugin**：定义环境变量 
- **html-webpack-plugin**：简化html⽂件创建 
- **uglifyjs-webpack-plugin**：通过 UglifyES 压缩 ES6 代码 
- **webpack-parallel-uglify-plugin**: 多核压缩,提⾼压缩速度 
- **webpack-bundle-analyzer**: 可视化webpack输出⽂件的体积 
- **mini-css-extract-plugin**: CSS提取到单独的⽂件中,⽀持按需加载

### 分别介绍bundle，chunk，module是什么 

- **bundle**：是由webpack打包出来的⽂件 
- **chunk**：代码块，⼀个chunk由多个模块组合⽽成，⽤于代码的合并和分割 
- **module**：是开发中的单个模块，在webpack的世界，⼀切皆模块，⼀个模块对应⼀个⽂件，webpack会从配置的 entry中递归开始找出所有依赖的模块

### Loader和Plugin的不同？

不同的作⽤:

- **Loader** 直译为"加载器"。Webpack将⼀切⽂件视为模块，但是webpack原⽣是只能解析js⽂件，如果想将其他⽂件 也打包的话，就会⽤到 loader 。 所以Loader的作⽤是让webpack拥有了加载和解析⾮JavaScript⽂件的能⼒。 
- **Plugin** 直译为"插件"。Plugin可以扩展webpack的功能，让webpack具有更多的灵活性。 在 Webpack 运⾏的⽣命 周期中会⼴播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。

不同的⽤法:

- **Loader** 在 module.rules 中配置，也就是说他作为模块的解析规则⽽存在。 类型为数组，每⼀项都是⼀ 个 Object ，⾥⾯描述了对于什么类型的⽂件（ test ），使⽤什么加载( loader )和使⽤的参数（ options ）
- **Plugin** 在 plugins 中单独配置。 类型为数组，每⼀项是⼀个 plugin 的实例，参数都通过构造函数传⼊。

### 是否写过Loader和Plugin？描述⼀下编写loader或plugin的思路？

`Loader`像⼀个"翻译官"把读到的源⽂件内容转义成新的⽂件内容，并且每个`Loader`通过链式操作，将源⽂件⼀步步翻译 成想要的样⼦。 编写`Loader`时要遵循单⼀原则，每个`Loader`只做⼀种"转义"⼯作。 每个Loader的拿到的是源⽂件内容（ source ），可 以通过返回值的⽅式将处理后的内容输出，也可以调⽤ this.callback() ⽅法，将内容返回给webpack。 还可以通过 this.async() ⽣成⼀个 callback 函数，再⽤这个callback将处理后的内容输出出去。 此外 webpack 还为开发者准备了 开发loader的⼯具函数集—— loader-utils 。 相对于Loader⽽⾔，Plugin的编写就灵活了许多。 webpack在运⾏的⽣命周期中会⼴播出许多事件，Plugin 可以监听这 些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。

### webpack的热更新是如何做到的？说明其原理？ 

webpack的热更新⼜称热替换（Hot Module Replacement），缩写为HMR。 这个机制可以做到不⽤刷新浏览器⽽将新 变更的模块替换掉旧的模块。

TODO

### 如何⽤webpack来优化前端性能？ 

⽤webpack优化前端性能是指优化webpack的输出结果，让打包的最终结果在浏览器运⾏快速⾼效。 

- **压缩代码**:删除多余的代码、注释、简化代码的写法等等⽅式。可以利⽤webpack 的 UglifyJsPlugin 和 ParallelUglifyPlugin 来压缩JS⽂件， 利⽤ cssnano （css-loader?minimize）来压缩css 
- **利⽤CDN加速**: 在构建过程中，将引⽤的静态资源路径修改为CDN上对应的路径。可以利⽤webpack对 于 output 参数和各loader的 publicPath 参数来修改资源路径 
- **Tree Shaking**: 将代码中永远不会⾛到的⽚段删除掉。可以通过在启动webpack时追加参数 --optimize-minimize 来 实现
- **Code Splitting**: 将代码按路由维度或者组件分块(chunk),这样做到按需加载,同时可以充分利⽤浏览器缓存 提取公共第三⽅库: SplitChunksPlugin插件来进⾏公共模块抽取,利⽤浏览器缓存可以⻓期缓存这些⽆需频繁变动的 公共代码

### 如何提⾼webpack的打包速度? 
- **happypack**: 利⽤进程并⾏编译loader,利⽤缓存来使得 rebuild 更快,遗憾的是作者表示已经不会继续开发此项⽬,类 似的替代者是thread-loader 
- **外部扩展(externals)**: 将不怎么需要更新的第三⽅库脱离webpack打包，不被打⼊bundle中，从⽽减少打包时间,⽐ 如jQuery⽤script标签引⼊ dll: 采⽤webpack的 DllPlugin 和 DllReferencePlugin 引⼊dll，让⼀些基本不会改动的代码先打包成静态资源,避免 反复编译浪费时间 
- **利⽤缓存**: webpack.cache 、babel-loader.cacheDirectory、 HappyPack.cache 都可以利⽤缓存提⾼rebuild效率 
- **缩⼩⽂件搜索范围**: ⽐如babel-loader插件,如果你的⽂件仅存在于src中,那么可以 include: path.resolve(__dirname, 'src') ,当然绝⼤多数情况下这种操作的提升有限,除⾮不⼩⼼build了node_modules⽂件

### 如何提⾼webpack的构建速度？ 

1. 多⼊⼝情况下，使⽤ CommonsChunkPlugin 来提取公共代码 
2. 通过 externals 配置来提取常⽤库 
3. 利⽤ DllPlugin 和 DllReferencePlugin 预编译资源模块 通过 DllPlugin 来对那些我们引⽤但是绝对不会修改的npm 包来进⾏预编译，再通过 DllReferencePlugin 将预编译的模块加载进来。 
4. 使⽤ Happypack 实现多线程加速编译 
5. 使⽤ webpack-uglify-parallel 来提升 uglifyPlugin 的压缩速度。 原理上 webpack-uglify-parallel 采⽤了多核并⾏ 压缩来提升压缩速度

### 怎么配置单⻚应⽤？怎么配置多⻚应⽤？ 
- 单⻚应⽤可以理解为webpack的标准模式，直接在 entry 中指定单⻚应⽤的⼊⼝即可，这⾥不再赘述 多⻚应⽤的话，可以使⽤webpack的 AutoWebPlugin 来完成简单⾃动化的构建，但是前提是项⽬的⽬录结构必须遵守他 预设的规范。 
- 多⻚应⽤中要注意的是： 每个⻚⾯都有公共的代码，可以将这些代码抽离出来，避免重复的加载。⽐如，每个⻚⾯都引⽤了同⼀套css样式 表随着业务的不断扩展，⻚⾯可能会不断的追加，所以⼀定要让⼊⼝的配置⾜够灵活，避免每次添加新⻚⾯还需要修 改构建配置

## 参考

- [Webpack实践](https://juejin.cn/post/6844904030649614349)