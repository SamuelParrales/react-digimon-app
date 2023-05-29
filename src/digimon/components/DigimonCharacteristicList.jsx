import { DigimonCharacteristic } from './DigimonCharacteristic'
import PropTypes from 'prop-types';

export const DigimonCharacteristicList = ({ digimon }) => {
    return (
        <div className='digimon-characteristic-list'>
            <div className='digimon-characteristic-list__container'>
                <DigimonCharacteristic
                    title='Attibutes'
                    characteristics={digimon.attributes}
                    att='attribute'
                />
                <DigimonCharacteristic
                    title='Levels'
                    characteristics={digimon.levels}
                    att='level'
                />
                <DigimonCharacteristic
                    title='Fields'
                    characteristics={digimon.fields}
                    att='field'
                />

                <DigimonCharacteristic
                    title='Types'
                    characteristics={digimon.types}
                    att='type'
                />
                <DigimonCharacteristic
                    title='Skills'
                    characteristics={digimon.skills}
                    att='skill'
                />
            </div>

        </div>
    )
}


DigimonCharacteristicList.propTypes = {
    digimon: PropTypes.object.isRequired,
}