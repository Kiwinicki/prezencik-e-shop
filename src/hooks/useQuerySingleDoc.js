import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getDoc } from "firebase/firestore";

import { states as loadingStates } from "./useLoadingStateMachine";

const useQuerySingleDoc = ({ docRef, updateLoadingStateFn }) => {
	const [docData, setDocData] = useState(null);

	useEffect(() => {
		(async () => {
			updateLoadingStateFn && updateLoadingStateFn(loadingStates.isLoading);
			if (docRef) {
				const docSnap = await getDoc(docRef);

				if (docSnap.exists()) {
					setDocData(docSnap.data());
					updateLoadingStateFn && updateLoadingStateFn(loadingStates.hasLoaded);
				} else {
					console.error("Error with fetching product data");
					setDocData(loadingStates.hasError);
					updateLoadingStateFn && updateLoadingStateFn(loadingStates.hasError);
				}
			}
		})();
	}, [docRef]);

	return docData;
};

export default useQuerySingleDoc;

useQuerySingleDoc.propType = {
	docRef: PropTypes.any.isRequired,
	updateLoadingStateFn: PropTypes.func,
};
