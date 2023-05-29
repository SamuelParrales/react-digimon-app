import { DigimonCard } from "./DigimonCard"
import PropTypes from 'prop-types';

export const DigimonList = ({ digimons }) => {
  return (

    <div className="digimon-list">
      <div className="digimon-list__grid container">
        {
          digimons.length > 0
          &&
          digimons.map((digimon) =>
            <DigimonCard key={digimon.id} digimon={digimon} />
          )
        }
      </div>
    </div>


  )
}

DigimonList.propTypes = {
  digimons: PropTypes.array.isRequired,
}
