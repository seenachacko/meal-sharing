import React ,{useState}from 'react';
export const Inputbox=({input,setInput})=>{
return(<div>
    <input
          type="text"
          placeholder="search"
          name="search Meal"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
</div>)




}