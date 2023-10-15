import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    // console.log(event.target.value);
    setToDo(event.target.value);
  };
  //   console.log(toDo);

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(toDo);
    // 입력창이 비어있는것을 원하지 않기 때문에 비어있는 경우, 함수를 작동하지 않도록 만들기.
    if (toDo === '') {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo('');
  };
  //   console.log(toDos);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
