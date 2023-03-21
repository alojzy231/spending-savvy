import { useFirestoreQuery } from '@react-query-firebase/firestore';
import firebase from 'firebase/compat';
import { collection, query } from 'firebase/firestore';
import { UseQueryResult } from 'react-query';

import { firestore } from '@config/firebase';
import { collectionName } from '@consts/collectionName';

import FirestoreError = firebase.firestore.FirestoreError;

type Payment = {
  cost: number;
};
type QueryResult = { id: string } & Payment;
type UsePaymentQueryResult = UseQueryResult<QueryResult[], FirestoreError>;
export function usePaymentQuery(): UsePaymentQueryResult {
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

  return useFirestoreQuery([collectionName.spending], ref, undefined, {
    select: (snapshot) =>
      snapshot.docs.map((documentSnapshot) => {
        const data = documentSnapshot.data();

        return {
          id: documentSnapshot.id,
          ...data,
        };
      }),
  });
}
