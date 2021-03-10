import './App.css';
import Header from '../header'
import Layout from '../layout'
import Footer from '../footer'

import Img from '../images/bg3.jpg'

function App() {

    return (
        <>
            <Header
                title={'This is title'}
                descr={'This is Description!'}
            />
            <Layout
                title={'Layout1 title'}
                descr={'Layout1 descr'}
                urlBg={Img}
            />
            <Layout
                title={'Layout2 title'}
                descr={'Layout2 descr'}
                colorBg={'plum'}
            />
            <Layout
                title={'Layout3 title'}
                descr={'Layout3 descr'}
                urlBg={Img}
            />

            <Footer/>
        </>
    )
        ;
}

export default App;
