import './right.css'
import React from 'react'
import { FormControl, InputLabel, TextField } from '@mui/material'

const Inputbox = ({ middle, type, required, title, data, setData, name }) => {

    const mrg = middle ? "2%" : 0
    return (

        <FormControl

            style={{ marginLeft: `${mrg}`, marginRight: `${mrg}` }}>
            <InputLabel style={{ marginLeft: "-12px" }} >{title}
                {required ?
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="red" fontSize="10px" height="1em" width="2em" xmlns="http://www.w3.org/2000/svg" style={{ color: "red" }}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>
                    : null}
            </InputLabel>

            <TextField
                InputProps={{
                    sx: {
                        height: 35, width: "100%",
                        marginTop: "37px"
                    }
                }}
                name='name'
                value={data.name}
                onChange={(e) => { setData({ ...data, [name]: e.target.value }); console.log(data, name) }}
                variant='outlined'
                autoComplete="off"
                type={type}
                required={required} />

        </FormControl>

    )
}

export default Inputbox