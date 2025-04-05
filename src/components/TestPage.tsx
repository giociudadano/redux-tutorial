import selectTickets from "../redux/selector.ts";
import {useDispatch, useSelector} from "react-redux";
import {addTicket, removeTicket, resolveTicket} from "../redux/ticketsSlice.ts";
import {Fragment, useState} from "react";
import Ticket from "./Ticket/Ticket.tsx";

function TestPage() {
    const [addTicketDescription, setAddTicketDescription] = useState("");
    const [removeTicketById, setremoveTicketById] = useState(0);

    const dispatch = useDispatch();
    const tickets = useSelector(selectTickets);

    function add(description: string) {
        dispatch(addTicket(
            {
                description: description
            }
        ));
    }

    function remove(id: number) {
        dispatch(removeTicket(
            {
                id: id
            }
        ));
    }

    function resolve(id: number) {
        dispatch(resolveTicket(
            {
                id: id,
            }
        ))
    }

    const handleOnChangeAddTicketDescription = (event) => {
        setAddTicketDescription(event.target.value);
    }

    const handleRemoveTicketById = (event) => {
        setremoveTicketById(event.target.value);
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row m-4">
                    <div className="col col-auto d-inline-flex">
                        <input className="mx-2 form-control form-control-sm" type="text" placeholder="Description"
                               value={addTicketDescription} onChange={handleOnChangeAddTicketDescription}></input>
                        <button type="button" className="btn btn-primary" onClick={() => {
                            add(addTicketDescription)
                        }}>Add
                        </button>
                    </div>
                    <div className="col col-auto d-inline-flex">
                        <input className="mx-2 form-control form-control-sm" type="text" placeholder="ID"
                               value={removeTicketById} onChange={handleRemoveTicketById}></input>
                        <button type="button" className="btn btn-success mx-2" onClick={() => {
                            resolve(removeTicketById)
                        }}>Resolve
                        </button>
                        <button type="button" className="btn btn-danger" onClick={() => {
                            remove(removeTicketById)
                        }}>Remove
                        </button>
                    </div>
                </div>
                <div className="row row-cols-auto m-4 px-2 row-gap-3">
                    {tickets.map((ticket) => (
                        <Ticket ticket={ticket}></Ticket>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}


export default TestPage;