import './Footer.css'

function Footer() {
    return (
        <div id='footer'>

            <h6>© 2023 All Rights Reserved.</h6>

            <div className="wrapper">
                <div className="social-icons">
                    <a className="social-icon mail" href="mailto:esmailjawabreh@gmail.com" target="_blank" rel="author">
                        <i className="fa-sharp fa-solid fa-envelope"></i>
                    </a>

                    <a className="social-icon instagram" href="https://www.instagram.com/esmail.sudgi/" target="_blank"
                        rel="author">
                        <i className="fab fa-instagram"></i>
                    </a>

                    <a className="social-icon github" href="https://github.com/Esmail-Jawabreh" target="_blank" rel="author">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>

        </div>
    )
}


export default Footer;