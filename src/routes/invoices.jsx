import {getInvoices} from '../data';
import { Link } from "react-router-dom";

export default function Invoices() {
    //Get our fake invoice data
    let invoices = getInvoices();

    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Invoices</h2>
      
        
        {invoices.map(invoice=> (
          <Link key={invoice.id}
          style={{ display: "block", margin: "1rem 0" }}
            to={`/invoices/${invoice.number}`}>
            {invoice.name}
          </Link>
        ))}
      </main>
    );
  }