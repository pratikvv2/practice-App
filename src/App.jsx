import Header from "./components/Header/Header"
import Slider from "./components/Slider/Slider"


function App() {
  const containerStyle = {
    
    alignItems: 'centre',
    padding: '20px',
    justifyContent: 'centre',
    display: 'flex',
    height : '100vh' 
  }
  // const headerStyle = {
  //  color: 'white',
  //  textAlign: 'centre',
  // }

  return (
    <>
     <Header/>
     <Slider/>
     <div   style={containerStyle}>
     
     <header style={headerStyle}>
                                                  News and Media
     </header>
     </div>
     
     
    </>
  )
}

export default App
