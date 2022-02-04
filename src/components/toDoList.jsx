import React, { Component } from "react";
import Card from "./card";
import CreateTask from "./createTask";

class Todo extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    modal: false,
    taskList: [],
  };
  componentDidMount() {
    let temp = localStorage.getItem("taskList");
    if (temp) {
      let arr = JSON.parse(temp);
      this.setState({ taskList: arr });
    }
  }

  toggle = () => {
    let tempModal = !this.state.modal;
    this.setState({ modal: tempModal });
  };

  handleClick = () => {
    this.setState({ modal: true });
  };

  saveTask = (obj) => {
    let tempList = [...this.state.taskList];
    tempList.push(obj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    this.setState({
      modal: false,
      taskList: tempList,
    });
    
  };

  deleteTask= (index) => {
    let tempList = [...this.state.taskList];
    tempList.splice(index,1);
    this.setState({taskList: tempList});
    localStorage.setItem("taskList", JSON.stringify(tempList));
  };

  updateListArray = (obj, index) => {
    let tempList = [...this.state.taskList];
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList))
    this.setState({taskList: tempList});
    window.location.reload();
  }








  render() {
      const{taskList, modal} = this.state;
    return (
        <>
        <div className="header">
          <h3>Todo List</h3>
          <button className="btn btn-info" onClick={this.handleClick}>
            Create Task
          </button>
        </div>
        <div className="task-container">
          {taskList.length > 0
            ? taskList.map((item , index) => {
                return <Card taskObj={item} index={index} deleteTask={this.deleteTask} updateListArray={this.updateListArray}/>;
              })
            : null}
        </div>
        <CreateTask toggle={this.toggle} modal={modal} save={this.saveTask} />
      </>
  
    )
  }
}

export default Todo;
