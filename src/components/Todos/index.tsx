import React, { useState, useRef } from "react";
import "./style.css";
// ref는 키값을 설정할 때 사용(게시판 키 등)
import Checkbox from "@mui/material/Checkbox";
// 체크박스 사용 mui
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

type TodosProps = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}[];

export default function Todos() {
  const [todos, setTodos] = useState<TodosProps>([]); // useState로 선언하기, todo배열 선언          처음에는 [] 빈칸으로 시작-usedEffect를통해서 값이들어감,todos배열완성
  const [text, setText] = useState("");

  const nextId = useRef(1);

  // useEffect(() => {
  //   fetch("http://jsonplaceholder.typicode.com/todos") // api받아오기- 전부다 받아옴
  //     //userid 1만 나오게 하기
  //     .then((res) => res.json()) //response를 json으로 받아오고
  //     .then((json) => {
  //       // json을 받아서
  //       const result = json.filter((item) => item.userId === 1); // item에 user id가 1인 것만 filter로 걸어주고, const result라는 변수에 담음
  //       setTodos(result); //result에 넣은 값을 setTodos를 활용해서 todos를 바꿔줌
  //     });
  // }, []); // console.log찍어보면 userId가 1인것만 나오게 됨

  const onChange = (e: { target: { value: any } }) => {
    const { value } = e.target;
    if (value.length > 10) {
      alert("최대 10자까지 입력 가능.");
      return;
    }
    setText(value);
  }; // input validation

  // 여기서부터 배열 추가 코드
  const onCreate = (e: { preventDefault: () => void }) => {
    e.preventDefault(); // form이 새로고침 하는 것을 방지
    if (text.length <= 0) {
      alert("내용을 입력해주세요.");
      return;
    }

    // 할일 추가 된 todolist작성
    const result = [
      ...todos,
      {
        userId: 1,
        id: nextId.current,
        title: text,
        completed: false,
      },
    ];
    nextId.current++;
    setTodos(result);
    setText(""); // 내용 입력 후 빈칸으로 만들기
  };

  // 여기서부터 배열 수정 코드
  const onComplete = (id: any) => {
    const result = todos.map((item) => {
      return id === item.id
        ? { ...item, completed: !item.completed }
        : { ...item };
    }); // onComplete함수 선언. id를 받고, 받은 id랑 todo의 id를 검색해서 같을경우 completed를 item의 completed의반대로 변경
    setTodos(result); // result에 담아서 setTodos로 값변경(setStates변경)
  };
  // todos를 사용할 수 있게 됐으니 todos를 꺼내보기

  // 여기서부터 배열 삭제 코드
  const onDelete = (id: any) => {
    const result = todos.filter((item) => {
      return id !== item.id;
    });
    setTodos(result);
  };

  // 할일 목록 렌더링
  const render = todos.map((item) => {
    // render라는 함수를 만들고 todos를 map으로 돌려서 return으로
    return (
      // item을 return으로 하나 씩 돌림,   고유한 key가 있어야하니 item의 id로 지정
      <div key={item.id}>
        <span>#{item.id}.</span>
        <span>{item.title}</span>
        <span onClick={() => onComplete(item.id)}>
          <Checkbox defaultChecked={item.completed} />
        </span>
        <span className="deleteIcon">
          <DeleteIcon onClick={() => onDelete(item.id)}>삭제</DeleteIcon>
        </span>
      </div> //   completed는 true거나 false이기 때문에 삼항연산자로 표시했음   // 클릭을 하면 item.id를 줘서 onComplete라는 함수를 실행함//true일때만 defaultChecked
    ); // span태그로 걸어서
  });

  return (
    <>
      <div className="App">
        <h1>Todo App</h1>
        <form onSubmit={onCreate}>
          <input
            className="inputText"
            name="todo"
            type="text"
            value={text}
            onChange={onChange}
            placeholder="할 일을 입력하세요"
          ></input>
          <Button type="submit" variant="contained">
            추가
          </Button>
        </form>
        <div>{render}</div>
      </div>
    </>
  );
}
