import { useFirestoreQuery } from '@react-query-firebase/firestore';
import { query, collection } from 'firebase/firestore';

import { firestore } from '@config/firebase';

function Products(): JSX.Element {
  // Define a query reference using the Firebase SDK
  const ref = query(collection(firestore, 'spending'));

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
            <h2>{product.id}</h2>
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
