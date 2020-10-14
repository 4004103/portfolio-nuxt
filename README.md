# portfolio-nuxt

### nuxt 템플릿 초기 설정

```bash
$ git clone https://github.com/lautr/nuxt-typescript-vuetify.git
$ git clone https://github.com/4004103/nuxt-portfolio

$ cd nuxt-typescript-vuetify
$ rm -rf .git
$ rm -rf README.md
$ cp -rf * ../nuxt-portfolio

$ npm i
$ npm run dev
```

### nuxt 페이지 github에 올리는 작업

- 참고 사이트 : https://velog.io/@gwak2837/GitHub-Pages-gh-pages로-무료-웹-호스팅하기

- package.json 수정

```json
{
  ...
  script : {
    ...
    "generate": "nuxt-ts generate",
    "deploy": "gh-pages -d dist",
    "predeploy": "npm run build",
    "build:gh-pages": "cross-env DEPLOY_ENV=GH_PAGES nuxt-ts build",
    "generate:gh-pages": "cross-env DEPLOY_ENV=GH_PAGES nuxt-ts generate"
  }
}
```

- 실행 스크립트

```bash
# $ npm i gh-pages --save-dev
$ npm run generate:gh-pages
$ npm run deploy
```

- scss 연결 (nuxt.config.js)

```bash
css: [
    // 프로젝트의 sass 파일
    { src: '~assets/style/default.scss', lang: 'scss', }, // sass 대신 scss
  ],
```
