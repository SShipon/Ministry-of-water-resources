
import { useContext } from "react";

import { AuthContext } from "../../context/useContext";



export default function Services() {

  const{ data }= useContext(AuthContext)
  console.log(data)
  
  return (
 
     <section>
       <div className="flex ...">
       <div  className="w-2/5 ...">w-2/5</div>
       <div  className="w-3/5 ...">w-3/5</div>
  
  </div>
     </section>
  
  );
}
