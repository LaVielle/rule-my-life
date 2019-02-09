import decisions from './decisions'

const data_currentUser = {
  name: "Sam",
  id: "u-ec35r"
}

const data_decisions = [
  {
    title: "Should I...",
    optionA: "go to school?",
    optionB: "go surfing?",
    user: "u-ec35r",
    id: "d-00001",
    votes: [
      {
        voter: "u-ol931",
        decision: "d-00001",
        option: "B"
      }
    ]
  },
  {
    title: "Should I date Matt???",
    optionA: "Yes",
    optionB: "No",
    user: "u-57xb3",
    id: "d-00002",
    votes: [
      {
        voter: "u-ec35r",
        decision: "d-00002",
        option: "B"
      },
      {
        voter: "u-ol931",
        decision: "d-00002",
        option: "B"
      }
    ]
  },
  {
    title: "What's my lunch?",
    optionA: "Salad 🥗",
    optionB: "Burger 🍔",
    user: "u-q2j84",
    id: "d-00003",
    votes: []
  }
]

describe('decisions reducer', () => {
  it('should handle initial state', () => {
    expect(
      decisions(undefined, {})
    ).toEqual([])
  })

  // vote for decision d-00001 option A (second one to vote)
  it('vote option A', () => {
    expect(
      decisions(data_decisions, {
        type: 'VOTE',
        data: {
          voter: data_currentUser.id,
          decision: data_decisions[0].id,
          option: 'A'
        }
      })
    ).toEqual([
      {
        title: "Should I...",
        optionA: "go to school?",
        optionB: "go surfing?",
        user: "u-ec35r",
        id: "d-00001",
        votes: [
          {
            voter: "u-ol931",
            decision: "d-00001",
            option: "B"
          },
          {
            voter: data_currentUser.id,
            decision: data_decisions[0].id,
            option: "A"
          }
        ]
      },
      {
        title: "Should I date Matt???",
        optionA: "Yes",
        optionB: "No",
        user: "u-57xb3",
        id: "d-00002",
        votes: [
          {
            voter: "u-ec35r",
            decision: "d-00002",
            option: "B"
          },
          {
            voter: "u-ol931",
            decision: "d-00002",
            option: "B"
          }
        ]
      },
      {
        title: "What's my lunch?",
        optionA: "Salad 🥗",
        optionB: "Burger 🍔",
        user: "u-q2j84",
        id: "d-00003",
        votes: []
      }
    ])
  })

  // // change vote for decision d-00002 from option B to option A
  // it('Change vote to option A', () => {
  //   expect(
  //     decisions(data_decisions, {
  //       type: 'CHANGE_VOTE',
  //       data: {
  //         voter: data_currentUser.id,
  //         decision: data_decisions[1].id,
  //         option: 'A'
  //       }
  //     })
  //   ).toEqual([
  //     {
  //       title: "Should I...",
  //       optionA: "go to school?",
  //       optionB: "go surfing?",
  //       user: "u-ec35r",
  //       id: "d-00001",
  //       votes: [
  //         {
  //           voter: "u-ol931",
  //           decision: "d-00001",
  //           option: "B"
  //         }
  //       ]
  //     },
  //     {
  //       title: "Should I date Matt???",
  //       optionA: "Yes",
  //       optionB: "No",
  //       user: "u-57xb3",
  //       id: "d-00002",
  //       votes: [
  //         {
  //           voter: "u-ec35r",
  //           decision: "d-00002",
  //           option: "A"
  //         },
  //         {
  //           voter: "u-ol931",
  //           decision: "d-00002",
  //           option: "B"
  //         }
  //       ]
  //     },
  //     {
  //       title: "What's my lunch?",
  //       optionA: "Salad 🥗",
  //       optionB: "Burger 🍔",
  //       user: "u-q2j84",
  //       id: "d-00003",
  //       votes: []
  //     }
  //   ])
  // })

  
})
