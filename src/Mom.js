import Baby from "./Baby"
function Mom(props) {
    return (
      <div className="Mom">
    <h1> Mama</h1>
    <h3>{props.mama}</h3>
    <Baby baby={props.baby} setBaby={props.setBaby}/>
      </div>
    );
  }
  
  export default Mom;
  