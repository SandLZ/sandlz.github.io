# 行为模式

```js
class BaseHandler {
  setNext(nextHandler) {
    this.nextHandler = nextHandler;
    return nextHandler;
  }

  handle() {
    console.log("do some base logic...");
    if (this.nextHandler) {
      return this.nextHandler.handle();
    }
  }
}

class HandlerA extends BaseHandler {
  handle() {
    console.log("【HandlerA】 do some logic...");
    return super.handle();
  }
}

class HandlerB extends BaseHandler {
  handle() {
    console.log("【HandlerB】 do some logic...");
    return super.handle();
  }
}

class HandlerC extends BaseHandler {
  handle() {
    console.log("【HandlerC】 do some logic...");
    return super.handle();
  }
}

const ha = new HandlerA()
const hb = new HandlerB()
const hc = new HandlerC()


ha.setNext(hb).setNext(hc)
    ha.handle()

```