# oh-my-route
> 京东签到工具，在原仓库上做了优化。
>
> 原作者：[xcqlucky](https://github.com/xcqlucky)，原仓库：[jd_sign_action](https://github.com/xcqlucky/JD_Sign_Action)

## 触发
* 点亮当前项目 `Star` 按钮或凌晨4点定时执行 `github action`
* 如果你想自定义触发方式，编辑 `.github/workflows/work.yaml` 

## 如何使用
* `Fork`本项目
* `项目Settings` -> `Secrets` 中添加京东cookie、Server酱sckey，获取方法参考下面
	- `JD_COOKIE`：京东cookie，用于京东鉴权
	- `PUSH_KEY`：Server酱sockeye，用于微信公众号推送签到结果
* 点击 `Star` 触发 `workflow`，任务会自动执行，运行进度和结果可以在 `Actions` 页面查看
* 当任务运行完成时，会将运行结果和错误信息打包到 `Artifacts`，可自行下载查看

## 获取京东cookie

* 使用项目中的Chrome插件：`JDCookie`
* Chrome中拓展程序开启`开发者模式`；
* 点击`加载已解压的拓展程序`，选择`JDCookie`目录；
* 登录 [领京豆](https://bean.m.jd.com/)；
* 点击`JDCookie`即可拷贝京东cookie
* 需要注意的是，cookie`每15天过期一次`，也就是每15天就需要重新获取cookie，设置到`Secrets`中

## 获取Server酱SCKEY

* github 授权登录 [Server酱 ](http://sc.ftqq.com/3.version)官网
* 在 `发送消息`拷贝 sckey

## 参考项目
* [NobyDa/Script/JD-DailyBonus](https://github.com/NobyDa/Script/blob/master/JD-DailyBonus/JD_DailyBonus.js)
* [ruicky/jd-sign-bot](https://github.com/ruicky/jd_sign_bot)
* [jerrykuku/luci-app-jd-dailybonus](https://github.com/jerrykuku/luci-app-jd-dailybonus)
