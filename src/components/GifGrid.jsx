import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
        <h3>{ category }</h3>
        {
          isLoading && ( <h2>Cargando...</h2> )
        }
        

        <div className="card-grid"> 
        {
          images.map( (image) => (
            <GifItem 
              key={ image.id } 
              //los 3 puntos esparcen las props de image
              { ...image }
            />

          ))
        } 
          
        </div>

        {/* <ol>
        {
          images.map( ({id, title}) => (
            <li key= {id} >{ title }</li>
          ))
        } 
        </ol> */}
    </>
  )
}
