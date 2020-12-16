# 隐私政策 Beta
发布日期：2020年11月10日  
生效日期：2020年xx月xx日

### 隐私协议
Moss作为Flutter示例应用，所有隐私权限均可拒绝，集成第三方sdk可能会使用到您的信息。

### 集成第三方的SDK
为保障App相关功能的实现与应用安全稳定的运行，我们可能会接入由第三方提供的SDK实现相关目的，具体接入的相关第三方SDK列明如下：

| 第三方SDK名称 | 业务功能 | 个人信息类型 | 隐私政策链接 |
|:---:|:---:|:---:|:---:|
| 百度地图SDK | 地图服务和定位服务 | 访问WI-FI状态、获取位置 | [http://lbsyun.baidu.com/index.php?title=open/privacy](http://lbsyun.baidu.com/index.php?title=open/privacy) |
| 友盟+统计SDK | 统计使用情况 | 设备Mac地址、唯一设备识别码（IMEI/android ID/IDFA/OPENUDID/GUID、SIM 卡 IMSI 信息）以提供统计分析服务，并通过地理位置校准报表数据准确性，提供基础反作弊能力。 | [https://www.umeng.com/page/policy](https://www.umeng.com/page/policy) |
| Bugly SDK | 异常上报功能 | 设备信息，用于判断Crash设备统计。 | [https://bugly.qq.com/docs/user-guide/faq-android/?v=20200312155538#9-bugly](https://bugly.qq.com/docs/user-guide/faq-android/?v=20200312155538#9-bugly) |

### 设备权限调用
| 设备权限 | 对应业务功能 | 调用权限的目的 | 是否询问 | 用户可否关闭权限 |
|:---:|:---:|:---:|:---:|:---:|
| 位置 | 核心业务功能 | 获取用户当前位置，用于查找路线及导航 | 调用相关功能询问 | 是 |
| 存储 | 地图显示 | 实现图片和地图数据缓存和调用 | 首次安装询问 | 是 |
| 电话 | 问题诊断 | 设备信息 | 首次安装询问 | 是 |
| 相机 | 发布动态 | 发布动态图片 | 调用相关功能询问 | 是 |
| 照片 | 发布动态 | 发布动态获取相册图片 | 调用相关功能询问 | 是 |
