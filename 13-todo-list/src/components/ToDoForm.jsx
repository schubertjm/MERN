import React, {useState} from 'react';

const ToDoForm = () => {

    let [toDo, setToDo] = useState (""); 
    let [completeToDoIndicator, setCompleteToDoIndicator] = useState (false)
    let [toDoList, setToDoList] = useState ([]);

    const submitToDo = (e) => {
        console.log("Add ToDo")
        e.preventDefault();
        let toDoItem = {toDo}; //pull values from form
        setToDoList([...toDoList, toDoItem]); //setState
        //clear out the form values
        setToDo("")
    }

    const completeToDo = (e, idx) => {
        console.log("Change ToDo at index ", idx);
        let [...copyList] = toDoList; //copy list so we do not change original (best practice)
        copyList[idx].completeToDoIndicator = e.target.checked; //change tracking field to opposite value
        setToDoList(copyList); //updates setState
    }

    const deleteToDo = (e, idx) => {
        console.log("Delete ToDo at index ", idx)
        //pulls all list items besides the record indicated for deletion
        let filteredCopy = toDoList.filter((toDo, i)=>{
            return i != idx
        })
        setToDoList(filteredCopy)//updates setState with identified record removed
    }

    return(
        <>
            <form onSubmit={submitToDo}>
                <h1>Create To Do</h1>
                <div className="form-group">
                    <label htmlFor="toDo">To Do</label>
                    <input type="text" onChange={(e)=>{setToDo(e.target.value)}} name="toDo" id="toDo" value={toDo} />
                </div>
                <input type="submit" value="Add" />
            </form>
            <hr />
            <div className='toDoList'>
                <div className="container w-50 mt-5">
                    <table className='table table-striped table-bordered'>
                        <tr>
                            <th>To Do</th>
                            <th> </th>
                            <th></th>
                        </tr>
                        {
                            toDoList.map((toDoObj, idx) =>{
                                return(
                                    <tr key={idx}>
                                        <td style={{textDecoration: toDoObj.completeToDoIndicator? "line-through": "none"}}>{toDoObj.toDo}</td>
                                        <td>Complete <input type="checkbox" name="completeToDo" id="completeToDo" onChange={(e)=>completeToDo(e,idx)}/></td>
                                        <td><button onClick={(e)=>{deleteToDo(e,idx)}} >Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        </>
    );

}

export default ToDoForm;