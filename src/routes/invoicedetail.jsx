import { useParams } from "react-router-dom";

export default function InvoiceDetail() {
  
    let { invoidId } = useParams();

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Invoice Detail</h2>
       test     
       
       Parameter Passed: {invoidId}
    </main>
  );
}
