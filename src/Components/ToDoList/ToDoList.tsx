import React, { ReactNode } from 'react';


import ToDoItem from '../ToDoItem/ToDoItem';

import  { ToDo }  from 'constants/types/ToDo';

const ToDoList = () => {

    const listItems:ToDo[] = [
        {
            id:0,
            title: 'Task 1',
            desc: "Lorem ipsum set dolores"
        },
        {
            id:1,
            title: 'Task 2',
            desc: "Lorem ipsum set dolores uno dos tres"
        },
        {
            id:2,
            title: 'Task 3',
            desc: "Hello World"
        }
    ]

    const renderToDoList = ():ReactNode => listItems.map( todo => <ToDoItem  key={todo.id} todo={todo} />)
    

    return (
        <>
            {renderToDoList()}
        </>
    );
}

export default ToDoList;