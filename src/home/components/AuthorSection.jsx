
export const AuthorSection = () => {
  return (
    <section className="author">
        <div className="author__img-container">
            <img src="author.png" alt="" className="author__img" />
        </div>
        <div className="author__content">
            <h2 className="author__name">Samuel Parrales Palma</h2>
            <span className="author__profession">Developer</span>
        </div>
        <div className="author__social">
          <a 
            className="author__social-link"
            href="https://github.com/SamuelParrales"
            target="_blank"   
            rel="noreferrer" 
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a 
            className="author__social-link author__social-link--linkedin"
            href="https://www.linkedin.com/in/samuel-parrales/"
            target="_blank"   
            rel="noreferrer" 
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        
        </div>
    </section>
  )
}
