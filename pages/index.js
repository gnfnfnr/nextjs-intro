import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>next js 시작하기</h1>
      <div>
        1. 파일 생성: npx-create-next-app <br />
        2. 파일 이름: y ⇒ 이름 입력
        <br />
        3. 파일 이동: code 파일 이름
        <br />
        4. 실행시키기: npm run dev <br />
        5. 직접 [http://localhost:3000](http://localhost:3000/) 주소로 쳐서
        이동해야 된다
      </div>
      <h1>라이브러리와 프레임워크 차이</h1>
      <div>
        <h2>라이브러리</h2>
        <p>
          1. 개발자로서 내가 사용하는 것; 라이브러리를 불러오고 사용해서
          무언가를 한다
          <br /> 2. 언제 폴더를 만들지, 어떻게 페이지를 넘어갈지
          <br />
          3.라이브러리는 처음부터 만든다고 생각 - 집짓기
        </p>
        <h2>프레임워크</h2>
        <p>
          1. 나의 코드를 불러오는 것<br />
          2. 특정한 규칙이 있어서 그걸 따라야 된다. <br />
          3. 우린 render하거나 그런 것을 못함
          <br />
          4. 적절한 곳에 배치를 잘하는 것이 매우 중요함
          <br />
          5.아파트에 가구, 침대 배치하는 것
        </p>
        <h3>react와 next의 차이</h3>
        <p>
          react는 라이브러리이기 때문에 주소를 다르게 하기 위해서는 route,
          routes 사용해서 해야 한다. 스스로 모든 것을 해야 한다. 반면 next에서는
          주소를 해당 주소를 다르게 하기 위해서는 pages 폴더 안에 파일하나만
          새로 만들면 된다.(라우팅 자동) next는 프레임워크이기 때문에 규칙에
          따르면 알아서 해준다.
        </p>
      </div>
      <h1>pages</h1>
      <div>
        1. pages안에 있는 파일들은 파일이름을 토대로 한 주소를 만든다
        <br /> 2. component의 이름은 별로 중요하지 않는다. 중요한 것은 보여져야
        하는 컴포넌트가 export defult이어야 하는 것이다.
        <br /> 3.주소에 해당하는 파일이름이 없다면 404 파일을 보여준다. → 커스텀
        가능
        <br />
        4. 예외
        <br />
        1. index.js: 홈(/)으로 연결해준다. index이름을 가진 주소를 가지고 있지는
        않다. <br />
        2. jsx를 쓰고 있다면 react를 import할 필요가없다
        <br /> 3. useState, useEffect를 사용할 때만 불러오면 된다.
      </div>
      <h1>react와 next의 결정적 차이</h1>
      <div>
        <h2>react</h2>
        <p>
          1.react는 client-side-render를 하는 앱<br />
          *client-side-render: 브라우저가 유저가 하는 ui를 만드는 모든 것을 의미
          <br /> 2. 유저가 보는 html 소스코드 안에 유저가 보는 ui가 들어있지
          않다
          <br />
          3. react으로 만들어진 웹의 페이지 소스를 확인해보면 id=root인 빈 div만
          있는 것을 확인할 수 있다. 후에 브라우저가 react js를 다운받고 나머지를
          렌더링하는 것이다.
          <br />
          4.결국 Client-side-render: 브라우저가 자바스크립트를 가져와서 모든
          ui를 만든 것이다.
          <br />
          5.그렇다면 js가 비활성화된 환경에서는 어떻게 보일까? noscript태그 안에
          있는 내용이 보여진다. (이건 정말 레어한 경우이고 그렇기에 잘못된
          비교이다)
          <br />
          6.(정확한비교): 네트워크 환경이 느린 경우 - 네트워크가 느리면 가져오는
          시간이 느려지기 때문에 렌더링 하기 전에 아무것도 빈 div만 보이기에 흰
          화면만 보인다
        </p>
        <h2>next</h2>
        <p>
          1. “숫자 0”라는 html 소스코드가 있는 것을 볼 수 있다 <br /> 2. api를
          가져오는데 시간이 걸릴 수 있어도 ( nav )같은 html 소스코드를 볼 수
          있다. ⇒ pre rendering <br /> 3. next js의 초기 상태는 pre rendering
          상태이다.
        </p>
      </div>
      <h1>pre render 확인하기 위한 예제</h1>
      <div>숫자 {counter}</div>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        +
      </button>
    </>
  );
}
