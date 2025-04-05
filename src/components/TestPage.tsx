import selectTickets from "../redux/selector.ts";
import {useDispatch, useSelector} from "react-redux";
import {addTicket} from "../redux/ticketsSlice.ts";
import {Fragment} from "react";

function TestPage() {
    const dispatch = useDispatch();
    const tickets = useSelector(selectTickets);
    console.log(tickets);

    function add(description: string) {
        dispatch(addTicket({
            payload: {
                description: description
            }
        }));
    }

    return (
        <Fragment>
            <div>
                <p>{JSON.stringify(tickets)}</p>
            </div>
            <div>
                <button type="button" className="btn" onClick={() => {
                   add("ticket")
                }}>Add</button>
            </div>
        </Fragment>
    )
}


export default TestPage;