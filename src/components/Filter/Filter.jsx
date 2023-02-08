import React from "react";
import { Div ,Label, FormInput } from './Filter.styled'

export const Filter = ({ value, onChange}) => {
    return(
        <Div>
            <Label htmlFor="">Find contacts by name
                <FormInput value={value} onChange={onChange} />
            </Label>
        </Div>
    )
}