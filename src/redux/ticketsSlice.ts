import {createSlice} from "@reduxjs/toolkit";

let currentID: number = 0;

const ticketsSlice = createSlice({
    initialState: [],
    name: "tickets",
    reducers: {
        addTicket: function (state: never[], action) {
            console.log("Added ticket");
            state.push({
                id: ++currentID,
                description: action.payload.description,
                resolved: false,
            } as never);
        }
    }
})

export const {addTicket} = ticketsSlice.actions;
export default ticketsSlice.reducer;