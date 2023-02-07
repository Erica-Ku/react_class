const Div11 = (probs) => {
    const user = probs.user ;
    
    return (
        <div className="div11">
            <h3>div11</h3>
            <p>
                {user}
            </p>
            <p>
                {probs.divname}
            </p>
        </div>
    ) ;
}

export default Div11 ;