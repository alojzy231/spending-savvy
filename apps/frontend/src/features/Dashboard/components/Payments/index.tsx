import { Fragment } from 'react';

import { usePaymentQuery } from '@hooks/queries/usePaymentQuery';

export function Products(): JSX.Element {
  const { data, isError, isLoading } = usePaymentQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <h1>ERROR</h1>;
  }

  return (
    <ol>
      {!!data &&
        data.map((product) => (
          <Fragment key={product.id}>
            <li>{product.id}</li>
            <ul>
              <li>{product.cost}</li>
            </ul>
          </Fragment>
        ))}
    </ol>
  );
}
