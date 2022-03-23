// Componente History() recibe un `prop` al que llamamos `results`

function History({results}) { // prop al que llamamos results
    // results.map para obtener un array de elementos li
    const liArray = results.map(
        (item,idx)=> <li key={idx}>{item}</li>
    )
    return (
        // salida del componente un elemento ol que contiene los elementos de liArray
        <>
        <ol>{liArray}</ol> 
        </>
    )
}
export default History;





       



















 //item => <li>{item.primerOperador} {item.operador} {item.segundoOperador} = {item.resultado}</li>





