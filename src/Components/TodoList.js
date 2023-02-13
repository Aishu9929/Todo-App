import React from 'react';
import { useState } from 'react';


function TodoList() {
    const [activity , setActivity] = useState(" ");
    const [listData , setlistData] = useState([ ]);
    function addActivity() {
       setlistData((listData) => {
        const updatedList = [...listData, activity]
        setActivity(" ");
        return updatedList
       })    
    }
    function removeActivity(i) {
         const updatedListData = listData.filter((elem , id) => {
            return i!==id;
         })
         setlistData(updatedListData);
    }
    function removeAll() {
        setlistData([ ])
    }
  return (
    <>
    <div className='container'>
      <div className="header">TODO LIST</div>
      <input type='text' placeholder='Add activity' value={activity} onChange = {(e) => setActivity(e.target.value)} />
      <button  onClick={addActivity}>Add</button>
      <p className="list-heading">Here is your List :</p>
      {listData!== [] && listData.map((data , i)=> {
        return(
            <>
            <p key={i}>
                <div className='listData'>{data}</div>
                <div className='ButtonPosition'> <button onClick={() => removeActivity(i)}>remove</button></div>
            </p>
            </>
        )
      } )}
      {listData.length >=1 && <button className='btn' onClick={removeAll}>Remove All</button>}
    </div>
    </>
  )
}

export default TodoList
