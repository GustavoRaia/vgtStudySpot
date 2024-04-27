import Sql from './Sql/Sql.jsx';
import Mdl from './ModelagemDados/Mdl.jsx';

const Bd = () => (
    <>
        {/* <div style={{backgroundColor: "white"}}> */}
        <div>
            <Mdl />
            {/* <hr style={{color: "gray", width: '70%', margin: 'auto'}}/> */}
            <Sql />
        </div>    
    </>

);

export default Bd;