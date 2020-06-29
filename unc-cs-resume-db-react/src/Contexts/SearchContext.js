import React, { createContext, Component } from 'react'


export const SearchContext = createContext()

class SearchContextProvider extends Component {
    state = {
        gradYearButton: false,
        Twenty20 : false,
        Twenty21 : false,
        Twenty22 : false,
        Twenty23 : false
    }
    togglegradYearButton = () => {
        this.setState({gradYearButton : !this.state.gradYearButton})
    }
    toggleTwenty20 = () => {
        this.setState({ Twenty20 : !this.state.Twenty20 });
    }
    toggleTwenty21 = () => {
        this.setState({ Twenty21 : !this.state.Twenty21 });
    }
    toggleTwenty22 = () => {
        this.setState({ Twenty22 :  !this.state.Twenty22 });
    }
    toggleTwenty23 = () => {
        this.setState({ Twenty23 : !this.state.Twenty23 });
    }
    render() {
        return (
            <SearchContext.Provider value={{ ...this.state, toggleTwenty20 :this.toggleTwenty20, toggleTwenty21: this.toggleTwenty21, toggleTwenty22:this.toggleTwenty22, toggleTwenty23: this.toggleTwenty23, togglegradYearButton : this.togglegradYearButton }}>
                {this.props.children}
            </ SearchContext.Provider >
        )
    }
}
export default SearchContextProvider