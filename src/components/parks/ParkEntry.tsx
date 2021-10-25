import Park from "../../models/Park";


const ParkEntry : React.FC<Park> = (prop : Park) => {
    return(
        <div style={{backgroundColor: "lightblue"}}>
            {prop.fullName}
        </div>
    );

}

export default ParkEntry;