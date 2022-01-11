import React, { useEffect, useState } from "react";
import Card from "./card";
import CreateTask from "./createTask";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
      let temp = localStorage.getItem("taskList");
      if(temp) {
        let arr = JSON.parse(temp);
          setTaskList(arr)
      }
  }, [])


  const toggle = () => {
    setModal(!modal);
  };

  const handleClick = () => {
    setModal(true);
  };

  const saveTask = (obj) => {
    let tempList = [...taskList];
    tempList.push(obj);
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList);
    setModal(false);
  };
  
  const deleteTask= (index) => {
    let tempList = [...taskList];
    tempList.splice(index,1);
    setTaskList(tempList);
    localStorage.setItem("taskList", JSON.stringify(tempList));
  }

  const updateListArray = (obj, index) => {
    let tempList = [...taskList];
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList);
    window.location.reload();

  }



  return (
    <>
      <div className="header text-center">
        <h3>Todo List</h3>
        <button className="btn btn-primary mt-2" onClick={handleClick}>
          Create Task
        </button>
      </div>
      <div className="task-container">
        {taskList.length > 0
          ? taskList.map((item , index) => {
              return <Card taskObj={item} index={index} deleteTask={deleteTask} updateListArray={updateListArray}/>;
            })
          : null}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default TodoList;
