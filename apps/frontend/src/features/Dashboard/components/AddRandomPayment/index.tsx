import { useAddRandomPaymentMutation } from '@hooks/mutations/useAddRandomPaymentMutation';

export function AddRandomPayment(): JSX.Element {
  const { isLoading, mutate } = useAddRandomPaymentMutation();

  const handleClick = () => {
    mutate({
      cost: Math.random() * 10_000,
    });
  };

  return (
    <button disabled={isLoading} onClick={handleClick}>
      Add random payment
    </button>
  );
}
