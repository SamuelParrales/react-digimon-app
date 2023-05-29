import PropTypes from 'prop-types';

export const DigimonCharacteristic = ({ title, characteristics, att }) => {
    const characts = characteristics.map((c) => {
        return {
            id: c.id,
            description: c[att],
        }
    })
    return (
        <div className="digimon-characteristic">
            <h3 className="digimon-characteristic__heading">{title}</h3>
            {
                <p className="digimon-characteristic__description">
                    {
                        characts.map(({description }) => description).join(' | ')
                    }
                </p>

            }
        </div>
    )
}

DigimonCharacteristic.propTypes = {
    title: PropTypes.string.isRequired,
    characteristics: PropTypes.array.isRequired,
    att: PropTypes.string.isRequired,
}