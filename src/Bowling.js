import React, { Component } from 'react';

// Bowling
const bowler = {
    name: 'Bob',
    team: 'The Bowlers',
};

const bowlingPayload = [
    {
        name: 'Bowler 2',
        team: 'Team 2',
    },
    {
        name: 'Bowler 3',
        team: 'Team 3',
    },
    {
        name: 'Bowler 4',
        team: 'Team 4',
    },
    {
        name: 'Bowler 5',
        team: 'Team 5',
    },
];

const displayBowler = bowlingPayload.map((bowlingPlayer, idx) => {
    return (
        <div key={idx}>
            <h1>Name {bowlingPlayer.name}</h1>
            <p> Team {bowlingPlayer.team}</p>
        </div>
    );
});

class Bowling extends Component {
    render() {
        return (
            <div>
                <h1>Bowling</h1>
                <div>
                    <h1>{bowler.name}</h1>
                    <p>{bowler.team}</p>
                </div>
                {displayBowler}
            </div>
        )
    }
}

export default Bowling;