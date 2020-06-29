import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import SearchContext from "../Contexts/SearchContext"

// object containing information about what filter buttons are pressed


function SearchBar() {


    return (
        <SearchContext.Consumer> {(context) => {
            var {gradYearbutton} = context
            const {toggleTwenty20} = context
            const {toggleTwenty21} = context
            const {toggleTwenty22} = context
            const {toggleTwenty23} = context
            const {toggglegradYearButton} = context
            let schoolYear
            let skills
            if (gradYearbutton) {
                // change the filter on button press
                schoolYear =
                    <div>
                        <ToggleButtonGroup block type="checkbox">
                            <ToggleButton block variant="secondary" type="checkbox" value={"2020"} onClick={toggleTwenty20}>2020</ToggleButton>
        
                            <ToggleButton block variant="secondary" type="checkbox" value={"2021"} onClick={toggleTwenty21}>2021</ToggleButton>
                            <ToggleButton block variant="secondary" type="checkbox" value={"2022"} onClick={toggleTwenty22}>2022</ToggleButton>
                            <ToggleButton block variant="secondary" type="checkbox" value={"2023"} onClick={toggleTwenty23}>2023</ToggleButton>
        
                        </ToggleButtonGroup>
        
                    </div>
            }



            return(
                <div>
                    <header>
                        <h1 className="display-1">Search</h1>
                    </header>
                    <Button block variant="primary" onClick={toggglegradYearButton}>
                        School Year
                    </Button>
                    {schoolYear}
                  
                    {skills}
                </div>
            )
        }}
            

        </SearchContext.Consumer>
        
    )


}

export default SearchBar