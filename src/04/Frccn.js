const Frccn = ({dt, cn}) => {
    console.log(cn) ;
    let infoArray = cn.split(',') ;
    let kn = 0 ;

    infoArray = infoArray.map((v)=> 
                <li key={dt + kn++}>
                    <span>{v.split(':')[0]}</span>&nbsp;:&nbsp;&nbsp;(
                    {v.includes('높음') ? 
                    <span className="lired">{v.split(':')[1]}</span> :
                    <span>{v.split(':')[1]}</span>
                    })
                </li>
            ) ;
    
    return (
        <div className="box2">
            <div className="detail">
                <ul className="list">
                    {infoArray}
                </ul>
            </div>
        </div>
    ) ;
}

export default Frccn ;