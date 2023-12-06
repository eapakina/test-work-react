import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getServicesThunk } from "../../redux/slices/serviceThunks";

export default function TaskTwoPage() {
  const services = useAppSelector((store) => store.service.data);
  const dispatch = useAppDispatch();
  const loading = useAppSelector((store) => store.service.loading);


  useEffect(() => {
    void dispatch(getServicesThunk());
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }


  return ( <ul>
    { services?.map((item) => (
      <li key={item.id}>
         <a
          href={`/services/${item.id}`}
            >{item.name}</a>
        </li>
    ))
  
}
    </ul>
  

  );
    }
