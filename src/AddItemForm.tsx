import { ChangeEvent, KeyboardEvent, useState } from "react";
import { Button } from "./Button";

type PropsType ={
  addItem: (title: string) => void
}

export const AddItemForm = ({addItem}: PropsType) => {

  const [taskTitle, setTaskTitle] = useState('')
	const [error, setError] = useState<string | null>(null)

  const addItemHandler = () => {
		if (taskTitle.trim() !== '') {
			addItem(taskTitle.trim())
			setTaskTitle('')
		} else {
			setError('Title is required')
		}
	}

	const changeTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setTaskTitle(event.currentTarget.value)
	}

  const addItemOnKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
		setError(null)
		if (event.key === 'Enter') {
			addItemHandler()
		}
	}

  return (
    <div>
      <input
        className={error ? 'error' : ''}
        value={taskTitle}
        onChange={changeTaskTitleHandler}
        onKeyUp={addItemOnKeyUpHandler}
      />
      <Button title={'+'} onClick={addItemHandler}/>
      {error && <div className={'error-message'}>{error}</div>}
    </div>
  );
};