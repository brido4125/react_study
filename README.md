# react_study
[리액트 연습장](https://brido4125.github.io/)

## 리액트 프로젝트 만드는 방법
- `npx create-react-app 프로젝트네임`으로 리액트 프로젝트 생성
- 이후 해당 `cd 프로젝트네임`으로 디렉토리 이동 후, `npm start`로 리액트 프로젝트 시작

## React-Bootstrap 설치법
- 해당 프로젝트로 경로 이동후, 터미널에서 `npm install react-bootstrap@next bootstrap@5.1.0`로 설치한다.
- 프로젝트의 `index.html`을 찾아서 
` <link
  rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
  integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
  crossorigin="anonymous"/>`
를 css immport하듯이 넣어준다.


- [공식사이트](https://react-bootstrap.netlify.app/)를 참고해서 다양한 컴포넌트들을 불러와서 사용하면 된다.

## React-Route-Dom 설치법
- 해당 프로젝트 디렉토리로 이동 후, `npm install react-router-dom` 으로 설치한다.
- 라우트를 통해 웹 사이트내의 다양한 세부 페이지를 구현 할 수 있다.
- `Rotue`, `Link` , `Switch` 등의 컴포넌트와 `useHistory()`,`useParams()`등의 메소드를 활용 할 수 있다.
