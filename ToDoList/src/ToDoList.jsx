import { useState } from "react"

export default function ToDoList () {
    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Walk a Dog"]);
    const [newTask, setNewTask] = useState("");

    
    function handleInputChange(event){
        setNewTask(event.target.value);

    }

    function addTask () {
        if(newTask.trim() !== ""){
            setTasks(t =>[...t, newTask]);
            setNewTask("")
        }

    }

    function deleteTask (index){
       const updatedTasks = tasks.filter((_, i) => i !== index)
       setTasks(updatedTasks);

    }

    function moveTaskUp (index){
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    function moveTaskDown (index){
        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }

    }

    return (
    <div className="font-serif text-center mt-4">
    <h1 className="text-6xl text-white">To-Do List</h1>

    <div>
        <input className="text-base p-2.5 border border-solid rounded-md text-black mb-2"
               type="text"
               value={newTask}
               onChange={handleInputChange}
               placeholder="Enter a task..."
        />
        <button className="text-xl font-bold px-2.5 py-2.5 text-white border-none rounded-md cursor-pointer transition bg-green-500 hover:bg-green-700" onClick={addTask}>Add</button>
    </div>
    <ol className="p-0">
        {tasks.map((task, index) => 
        <li className="text-2xl font-bold p-4 bg-white mb-2.5 border border-solid rounded-md flex items-center flex-1" key={index}><span>{task}</span>

        <button className="text-xl font-bold px-2.5 py-2.5 text-white border-none rounded-md cursor-pointer transition bg-red-500 hover:bg-red-700 pt-2 pr-3 ml-2.5" onClick={() => deleteTask(index)}>Delete</button>

        <button className="text-xl font-bold px-2.5 py-2.5 text-white border-none rounded-md cursor-pointer transition bg-blue-500 hover:bg-blue-700 pt-2 pr-3 ml-2.5" onClick={() => moveTaskUp(index)}>☝</button>

        <button className="text-xl font-bold px-2.5 py-2.5 text-white border-none rounded-md cursor-pointer transition bg-blue-500 hover:bg-blue-700 pt-2 pr-3 ml-2.5" onClick={() => moveTaskDown(index)}>👇</button>
        </li>
        )}
    </ol>
    
    </div>)
}