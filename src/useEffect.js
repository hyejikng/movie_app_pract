import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState();
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    // console.log(event.target.value);
    setKeyword(event.target.value);
  };
  console.log('I run all the time');
  // 위와같이 console에 전송했을때, 완전 처음에만 'render'이 콘솔창에 뜨고 state값이 변할때는 랜더링 되지 않게 하는방법이 없을까?
  // 아래 counter UI만 새로 랜더링하면 되는데 전체가 re-render되는건 너무 불필요해!! (즉, 특정 코드의 재실행을 방지하고 싶다!)
  // const iRunOnlyOnce = () => {
  //   console.log('I run only once');
  // };
  // useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    console.log('I run only once');
  }, []);
  // useEffect(() => {
  //   console.log('Search for', keyword);
  // }, [keyword]);
  // 배열을 빈칸으로 남겼을때 한번만 실행되는 이유는 react가 지켜볼 게 아무것도 없으니까 처음 한번만 실행되는것.
  // 브라우저를 실행했을때 아무것도 없이 검색창이 리랜더링 되는걸 막기위해 if문
  useEffect(() => {
    // if (keyword !== '' && keyword. > 5) {
    //   console.log('Search for', keyword);
    // }
  }, [keyword]);

  useEffect(() => {
    console.log("I only run when 'counter' changes");
  }, [counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
