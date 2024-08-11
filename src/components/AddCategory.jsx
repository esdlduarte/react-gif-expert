import { useState } from 'react';


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');


    const onInputChange =(event) => { 
        setInputValue(event.target.value);
     }


     const onSubmit =(event) => { 
        event.preventDefault();
       if (inputValue.trim().length<=1)return;
        //setCategories(categories=>[inputValue,...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');
      }

      
  return (
    //esto es un callback
    <form onSubmit={(event)=>onSubmit(event)}> 
    <input
       type="text"
       placeholder="buscar gifs"
       value={inputValue}
       onChange={ onInputChange}
    />
    </form>
  )
}
