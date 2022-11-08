import PropTypes from 'prop-types';




function Header({ text }) {
    const HeaderStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
  return (
      <header style={HeaderStyle}>
          <div className="container">
              <h2>{text}</h2>
          </div>
    </header>
  )
}
Header.defaultProps = {
    text: 'Hello World'
}

Header.propTypes = {
    text: PropTypes.string
}


export default Header