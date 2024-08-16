import Subjects from "./Subjects";

const Services = () => {
  

  
  return (
   
 <section className="container mx-auto p-4 ">
      <div className="grid grid-cols-12 gap-2">
        <div className="lg:col-span-9 col-span-12 border border-emerald-600 border-navy text-center">
         
             <Subjects />
        </div>
        <div className="lg:col-span-3 col-span-12 border border-emerald-600 border-navy text-center">
            <h1>cols-4</h1>
        
        </div>
       
        <div className="col-span-12  border border-emerald-600 text-center">
            <h1>cols-12</h1>
            
        </div>
    </div>
</section>
   
  );
};

export default Services;