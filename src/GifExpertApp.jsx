
import { useState } from 'react';
import { AddCategory,GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {
        
        if (categories.includes(newCategory)) return; 

        // categories.push(newCategory);

        // los tres puntos son para copiar la info
        setCategories([newCategory, ...categories]);
        // setCategories( cat => [ ...cat, 'Barbie' ] );
    };

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
            // setCategories= {setCategories }
            onNewCategory={ (value) => onAddCategory(value) }
        />       

        {/* Listado de Gif */}
        
        { 
            categories.map( (category) => (
                    <GifGrid key={ category } category={ category }/>
            ))
        }
            {/* <li>ABC</li> */}
           
       
            {/* Gif Item */}





    </>
  )
}

