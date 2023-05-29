
import { DigimonCharacteristicList } from "./DigimonCharacteristicList"
import PropTypes from 'prop-types';
export const Digimon = ({ digimon }) => {
    
    return (
        <div className="digimon">
            <div className="digimon__container ">
                <div className="digimon__grid">
                    <div className="digimon__img-container">
                        <img src={digimon.images[0].href} alt="" className="digimon__img" />
                    </div>
                    <div className="digimon__content">
                        <h1 className="digimon__heading">{digimon.name}</h1>
                        {
                            digimon.descriptions.map(({ description, language }) =>
                                <p key={language} className="digimon__description">{description}</p>
                            )
                        }
                    </div>
                </div>
                    
            </div>
            <DigimonCharacteristicList digimon={digimon}/>
        </div>
    )
}


Digimon.propTypes = {
    digimon: PropTypes.object.isRequired,
}