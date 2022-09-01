import { Component} from 'react'
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'

const styles = {
    carro: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer'

    },
    bubble: {
        position: 'relative', //-> Posición relativa al div que lo está envolviendo, se puede mover sin alterar nada más
        left: 12, // -> se mueve de la izquierda a la derecha 12 pixeles
        top: 20, // -> Se mueve de arriba hacía abajo 20 pixeles

    }
}




class Carro extends Component{
    render(){
        const {carro, esCarroVisible, mostrarCarro} = this.props
        const cantidad = carro.reduce((acc, el)=> acc + el.cantidad, 0)
        return(
            <div>
            <span style={styles.bubble}>
                {/* Render condicional */}
                {cantidad !== 0 ?  <BubbleAlert value={cantidad}/> : null}
               
            </span>
            <button onClick={mostrarCarro} style={styles.carro}>
                Carro
            </button> 
            {/* Operador ternario */}
            {esCarroVisible ? <DetallesCarro carro ={carro}/> : null}
            
            </div>
          
        )
    }
}
export default Carro