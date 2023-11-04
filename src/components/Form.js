//==========Archivos exportados-importar(Dependencias y demas)==========//
import React, { useState } from "react";
//==========Funcion==========//
const Form = ({newLocation}) => { //Nombre de la etiqueta creada
    const [city, setCity] = useState(""); //Para la ciuad de busqueda
    const onSubmit = (e) => {
        e.preventDefault();
        console.log({city});
        if(city==="" || !city) return;
        newLocation(city);
    }
    return ( //Agregar html ala etiquieta
        <div className="container">
                <form onSubmit={ onSubmit }>
                    <div className="input-group mb-3 mx-auto">
                    <input type="text" className="form-control" placeholder="Search city" onChange={(e) =>setCity(e.target.value)}/>
                        <button className="btn btn-primary input-group-text" type="submit">Search</button>
                    </div>
                </form>
        </div>
    );
}
export default Form; //Importar etiqueta creada