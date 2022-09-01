import { Component} from 'react'
const styles = {
    bubbleAlert: {
        backgroundColor: '#E9725A',
        borderRadius: '15px',
        color: '#fff',
        padding: '2px 10px',
        fontSize: '0.9rem',
        width: '20px',
    } 

}

class BubbleAlert extends Component{
    //crear método
    getNumber(n){
        //Condicional, negación de n
        if(!n){
            return ' '
        }
        //Ternario
        return n > 9 ? '9+' : n
    }
    
    render(){
        const { value} =  this.props
        return(
            <span style ={styles.bubbleAlert}>
                {this.getNumber(value)}
            </span>
        )
    }
}
export default BubbleAlert