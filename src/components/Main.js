import React from 'react';
import Nav from './Nav'
import Sidebar from './Sidebar'
import Home from '../routers/Index'
class Main extends React.Component {
    render() {
        console.log(this.props.children)
        return (
            <div>
                <Nav/>
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar />
                        <div style={{margin:0}} className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">                     
                                <Home/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Main
