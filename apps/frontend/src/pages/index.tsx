import { useFirestoreQuery } from '@react-query-firebase/firestore';
import { query, collection } from 'firebase/firestore';

import { firestore } from '@config/firebase';

type Payment = {
  cost: number;
};
function Products(): JSX.Element {
  // Define a query reference using the Firebase SDK
  const ref = query(collection(firestore, 'spending')).withConverter<Payment>({
    fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);

      // it is recommended way to return data from converter
      return {
        cost: data.cost,
      };
    },
    toFirestore: (data: Payment) => data,
  });

  // Provide the query to the hook
  const { data, isError, isLoading } = useFirestoreQuery(['spending'], ref, undefined, {
    select: (snapshot) =>
      snapshot.docs.map((documentSnapshot) => {
        const data = documentSnapshot.data();

        return {
          id: documentSnapshot.id,
          ...data,
        };
      }),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <h1>ERROR</h1>;
  }

  return (
    <ul>
      {!!data &&
        data.map((product) => (
          <li key={product.id}>
            <li>{product.id}</li>
            <ul>
              <li>{product.cost}</li>
            </ul>
          </li>
        ))}
    </ul>
  );
}
export default function Web(): JSX.Element {
  return (
    <div>
      <h1>Web</h1>
      <Products />
    </div>
  );
}
