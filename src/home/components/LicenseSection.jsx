
import CCBYSA from '/CC-BY-SA.png';

export const LicenseSection = () => {
  return (
    <section className="license container">
      <p className="license-description">Digimon and other media relating to the franchise are registered trademarks of Bandai.</p>
      <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noreferrer">
        <img className="license__img" src={CCBYSA} alt="img license" />
      </a>
    </section>
  )
}
