## 适用于微信小程序的 UUIDv4 生成器

由于微信小程序的限制，无法使用[Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)的[`crypto.randomUUID()`](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID)生成随机的 UUIDv4，也不能通过引入依赖于 crypto 的第三方库（例如[uuid](https://github.com/uuidjs/uuid)）实现（一般使用 crypto 生成安全的随机数），因此对[uuid](https://github.com/uuidjs/uuid)进行改造，使其能在微信小程序中正常工作。

### 使用方法

**要求基础库版本>=2.15.0**

将本仓库的所有文件引入到微信小程序项目中，然后使用以下代码生成 UUIDv4：

```typescript
import uuidv4 from "uuidv4";
var uuid = await uuidv4();
```

（由于`wx.getRandomValues()`是异步的，`uuidv4()`也是异步的）

### 实现方法

使用微信小程序基础库的[`wx.getRandomValues()`](https://developers.weixin.qq.com/miniprogram/dev/api/device/crypto/wx.getRandomValues.html)获取密码学安全随机数替换`crypto.randomFillSync()`。

### 其他参考资料
[维基百科 - 通用唯一识别码](https://zh.wikipedia.org/wiki/%E9%80%9A%E7%94%A8%E5%94%AF%E4%B8%80%E8%AF%86%E5%88%AB%E7%A0%81)