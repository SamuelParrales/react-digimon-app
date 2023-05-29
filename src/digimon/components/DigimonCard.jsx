import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

export const DigimonCard = ({digimon}) => {
  return (
    <div className="digimon-card">
            <div className="digimon-card__img-container">
                <img className="digimon-card__img" src={digimon.image} alt={digimon.name} />
            </div>
        <h3 className="digimon-card__heading">{digimon.name}</h3>
        <Link to={`${digimon.id}`} className="digimon-card__link">See more</Link>
    </div>
  )
}


DigimonCard.propTypes = {
  digimon: PropTypes.object.isRequired,
}