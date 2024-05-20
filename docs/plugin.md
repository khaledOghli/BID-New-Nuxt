# Plugins

> Last updated at 2024.05.20

## Sweet Alert

#### Used [sweetalert2](https://sweetalert2.github.io/) library

#### Plugin Developed by @khaledOghli

### How to use

```ts{1,8-11}
<script setup lang="ts">
  import type { SweetAlertOptions } from 'sweetalert2'; // [!code focus]

  const { $useSweetAlert } = useNuxtApp(); // [!code focus]
  const options: SweetAlertOptions = { // [!code focus]
    title: 'Hello World!',
    text: 'This is a simple alert!',
    icon: 'success',
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
  };
  const confirmCallback = () => {
    console.log('Confirmed!');
  };
  const dismissedCallback = () => {
    console.log('Dismissed!');
  };
  const deniedCallback = () => {
    console.log('Denied!');
  };
  $useSweetAlert(options, confirmCallback, dismissedCallback, deniedCallback); // [!code focus]

</script>
```

### Change Colors

<!-- 2 method  -->
<!-- 1:
  confirmButtonColor: '#3d88fc',
  cancelButtonColor: '#7c7c7c',
  denyButtonColor: '#fc2134',
 -->
 <!-- 2: 
   buttonsStyling: false,
  customClass: {
    confirmButton: 'btn-primary',
    denyButton: 'btn-light',
    cancelButton: 'btn-light',
  },
  -->

Using Object Method

```ts
const options: SweetAlertOptions = {
  confirmButtonColor: '#3d88fc',
  cancelButtonColor: '#7c7c7c',
  denyButtonColor: '#fc2134',
  color: '#7c7c7c',
  background: '#f1f1f1',
};
```

Using Class Method

```ts
const options: SweetAlertOptions = {
  buttonsStyling: false,
  customClass: {
    confirmButton: 'btn-primary',
    denyButton: 'btn-light',
    cancelButton: 'btn-light',
    closeButton: 'btn-light',
  },
  color: '#7c7c7c',
  background: '#f1f1f1',
};
```

### Typescript

