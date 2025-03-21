import { useState } from "react";
import MoviesList from "./MoviesList";

function Usestate(){
   
   
   
   
    return(
    <section>
       <form>

        <div>
            <h3>ชื่อ</h3>
            <input type="text" />
        </div>

        <div>
            <h3>อีเมล</h3>
            <input type="email" />
        </div>
       
       <div>
        <h3>เลือกหนังที่ชอบ</h3>
        <MoviesList/>
      
       </div>

       </form>
    </section>    
    )
 }
export default Usestate