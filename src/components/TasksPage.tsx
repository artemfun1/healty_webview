import { Task } from './Task'


export const TasksPage = () => {


  return (
    <div className='tasks-block'>
      <Task name={'Brush your teeth in the morning'}/>
      <Task name={'Do exercises'}/>
      <Task name={'Eat fruit'}/>
      <Task name={'Brush your teeth in the evening'}/>
    </div>
  )
}
