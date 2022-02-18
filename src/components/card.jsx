import React, { useState } from "react";
import EditTask from "./editTask";




const Card = (props) => {
    const{taskObj, index, deleteTask, updateListArray } =props;
    const[modal,setModal] = useState(false);
    

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];

  const handleDelete = () => {
    deleteTask(index);
  }

  const handleClick =() => {
    setModal(true);
  }

  const toggle = ()=> {
    setModal(!modal);
  }

  const updateTask = (obj) => {
    updateListArray(obj, index);
    
  }
  return (
    <div class="card-wrapper mr-5">
      {/* <div
        class="card-top"
        style={{ "background-color": colors[index % 5].primaryColor }}
      ></div> */}
      <div class="task-holder">
        <div className="head">
        <span
          class="card-header"
          style={{
            "background-color": colors[index % 5].secondaryColor,
            "border-radius": "5px",
          }}
        >
          {taskObj.Name}
        </span>
        <div className="but" style={{ position: "absolute", right: "20px"}}>
          <i
            class="far fa-edit"
            style={{ color: colors[index % 5].primaryColor, cursor: "pointer", marginRight: "15px" }}
            onClick={handleClick}
          ></i>
          <i
            class="fas fa-trash-alt"
            style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }}
            onClick={handleDelete}
          ></i>
        </div>
  



        </div>

        <div className="desc">
        <p className="mt-3">{taskObj.Description}</p>
        </div>
    </div>
      <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      />
    </div>
  );
};

export default Card;
