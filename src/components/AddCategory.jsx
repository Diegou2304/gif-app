import { useState } from "react";

export const AddCategory = ( {onNewCategory} ) => {
    
    const initialValue = '';
    const [inputValue, setInputValue] = useState(initialValue)

    const onInputChange = ({target}) => {
        setInputValue(target.value)
     
    }

    const onSubmit = () => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onNewCategory(inputValue)
        setInputValue('');
        
    }
    return (
        <form onSubmit={(event) => onSubmit(event)}>
                <input
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue}
                onChange = {onInputChange}></input>
                

        </form>
        
    );
    
}

