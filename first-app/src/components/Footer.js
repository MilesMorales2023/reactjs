let year = new Date().getFullYear()

const Footer = () =>{
    return(
        <div style={{marginTop: "26%"}} className="footer">
        <p style={{textAlign: "center"}}>&copy;copyright {year}</p>
    </div>
    )
};
export default Footer;
