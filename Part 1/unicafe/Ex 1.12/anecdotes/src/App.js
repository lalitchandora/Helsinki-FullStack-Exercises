import { useEffect, useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ];
  
   
  const [selected, setSelected] = useState(0)
  const [voteArr, setVoteArr] = useState(new Array(anecdotes.length).fill(0));
  const [highestVotedIndex, setHighIndex] = useState(-1);

  const changeAnecdote = (event) => {
    let index = selected + 1;
    if (selected >= anecdotes.length-1) index = 0;
    setSelected(index);
  }

  const voteHandler = async (event) => {
    setVoteArr((oldArr) => {
      return oldArr.map((item, j) => {
        return j === selected ? item + 1 : item
      });
    });
  }

  useEffect(() => {
    const getHighestVoted = () => {
      let tempVoteArr = [...voteArr];
      let highestVal = 0;
      let highestInd = -1;
      tempVoteArr.forEach((item, index) => {
        if (item > highestVal){
          highestVal = item;
          highestInd = index;
        }
      });
      setHighIndex(highestInd);
    }
    getHighestVoted();
  }, [voteArr]);
  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
        {anecdotes[selected]}
      </p>
      <p>
        {voteArr[selected]} votes!
      </p>
      <p>

      </p>
      <button onClick={changeAnecdote}>Get Next Anecdote</button>
      <button onClick={voteHandler}>Vote Anecdote</button>
      
      {
        (highestVotedIndex !== -1) ?
          <>
            <h1>Anecdote with most votes</h1>
            <p>
              {anecdotes[highestVotedIndex]}
            </p>
          </>
          
        :
          <></>
      }
    </div>
  )
}

export default App