::: info Types
For TypeScript users, you can import the SweetAlertOptions interface from the sweetalert2 package,
and the object contains: [sweetalert2.d.ts](https://github.com/sweetalert2/sweetalert2/blob/main/sweetalert2.d.ts)
:::

```ts{4-5}
export type SweetAlertOptions = SweetAlertInputValidator & {
  title?: string | HTMLElement | JQuery | undefined;
  titleText?: string | undefined;
  text?: string | undefined;
  html?: string | HTMLElement | JQuery | undefined;
  icon?: SweetAlertIcon | undefined;
  iconColor?: string | undefined;
  iconHtml?: string | undefined;
  footer?: string | HTMLElement | JQuery | undefined;
  template?: string | HTMLTemplateElement | undefined;
  backdrop?: boolean | string | undefined;
  toast?: boolean | undefined;
  target?: string | HTMLElement | null | undefined;
  width?: number | string | undefined;
  padding?: number | string | undefined;
  color?: string | undefined;
  background?: string | undefined;
  position?: SweetAlertPosition | undefined;
  grow?: SweetAlertGrow | undefined;
  animation?: boolean | undefined;
  showClass?: SweetAlertShowClass | undefined;
  hideClass?: SweetAlertHideClass | undefined;
  customClass?: SweetAlertCustomClass | string | undefined;
  timer?: number | undefined;
  timerProgressBar?: boolean | undefined;
  heightAuto?: boolean | undefined;
  allowOutsideClick?: ValueOrThunk<boolean> | undefined;
  allowEscapeKey?: ValueOrThunk<boolean> | undefined;
  allowEnterKey?: ValueOrThunk<boolean> | undefined;
  stopKeydownPropagation?: boolean | undefined;
  keydownListenerCapture?: boolean | undefined;
  showConfirmButton?: boolean | undefined;
  showDenyButton?: boolean | undefined;
  showCancelButton?: boolean | undefined;
  confirmButtonText?: string | undefined;
  denyButtonText?: string | undefined;
  cancelButtonText?: string | undefined;
  confirmButtonColor?: string | undefined;
  denyButtonColor?: string | undefined;
  cancelButtonColor?: string | undefined;
  confirmButtonAriaLabel?: string | undefined;
  denyButtonAriaLabel?: string | undefined;
  cancelButtonAriaLabel?: string | undefined;
  buttonsStyling?: boolean | undefined;
  reverseButtons?: boolean | undefined;
  focusConfirm?: boolean | undefined;
  focusDeny?: boolean | undefined;
  focusCancel?: boolean | undefined;
  returnFocus?: boolean | undefined;
  showCloseButton?: boolean | undefined;
  closeButtonHtml?: string | undefined;
  closeButtonAriaLabel?: string | undefined;
  loaderHtml?: string | undefined;
  showLoaderOnConfirm?: boolean | undefined;
  showLoaderOnDeny?: boolean | undefined;
  preConfirm?(inputValue: any): SyncOrAsync<any>;
  preDeny?(value: any): SyncOrAsync<any | void>;
  imageUrl?: string | null | undefined;
  imageWidth?: number | string | undefined;
  imageHeight?: number | string | undefined;
  imageAlt?: string | undefined;
  inputLabel?: string | undefined;
  inputPlaceholder?: string | undefined;
  inputValue?: SyncOrAsync<string | number | File | FileList> | undefined;
  inputOptions?: SyncOrAsync<ReadonlyMap<string, string> | Record<string, any>> | undefined;
  inputAutoFocus?: boolean | undefined;
  inputAutoTrim?: boolean | undefined;
  inputAttributes?: Record<string, string> | undefined;
  returnInputValueOnDeny?: boolean | undefined;
  validationMessage?: string | undefined;
  progressSteps?: readonly string[] | undefined;
  currentProgressStep?: number | undefined;
  progressStepsDistance?: number | string | undefined;
  willOpen?(popup: HTMLElement): void;
  didOpen?(popup: HTMLElement): void;
  didRender?(popup: HTMLElement): void;
  willClose?(popup: HTMLElement): void;
  didClose?(): void;
  didDestroy?(): void;
  scrollbarPadding?: boolean | undefined;
}


```

<!--
## 谷歌分析

利用插件 [google-analytics](https://analytics.google.com/) ，来查看网站访问量，这里我们用 [@ZhongxuYang](https://github.com/ZhongxuYang/) 的插件

仓库：https://github.com/ZhongxuYang/vitepress-plugin-google-analytics

::: code-group

```sh [pnpm]
pnpm add -D vitepress-plugin-google-analytics
```

```sh [yarn]
yarn add -D vitepress-plugin-google-analytics
```

```sh [npm]
npm install vitepress-plugin-google-analytics
```

```sh [bun]
bun add -D vitepress-plugin-google-analytics
```

:::

在 `.vitepress/theme/index.ts` 中引入

```ts{3,8-10}
// .vitepress/theme/index.ts
import DefaultTheme from "vitepress/theme"
import googleAnalytics from 'vitepress-plugin-google-analytics'

export default {
  extends: DefaultTheme,
  enhanceApp({app}) {
    googleAnalytics({
      id: 'G-******', //跟踪ID，在analytics.google.com注册即可
    }),
  },
}
```

## 图片缩放

Vuepress是可以直接安装插件 [medium-zoom](https://github.com/francoischalifour/medium-zoom) 的，非常好用

但是Vitepress直接用不了，在 [vitepress的issues中找到了方法#854](https://github.com/vuejs/vitepress/issues/854)

::: code-group

```sh [pnpm]
pnpm add -D medium-zoom
```

```sh [yarn]
yarn add -D medium-zoom
```

```sh [npm]
npm install medium-zoom
```

```sh [bun]
bun add -D medium-zoom
```

:::

在 `.vitepress/theme/index.ts` 添加如下代码，并保存

```ts{4-6,11-24}
// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'

import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';

export default {
  extends: DefaultTheme,

  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },

}
```

点击图片后，还是能看到导航栏，加一个遮挡样式

在 `.vitepress/theme/style/var.css` 中加入如下代码，并保存

```css
/* .vitepress/theme/style/var.css */

.medium-zoom-overlay {
  z-index: 20;
}

.medium-zoom-image {
  z-index: 9999 !important; /* 给的值是21，但是实测盖不住，直接999 */
}
```

测试一下效果，还不错

::: tip 但是
有个小bug，每次修改完需要刷新才能起效，不过不影响使用
:::

![](/img_test.jpg)

## 看板娘

第一次接触的人会比较懵，其实就是在右下角有个二次元的人物，类似电子宠物

这里使用 [@xinlei3166](https://github.com/xinlei3166/) 的 [Live2D](https://www.live2d.com/zh-CHS/) 插件

仓库：https://github.com/xinlei3166/vitepress-theme-website

::: code-group

```sh [pnpm]
pnpm add -D vitepress-theme-website
```

```sh [yarn]
yarn add -D vitepress-theme-website
```

```sh [npm]
npm install vitepress-theme-website
```

```sh [bun]
bun add -D vitepress-theme-website
```

:::

在 `.vitepress/theme/index.ts` 粘贴下面代码并保存

```ts{4,11-30}
// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'

import { useLive2d } from 'vitepress-theme-website' // [!code focus]

export default {
  extends: DefaultTheme,

  setup() {

    //看板娘 // [!code focus:20]
    useLive2d({
      enable: true,
      model: {
        url: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/hibiki/hibiki.model.json'
      },
      display: {
        position: 'right',
        width: '135px',
        height: '300px',
        xOffset: '35px',
        yOffset: '5px'
      },
      mobile: {
        show: true
      },
      react: {
        opacity: 0.8
      }
    })

  }
}
```

想要更换模型在 [@iCharlesZ](https://github.com/iCharlesZ/vscode-live2d-models#url) 这里找，替换 `model` 中的 `url` 链接即可

```ts{2}
model: {
  url: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/bilibili-22/index.json'
},
```

## 浏览量

我对这个并不感冒，看了一下，基本上是用的 [不蒜子](http://busuanzi.ibruce.info/)

但是想要好看就得自己封装一下

::: code-group

```sh [pnpm]
pnpm add -D busuanzi.pure.js
```

```sh [yarn]
yarn add -D busuanzi.pure.js
```

```sh [npm]
npm install busuanzi.pure.js
```

```sh [bun]
bun add -D busuanzi.pure.js
```

:::

```ts{4-5,10-16}
// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'

import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'

export default {
  extends: DefaultTheme,

  enhanceApp({ app , router }) {
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }
  },
}
```

使用就很简单了，也可以自己写个好看点的组件

```html
本站总访问量 <span id="busuanzi_value_site_pv" /> 次 本站访客数
<span id="busuanzi_value_site_uv" /> 人次
```

## 自动侧边栏

我自己不用，既然有人问，我就贴出来，自己尝试吧

::: details 为什么我不用的原因
因为中文文件夹命名，分享时并不太好看

既然排序要遵从插件规则，那手动不也是在遵循规则。文章多，累是一回事，整理的过程也是查漏补缺，并无坏处
:::

采用了 [@QC2168](https://github.com/QC2168/) 的项目，仓库：

https://github.com/QC2168/vite-plugin-vitepress-auto-sidebar

::: code-group

```sh [pnpm]
pnpm add -D vite-plugin-vitepress-auto-sidebar
```

```sh [yarn]
yarn add -D vite-plugin-vitepress-auto-sidebar
```

```sh [npm]
npm install vite-plugin-vitepress-auto-sidebar
```

```sh [bun]
bun add -D vite-plugin-vitepress-auto-sidebar
```

:::

```ts{2,5-12}
// .vitepress/configs.mts
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';

export default defineConfig({
  vite: {
    plugins: [
      AutoSidebar({
        // You can also set options to adjust sidebar data
        // 需要修改默认配置，请自行参照仓库的配置表
      })
    ]
  },
})
```

## Todo

为什么Vitepress没有任务列表，在 [issues#1923](https://github.com/vuejs/vitepress/issues/1923) 和 [issues#413](https://github.com/vuejs/vitepress/issues/413) 里找到了这个问题

::: tip 开发者认为
开发者认为Vitepress并不需要这个，但可以通过 [markdown-it](https://markdown-it.github.io/) 实现， 在 [vitepress文档中并没有此功能](https://vitepress.dev/guide/markdown.html#advanced-configuration)，但可以通过 [markdown-it-task-lists](https://www.npmjs.com/package/markdown-it-task-lists) 实现
:::

测试下来感觉 [markdown-it-task-checkbox](https://github.com/linsir/markdown-it-task-checkbox) 更好用点

::: code-group

```sh [pnpm]
pnpm add -D markdown-it-task-checkbox
```

```sh [yarn]
yarn add -D markdown-it-task-checkbox
```

```sh [npm]
npm install markdown-it-task-checkbox --save
```

```sh [bun]
bun add -D markdown-it-task-checkbox
```

:::

如果根据文档配置的话是不行的，源码也比较久了，使用的是 [commonjs 同步函数](https://zh.wikipedia.org/wiki/CommonJS) ，而Vitepress使用的是 [ES module 异步函数](https://zh.wikipedia.org/wiki/ECMAScript)

::: details 关于 CJS 和 ESM
commonjs：简称CJS，`module.exports` `exports` 导出，`require` 导入

ES module：简称ESM，`export` 导出，`import` 导入

这个我们在最开始 [安装Vitepress依赖](./getting-started.md#安装依赖) 的时候也提到过
:::

```ts{2,5-16}
// .vitepress/config.mts
import taskLists from 'markdown-it-task-checkbox'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(taskLists, {
        disabled: true,
        divWrap: false,
        divClass: 'checkbox',
        idPrefix: 'cbx_',
        ulClass: 'task-list',
        liClass: 'task-list-item',
      })
    }
  },
})
```

::: details 关于引用报错但未爆红

> 无法找到模块“markdown-it-task-checkbox”的声明文件。“/node_modules/.pnpm/markdown-it-task-checkbox@1.0.6/node_modules/markdown-it-task-checkbox/index.js”隐式拥有 "any" 类型。
>
> 尝试使用 `npm i --save-dev @types/markdown-it-task-checkbox` (如果存在)，或者添加一个包含 `declare module 'markdown-it-task-checkbox';` 的新声明(.d.ts)文件ts(7016)

---

解决：

在 `congfig.mts`同级目录新建一个 `type.d.ts` 文件

粘贴 `declare module 'markdown-it-task-checkbox';` 代码保存
:::

::: tip 说明
`disabled` 改成 `false` ，可以激活勾选框
:::

版本过低，跑不起来，我们直接安装 `@types/node`

::: code-group

```sh [pnpm]
pnpm add -d @types/node
```

```sh [yarn]
yarn add -D @types/node
```

```sh [npm]
npm install @types/node --save
```

```sh [bun]
bun add -D @types/node
```

:::

最后自己测试效果即可

- [ ] 吃饭
- [ ] 睡觉
- [x] 打豆豆

## 评论

评论的插件比较多：

- [Giscus](https://giscus.app/zh-CN)、[waline](https://waline.js.org/)、[gitalk](https://gitalk.github.io/)

- [Valine](https://valine.js.org/quickstart.html)、[disqus](https://disqus.com/)[Twikoo](https://twikoo.js.org/)、[Artalk](https://artalk.js.org/guide/deploy.html)

从个人角度而言，[Giscus](https://giscus.app/zh-CN) 最佳，就用它演示，其他的这里就不赘述了

::: details 关于 [@xinlei3166](https://github.com/xinlei3166/) 的 waline 插件

在使用看板娘发时候就已经装好了，直接引用就行了

```ts{4,11-13}
// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'

import { useWaline } from 'vitepress-theme-website'

export default {
  extends: DefaultTheme,

  setup() {

    useWaline({
      serverURL: 'https://you_url.com'
    }),

  }
}
```

记得 `serverURL` 换成自己的即可，但是作者的插件有个bug，暗黑模式下看不清字

所以要用 [waline](https://waline.js.org/) 话就 [参考官方的教程](https://waline.js.org/guide/get-started/)
:::

### 安装giscus

Giscus 是一个基于 GitHub Discussion 的评论系统，启用简便

进 Giscus App官网：https://github.com/apps/giscus

点击 `Install` 安装

![](/giscus-01.png)

选择 `Only select repositories`，再指定一个你想开启讨论的仓库

::: tip 注意
仓库必须是公开的，私有的不行

想单独放评论，新建一个也可
:::

![](/giscus-02.png)

::: tip 查看
完成后可以在个人头像-设置-应用 `Applications` 中看到
:::

### 开启讨论

因为giscus会把评论数据都放到讨论 `discussions` 中

我们进入要开启讨论的仓库，点设置 - 勾选讨论 `Settings - discussions`

![](/giscus-03.png)

### 生成数据

进入官网：https://giscus.app/zh-CN

输入自己的仓库链接，满足条件会提示可用

![](/giscus-04.png)

下拉到 Discussion 分类我们按推荐的选 `Announcements` ，懒加载评论也可以勾选下

![](/giscus-05.png)

下方就自动生成了你的关键数据

![](/giscus-06.png)

其中 `data-repo` 、 `data-repo-id` 、 `data-category` 和 `data-category-id` 这4个是我们的关键数据

```js{2-5}
<script src="https://giscus.app/client.js"
        data-repo="Yiov/vitepress-doc"
        data-repo-id="R_******"
        data-category="Announcements"
        data-category-id="DIC_******"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
</script>
```

### 安装使用

有能力的可以用官方给的js数据封装，我这里用 [@T-miracle](https://github.com/T-miracle/) 的插件

仓库：https://github.com/T-miracle/vitepress-plugin-comment-with-giscus

::: code-group

```sh [pnpm]
pnpm add -D vitepress-plugin-comment-with-giscus
```

```sh [yarn]
yarn add -D vitepress-plugin-comment-with-giscus
```

```sh [npm]
npm install vitepress-plugin-comment-with-giscus
```

```sh [bun]
bun add -D vitepress-plugin-comment-with-giscus
```

:::

在 `.vitepress/theme/index.ts` 中填入下面代码

并将我们之前获取的4个关键数据填入，其他保持默认保存

```ts{3-4,10-31}
// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';

export default {
  extends: DefaultTheme,

  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData();
    const route = useRoute();

    // giscus配置
    giscusTalk({
      repo: 'your github repository', //仓库
      repoId: 'your repository id', //仓库ID
      category: 'Announcements', // 讨论分类
      categoryId: 'your category id', //讨论分类ID
      mapping: 'pathname',
      inputPosition: 'bottom',
      lang: 'zh-CN',
      },
      {
        frontmatter, route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    );

}
```

看下底部的效果吧

::: details 如果某一页不想启用
我们可以在当前页使用 `Frontmatter` 关闭

```yaml
---
comment: false
---
```

::: -->
