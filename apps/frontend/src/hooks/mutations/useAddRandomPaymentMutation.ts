import { useFirestoreCollectionMutation } from '@react-query-firebase/firestore';
import firebase from 'firebase/compat';
import { collection } from 'firebase/firestore';
import { UseMutationResult } from 'react-query';

import { firestore } from '@config/firebase';
import { collectionName } from '@consts/collectionName';

import FirestoreError = firebase.firestore.FirestoreError;
import FieldValue = firebase.firestore.FieldValue;

type UseAddRandomPaymentMutationVariables = {
  cost: number | FieldValue;
};
type UseAddRandomPaymentMutationResult = UseMutationResult<
  unknown,
  FirestoreError,
  UseAddRandomPaymentMutationVariables
>;
export function useAddRandomPaymentMutation(): UseAddRandomPaymentMutationResult {
  const ref = collection(firestore, collectionName.spending);

  // TODO: fix this type issue
  return useFirestoreCollectionMutation(ref) as unknown as UseAddRandomPaymentMutationResult;
}
