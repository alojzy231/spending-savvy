import { AddRandomPayment } from '../components/AddRandomPayment';
import { PaymentsPreview } from '../components/PaymentsPreview';

export function Dashboard(): JSX.Element {
  return (
    <div>
      <h1>Spending Savvy</h1>
      <PaymentsPreview />
      <hr />
      <AddRandomPayment />
    </div>
  );
}
