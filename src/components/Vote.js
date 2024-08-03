import React, { useState } from "react";

export default function Vote() {
	const [vote, setVote] = useState(0);
	return (
    	<>
        	<p>Vote value: { vote }.</p>
        	<button onClick={ () => setVote(vote+1)}>Upvote</button>
      </>
    )
}