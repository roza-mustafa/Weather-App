import React from 'react';
import { Link } from 'react-router-dom';

const City = [
    {
      Id:1,
        Name: 'Erbil',
        Image: 'https://th.bing.com/th/id/R.0b3a66a1cc095f9b530a9e002d343075?rik=fUvLZhksNdeIWw&riu=http%3a%2f%2fwww.puknow.com%2fPhoto%2fImg%2f7320202Erbil_Cihan_3.jpg&ehk=N%2fhsHN7dvuxaITlCp%2bolM9ULTRfnngYYPMsmMYK9s3w%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
       
    },
    {
      Id:2,
        Name: 'Sulaymaniyah',
        Image: 'https://media.tehrantimes.com/d/t/2021/03/06/4/3711255.jpg',
        
    },
    {
        Id:3,
        Name: 'Duhok',
        Image: 'https://live.staticflickr.com/3360/4606968784_316047a67b_b.jpg',
      
    },
    {
        Id:4,
        Name: 'kirkuk',
        Image: 'https://cdn.kurdistan24.net/resources/files/2017/10/Kirkuk%20Tour/KirkukPesh.jpg',
         }
]
const Projects= props =>
{
  return(
City.map(el=>{
  return(
   
    <Link to={`/Projects/${el.Name}`} >
  <div className='city-div'>
  <img src={el.Image} alt={el.Name}/>
   <h4>{el.Name}</h4>

</div>
</Link>

  )
}
)
      
  )
}
export default Projects;