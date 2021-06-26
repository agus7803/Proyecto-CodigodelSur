import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import InputBase  from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import {Toolbar} from "@material-ui/core";


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

    render() {
        return(
            <div>
                <form  onSubmit={this.handleSubmit}>
                    <Toolbar>
                        <div className={'search'}>
                            <div className={"searchIcon"}>
                                <SearchIcon />
                            </div>
                                <InputBase
                                    className={"input"}
                                    onChange={this.onChange}
                                    placeholder={"Busqueda..."}/>
                            <div className={"button"}>
                                <Button onClick={this.handleSubmit}
                                        size={"large"}
                                        variant={"contained"}
                                        color={"primary"}>
                                    Buscar
                                </Button>
                            </div>
                        </div>
                    </Toolbar>
                </form>
            </div>
        )
    }
}

export default SearchAppBar;