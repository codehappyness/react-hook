import React, { useState, useEffect } from "react";

export default function LifeCycleTrackFC() {
  const [vote, setVote] = useState(0);
  
  useEffect(() => {
    console.log('getAllUnit2MembersFromAPI()');
  }, [vote]);

  useEffect( () => console.log("mount || will update any"), [] );
  useEffect( () => console.log("mount || will update vote"), [ vote ] );
  useEffect( () => () => console.log("will update vote or unmount"), [ vote ] );
  useEffect( () => () => console.log("unmount"), [] );

	return (
    	<>
        	<p>Vote value: { vote }.</p>
        	<button onClick={ () => setVote(vote+1)}>Upvote</button>
      </>
    )
}