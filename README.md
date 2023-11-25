<div align="center">

<h2> CandleLight (캔들라이트) </h2>

‘남’이 아닌 ‘나’가 주체가 되어 ‘나’에게 중요한 나날들을 온전하게 기념할 수 있는 서비스. 나만의 기념일을 촛불로 표현하여, 카테고리 별 ‘케이크’에 ‘촛불’을 켜나갑니다.

<br/>


</div>

<h2> ✨ CandleLight 주요 기능 </h2>

<h3> 1️⃣ 촛불 생성(기념일 생성 및 기록) </h3>
<!-- <img src=""  alt="기능1-대표이미지" /> -->
<div >유저에게 소중한 기념일을 생성하고, 그날의 제목/카테고리/기분/설명을 입력한다.

입력을 완료하면 해당 카테고리 테마에 있는 케이크에 촛불이 생성된다.  <br/></div>

<h3> 2️⃣ 기록 열람 </h3>
<!-- <img src=""  alt="기능1-대표이미지" /> -->
<div >카테고리별로 생성된 촛불을 클릭하여 기록을 열람할 수 있다.
’촛불에 다시 불붙이기’를 통해 마지막 확인 일자를 업데이트할 수 있다.  <br/></div>

<h3> 3️⃣ 케이크(기록 목록) </h3>
<!-- <img src=""  alt="기능1-대표이미지" /> -->
<div >케이크의 카테고리를 생성할 수 있다.
케이크에 켜진 촛불은 마지막 확인 일자로부터 경과한 기일에 따라 상태가 변화한다..  <br/></div>

<br/>

<h2> 👥 Team </h2>

### 👨‍💻 팀원 정보

<table align="center">
    <tr align="center">
        <td style="min-width: 300px;">
            <a href="https://github.com/lydiacho">
              <img src="https://velog.velcdn.com/images/aroo_ming/post/6ea71c57-26de-4a87-b5ce-8e7089a98372/image.jpg" width="300">
              <br />
              <b>조승희</b>
            </a> 
        </td>
        <td style="min-width: 300px;">
            <a href="https://github.com/Arooming">
              <img src="https://velog.velcdn.com/images/aroo_ming/post/8a18c865-6165-40c1-8cd8-7aedff4e9f77/image.jpg" width="300">
              <br />
              <b>서아름</b>
            </a>
        </td>
        <td style="min-width: 300px;">
            <a href="https://github.com/Jun-min2">
              <img src="https://velog.velcdn.com/images/aroo_ming/post/9a9628e4-fa23-4a29-9b04-bdc9f03d174c/image.jpg" width="300">
              <br />
              <b>최준민</b>
            </a> 
        </td>
    </tr>
    <tr align="center">
        <td>
            Web FE
        </td>
        <td>
            Web FE
        </td>
        <td>
            Web FE
        </td>
    </tr>
</table>

<br/>

### 👨‍💻 팀원 역할 분담

<table>
    <tr align="center">
        <td>
            🐵 조승희
        </td>
        <td>
        - 초기세팅
        - ~ 뷰 
        - ~ API
        </td>
    </tr>
    <tr align="center">
        <td>
            🍩 서아름
        </td>
        <td>
        - ~ 뷰
	- ~ API
        </td>
    </tr>
    <tr align="center">
        <td>
            🎤 최준민
        </td>
        <td>
          - ~ 뷰
	        - ~ API
        </td>
    </tr>
</table>

<br/>

<h2>  📄 컨벤션 및 브랜치 전략 </h2>
(노션 링크 또는 표로 작성)

