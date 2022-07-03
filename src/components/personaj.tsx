import samurai from '../assets/images/samurai.png';


export const Personaj = ({ damage}) => {
    return (
        <div className="personaj" onClick={() => damage() }>
          
        <div>
          <img src={samurai} style={{width: '450px', height: '500px',}}/>
        </div>
        </div>
    );
};



