import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GitExpertApp = () =>{
    const initialCategories = []
    const [categories, setCategories] = useState(initialCategories);
    
    const onAddCategory =  (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory,...categories]);
    }

    return( 
        <>
        <h1>GifExpertApp</h1>
       
       <AddCategory 
            onNewCategory = { value => onAddCategory(value) }
       />
        {
            categories.map( (category) => (
                <GifGrid key = {category} category={category} />
            ))
        } 

        </>
    )
}