[🔗 웹 4조 컨벤션](https://lydiacho.notion.site/FE-cf075181fe2a4b0f97238da414678ac2?pvs=4)

<br/>

## 🎋 브랜치 전략

- 브랜치 전략
  - `feature/담당자명`
    - feature/SeungHee (파스칼)
  - `담당자명/기능설명`
    - SeungHee/ui-publishing (-로 연결)
  ```js
  develop
  ㄴ feature/SeungHee
  	ㄴ SeungHee/ui-publishing
  ```
- 🚨 반드시 **직속 상위 브랜치**로 머지
- ❌ 이번 솝커톤에서는 빠른 작업을 위해 issue를 사용하지 않습니다!
- ↩️ PR은 1명 이상이 확인하면 merge (모두가 코드리뷰할 필요 없으나 반드시 한명은 확인해야 함)

### 📚 커밋 컨밴션

- 커밋 단위는 반드시 최소한의 작업 단위로 쪼개서, 한 PR당 10커밋 이상 넘어가지 않도록 합니다.

| 커밋     | 역할                                                                  |
| -------- | --------------------------------------------------------------------- |
| feat     | 기능 구현과 관련된 커밋                                               |
| style    | 코드 순서, css등의 포맷에 관한 커밋 (기능에 변화X)                    |
| design   | UI 구현 (css 구체화) 커밋                                             |
| fix      | 버그를 고친 경우                                                      |
| refactor | 더 좋은 코드로 개선한 경우 (기능에 변화가 없는 경우) ex-코드리뷰 반영 |
| docs     | README.md 등 문서를 작성한 경우                                       |
| chore    | 주석 추가, 자잘한 문서 수정                                           |

<br/>

## 📁 폴더 구조

```
|-- 📁 node_modules
|-- 📁 public
|-- 📁 src
	|-- 📁 @components
	|-- 📁 @pages
	|-- 📁 api
  |-- 📁 constants
  |-- 📁 hooks
	|-- 📁 assets
		|-- 📁 icon
		|-- 📁 image
	|-- 📁 style
		|-- globalStyle.js
		|-- theme.js
	|-- App.jsx
	|-- main.jsx
	|-- Router.jsx
|-- .eslintrc.cjs
|-- .gitignore
|-- index.html
|-- package.json
|-- README.md
|-- vite.config.js
|-- yarn.lock
```

📁 **src > assets**
필요한 아이콘 파일은 Figma 에서 **svg로 export** 한 후 `assets/icon`

- ic_arrow.svg
  필요한 이미지 파일은 Figma 에서 **png로 export** 한 후 `assets/image`폴더에 넣기

- img_picture.png
  index.ts에서 svg 컴포넌트화 하여 export → 컴포넌트에서 import 시 컴포넌트처럼 불러오기

- 파일명 : `ic_arrow.svg` _(snake case)_
- 컴포넌트명 (사용할 때) : `IcArrow.svg` _(Pascal case)_

📁 **src > components**
**common 폴더**
⇒ 여러 페이지에서 사용할 공통 컴포넌트 (ex- Button, Header)

**각 페이지별 폴더**
⇒ 각 페이지별 폴더 생성 후, 내부에 연관 컴포넌트 파일 생성하기

📁 **src > pages**
페이지의 최상단 컴포넌트. 각 컴포넌트를 하나의 페이지에서 호출하는 곳

📁 **src > api**
서버 합동 세미나에서 사용
api 함수 모아놓는곳

📁 **src > hooks**
custom hooks 정의하는 경우 이곳에서 정의 후 사용

📁 **src > constants**
상수 데이터 파일 분리하여 사용하는 경우 이곳에서 정의 후 사용

<br/>

## 🛠 기술 스택

| 역할                 | 종류                                                                                                                                                                                                              |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Library              | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)                                                                                                                |
| Programming Language | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)                                                                                             |
| Styling              | ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)                                                                           |
| Data Fetching        | ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white)                                                                                                                |
| Formatting           | ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white) |
| Package Manager      | ![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)                                                                                                                   |
| Version Control      | ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  |

<br />

## 💡 주요 라이브러리

```
"vite-plugin-svgr": "^4.2.0"
```

<br />

## 👨‍👧‍👧 우리만의 그라운드룰

- `div`남발하지 않고 최대한 시멘틱한 태그를 사용하도록 노력하자
- 솝커톤 환경 특성상 난이도/볼륨에 대해 적극적으로 의견을 나누자
- 타파트/자신파트의 결정사항에 있어서 조금이라도 불확실한 부분은 **반드시!! 확실하게 짚고 넘어가** 🚨
- 리프레시 타임을 가지자♻️ : 2시간에 한번씩 5분! 일어나서 움직이고, 스트레칭하고, 산소 공급합시다

<br />

<h2>웨비 Before and After</h2>
<h3>Before</h3>
<img src="https://velog.velcdn.com/images/aroo_ming/post/acb74fdf-14ba-4daa-a8c3-b19896a60dd1/image.jpg" alt="웨비 팀원들 사진 (before)"/>
 
<h3>After</h3>
<img src="" alt="웨비 팀원들 사진 (after)"/>

<br />

## 🎀 시연 영상

[서비스명](영상링크)
