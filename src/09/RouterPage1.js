import { useParams } from "react-router-dom";

const RouterPage1 = () => {
    const item = useParams().item ;
    console.log(item) ;

    const fruits = ['μ¬κ³Όπ', 'λ°λλπ']  ;
    let tag = fruits.includes(item) ? "κ³ΌμΌμλλ€." : "κ³ΌμΌμ΄ μλλλ€."

    return (
        <>
            <h1>Page1</h1>
            <p>{`${item}λ ${tag}`}</p>
        </>
    ) ;
}

export default RouterPage1 ;