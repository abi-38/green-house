import '../styles/Banner.css'

const Banner = ({ children }) => {
    return (
        <header className='gh-banner' >
            {children}
        </header>
    )
}

export default Banner