import { Component} from 'react'
//import Carro from './Carro'


const styles = {
    detallesCarro:{
        backgroundColor: '#fff', //Reemplaza lo que está detrás,
        position: 'absolute',
        marginTop: 30,
        boxShadow:  '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 50, //-> Esto obliga a tomar un valor de tope de referencia desde el cual desplazarse o ubicarse. 

    },
    ul:{
        margin: 0,
        padding: 0,
    },
    producto:{
        listStyleType: 'none', //->esto para que elimne los puntos de equema
        display: 'flex', //distribución libre
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 15px',
        borderBottom: 'solid 1px #aaa'

    },
}

class DetallesCarro extends Component{
    
 
    
    render(){
        const {carro} = this.props
        return(
            <div style= {styles.detallesCarro}>
                <ul style = {styles.ul}>
                    {carro.map(x=> 
                    <li style={styles.producto} key={x.name}>
                        <img alt={x.name} src={x.img} width= '50' height='32'/>
                        {x.name} <span> {x.cantidad}</span>
                        </li>)}
                </ul>
            </div>

        )
    }
}

export default DetallesCarro