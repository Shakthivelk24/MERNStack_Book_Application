import React from "react";
import list from "../../public/list.json";

export default function FreeBook() {
  const freeBooks = list.filter((data) => data.category === "Free");
  console.log(freeBooks);
  return(
    <>
     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore ratione eos eius corporis hic, at incidunt assumenda. Distinctio ipsa dolores beatae nostrum? Explicabo vitae esse fugit expedita est libero autem!
        </p>

     </div>
    </>
  );
}
