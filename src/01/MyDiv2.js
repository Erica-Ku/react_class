

const MyDiv2 = () => {
  const myName = 'Ku Minji' ;
  const myGit = 'https://github.com/Erica-Ku' ;
  console.log(myName) ;
  return (
    <div>
       <p>{myName}</p>
       <p>Github : <a href={myGit}>{myGit}</a></p>
    </div>
  );
}

export default MyDiv2;