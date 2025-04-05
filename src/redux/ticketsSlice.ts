import {createSlice} from "@reduxjs/toolkit";

let currentID: number = 0;

const ticketsSlice = createSlice({
    initialState: [],
    name: "tickets",
    reducers: {
        addTicket: function (state: never[], action) {
            if (action.payload.description == '') {
                return;
            }

            return [...state, {
                id: ++currentID,
                description: action.payload.description,
                resolved: false
            }];
        },
        removeTicket: function (state: never[], action) {
            if (action.payload.id === null) {
                return;
            }

            return state.filter(ticket => ticket.id != action.payload.id);
        },
        resolveTicket: function (state: never[], action) {
            if (action.payload.id === null) {
                return;
            }

            return state.map(ticket => {
                if (ticket.id == action.payload.id) {
                    return {
                        ...ticket,
                        resolved: true
                    };
                }
                return ticket;
            });
        }
    }
})

export const {addTicket, removeTicket, resolveTicket} = ticketsSlice.actions;
export default ticketsSlice.reducer;