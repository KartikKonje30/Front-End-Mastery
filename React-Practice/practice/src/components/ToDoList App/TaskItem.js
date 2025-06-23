
import Delete from '../../assets/delete.png'
import noTick from '../../assets/not_tick.png'
import Tick from '../../assets/tick.png'
import './ToDoList.css'

const TaskItem = ({text, id, isComplete, deleteItem, toggle}) => {
    return (
        <div className='TaskItem'>
            <div className='TaskUI' onClick={() => {toggle(id)}}>
                <img src={isComplete ? Tick : noTick} alt="Unmarked icon" className='icon'/>
                {isComplete ? <p style={{textDecoration: "line-through"}}>{text}</p> : <p>{text}</p>}
            </div>
            <img onClick={() => {deleteItem(id)}} src={Delete} alt='' className='deleteIcon'/>
        </div>
    )
}

export default TaskItem