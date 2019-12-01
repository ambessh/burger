import React,{Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from'./Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';




class Layout extends Component {


    state={
        backDrop:false,
        showSideDrawer:false
    }
    
    removeBackDrop=()=>{
    this.setState({
    backDrop:false,

    });
    }

    showSideDrawer=()=>{
        this.setState({
            showSideDrawer:true,
            backDrop:true
            
        })
    }

    
    render(){
        
        return(
            <Auxiliary>
                <Toolbar toggleSideDrawer={this.showSideDrawer} ></Toolbar>
            
            {this.state.showSideDrawer?<SideDrawer  showBackdrop={this.state.backDrop} removeBackDrop={this.removeBackDrop}/>:null}
             <main className={classes.Content}>
                {this.props.children}
            </main>
          
            </Auxiliary>
           
        );
    }
}

export default Layout;