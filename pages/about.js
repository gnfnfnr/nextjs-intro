import NavBar from "./components/NavBar";

export default function () {
  return (
    <div>
      <NavBar />
      <h1>navbar에 대한 설명</h1>
      <div>
        nav를 만들때 이동하기 위해서 a태그를 쓰면 오류가 뜨나보다(하지만 나는
        뜨지 않았다..)
        <p>
          1. 오류의 종류: 네비게이션할 때 a를 쓰지마라 <br />
          2. 오류의 이유: next js 안에는 네비게이트할 때 써야하는 특정한
          컴포넌트가 있다.
          <br /> 3. a 태그를 사용하면 페이지를 이동할 때마다 새로고침하면서 전체
          페이지가 렌더링된다. → 속도가 느려진다 <br />
          4. 해결: Link 태그 사용하면 된다. <br />
          4-1. 먼저 임포트 하기: *import* Link *from* "next/link"; <br />
          4-2. 코드 쓰는 방식 주의: link 태그 안에 a 태그를 한번 더 쓰기
          <br />
          4-3. link 태그만 쓰는 방식도 써도 작동은 된다 <br />
          <br />
          4-4. 이런 방식으로 주는 이유: <br />
          1.style이나 classname을 주기 위해서이다.
          <br />
          2. link 태그는 그저 href을 주기 위한 용도이고 class나 style을 주기
          위해서는 a 태그에 써야 된다.
          <br />
          3. 새로고침을 하지 않아 속도가 매우 빠르다
        </p>
      </div>
    </div>
  );
}
