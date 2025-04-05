import "./Ticket.css";

interface TicketProps {
    ticket?: unknown
}

function Ticket({ticket}: TicketProps) {

    function getCardStyle() {
        if (ticket.resolved) {
            return "card card-status-resolved"
        }
        return "card card-status-tofix"
    }

    function getStatus() {
        if (ticket.resolved) {
            return "ticket-status text-green"
        }
        return "ticket-status text-yellow"
    }

    return (
        <div className='col col-3'>
            <div className={getCardStyle()}>
                <div className="card-body">
                    <div className="ticket-id">{`ID: ${ticket.id}`}</div>
                    <div className="ticket-description">{ticket.description}</div>
                    <div className={getStatus()}>{ticket.resolved ? "RESOLVED": "FIX"}</div>
                </div>
            </div>
        </div>
    )
}

export default Ticket;