import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  //edit description function

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };

      const response = await fetch(`/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
        <button 
        type="button" 
        class="btn btn-warning" 
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.todo_id}`}
        >Edit</button>

        <div
        class="modal fade"
        id={`id${todo.todo_id}`}
        onClick={() => setDescription(todo.description)}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Edit Todo</h5>
                    <button
                    type="button" 
                    class="btn-close" 
                    data-bs-dismiss="modal" 
                    aria-label="close" 
                    onClick={() => setDescription(todo.description)}
                    ></button>
                </div>
                <div class="modal-body">
                   <input
                   type="text"
                   className="form-control"
                   value={ description }
                   onChange={(e) => setDescription(e.target.value) }
                   />
                </div>
                <div class="modal-footer">
                    <button 
                    type="button" 
                    class="btn btn-secondary" 
                    data-bs-dismiss="modal" 
                    >Close</button>
                    <button 
                    type="button" 
                    class="btn btn-warning"
                    onClick={e => updateDescription(e)}
                    >Edit</button>
                </div>
                </div>
            </div>
        </div>
    </Fragment>
  );
};

export default EditTodo;