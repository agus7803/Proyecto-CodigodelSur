import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import InputBase  from "@material-ui/core/InputBase";
import { makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper"
import "../style/style.css"

//import '../style/style.css';

class SearchAppBar extends React.Component{
    state={
        search:''
    };
    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.onSearch(this.state.search);
        console.log(event);
    };

    onChange =  (event) => {
        this.setState({search: event.target.value});
        console.log(this.state.search);
    };
    useStyles = makeStyles((theme) => ({
        root: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 12000,
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },

    }))

    render() {
        return(
            <Paper component="form" className={this.useStyles.root} onSubmit={this.handleSubmit}>
                <SearchIcon/>
                    <InputBase
                            className={this.useStyles.input}
                            onChange={this.onChange}
                            placeholder={"Busqueda"} />
                <button className={"margin"}>Busqueda</button>
            </Paper>


            /*<div elevation={6} style={{ padding: "25px" }}>
                <form onSubmit={this.handleSubmit}>

                    <div className={"classes.search"} onSubmit={this.handleSubmit}>
                        <div className={"classes.searchIcon"}>
                            <SearchIcon/>
                        </div>
                        <InputBase  classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                        }}
                                        inputProps={{ 'aria-label': 'search' }}
                                        onChange={this.onChange}
                                        type={'text'}
                                        value={this.state.search}
                                        placeholder={'Busqueda'}/>
                        <Button variant={"contained"} size={"medium"} color={"primary"} className={"classes.margin"}>Busqueda</Button>
                    </div>

                    <form  onSubmit={this.handleSubmit}>
                        <div>
                            <input  onChange={this.onChange} type={'text'} value={this.state.search} placeholder={'Search'}/>
                            <button className={"button"}>Search</button>
                        </div>
                    </form>*/
                //</form>
           // </div>
        )
    }
}

export default SearchAppBar;