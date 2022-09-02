import React, {Component } from 'react';

class Buscador extends Component {

    busquedaRef = React.createRef();

    obtenerDatos = (e) =>{
        e.preventDefault();
        // Tomamos el valor del input
        const termino = this.busquedaRef.current.value
        // Y Lo pasamos al componente principal App.js
        this.props.datosBusqueda(termino);
        
    }

    render(){
        return(
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-11">
                        <input ref={this.busquedaRef} type="text" className="form-control form control-lg" placeholder="Busca tu imagen. Ejemplo: Fresa, Baseball, etc. " />
                    </div>
                    <div className="form-group col-md-1">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar" />
                    </div>
                </div>
            </form>
        );
    }
}

export default Buscador;