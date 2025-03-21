
import './App.css';
import {useState} from 'react'

function App() {
  const [todos,settodos]=useState([])
  const [todo,settodo]=useState('')
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>TaskMaster: Your Ultimate To-Do List Manager" 🚀✅ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e)=>settodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>settodos([...todos,{id:Date.now() ,text : todo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        { todos.map((obj)=>{
       
       return(<div className="todo" key={obj.id}>
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked)
              console.log(obj)
              settodos(todos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.checked
                }
                return obj2
              }))
            }} 
            value={obj.status} type="checkbox" name="" id="" />
  <input
    type="text"
    value={editingId === obj.id ? editingText : obj.text}
    readOnly={editingId !== obj.id}
    onClick={() => {
      setEditingId(obj.id);
      setEditingText(obj.text);
    }}
    onChange={(e) => setEditingText(e.target.value)}
    onBlur={() => {
      settodos(
        todos.map((obj) =>
          editingId === obj.id ? { ...obj, text: editingText } : obj
        )
      );
      setEditingId(null);
    }}
    onKeyDown={(e) => {
      if (e.key === 'Enter') {
        settodos(
          todos.map((obj) =>
            editingId === obj.id ? { ...obj, text: editingText } : obj
          )
        );
        setEditingId(null);
      }
    }}  
  />
          </div>
          <div className="right">
            <i onClick={() => settodos([...todos.filter((obj3) => obj3.id !== obj.id)])} className="fas fa-times" ></i>
          </div>
        </div>)
        })}
{todos.some((obj) => obj.status) && <h3 style={{ color: 'white' }}>Completed Tasks</h3>}
 {todos.map((obj) => obj.status && <h1 key={obj.id}>{obj.text}</h1>)}

      </div>
    </div>
      )}


export default App;
