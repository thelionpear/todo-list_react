import React from 'react'

//is this a functional component or a class component?
//will it have state? Then = class. If no then
//will this component need lifecycle methods? if Yes, then = class. 
//state or lifecycle methods = class


//if you have curly brackets, you need to return
//if you're just returning JSX, only need paranthesis and no return. It will return JSX automatically 
const List = ({ name, items }) => (
    <div>
        <h2>{name}</h2>
        <ul>
            { items.map ( item => <li key={item.id}>{item.name}</li>
            )}
        </ul>
    </div>
)

export default List; 