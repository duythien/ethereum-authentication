import React, {useState, useMemo, useReducer, useEffect} from 'react';


export default function TableCustom(props) {
	const [tokens, setTokens] = useState([]);
	const [data, setData] = useState([]);

	
  useEffect(() => {
  	let result = props.data.data.hasOwnProperty('tokens');
	 	if (result) {
			setTokens(props.data.data.tokens);
		}	
		  console.log('result: ' + tokens.length)
   });


	return (
			<div>

			{tokens && tokens.length > 0
				?
	      <table className="table">
				  <thead>
				    <tr>
				      <th scope="col">#</th>
				      <th scope="col">First</th>
				      <th scope="col">Symbol</th>
				      <th scope="col">Balance</th>
				    </tr>
				  </thead>
				  <tbody>
				  	{
						    tokens.map((item, index) => {
						        return <tr>
								      <th scope="row">{index}</th>
								      <td>{item.tokenInfo.name}</td>
								      <td>{item.tokenInfo.symbol}</td>
								      <td>{item.balance / 1000000000000000000}</td>
								    </tr>
						    })
						}
				    
				  </tbody>
				</table>

				: <></>

			}
	    </div>

	
    	);

}

