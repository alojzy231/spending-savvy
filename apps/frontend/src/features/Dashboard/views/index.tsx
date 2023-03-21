import { Products } from '../components/Payments';

export function Dashboard(): JSX.Element {
  return (
    <div>
      <h1>Spending Savvy</h1>
      <Products />
      <hr />
    </div>
  );
}
