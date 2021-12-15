import React, { Component } from 'react';

// Running
const runner = {
    name: 'Ran',
    team: 'Running Team',
};

const runningPayload = [
    {
        name: 'Runner 2',
        team: 'Team 2',
    },
    {
        name: 'Runner 3',
        team: 'Team 3',
    },
    {
        name: 'Runner 4',
        team: 'Team 4',
    },
    {
        name: 'Runner 5',
        team: 'Team 5',
    },
];

const displayRunner = runningPayload.map((runningPlayer, idx) => {
    return (
        <div key={idx}>
            <h1>Name {runningPlayer.name}</h1>
            <p> Team {runningPlayer.team}</p>
        </div>
    );
});

class Running extends Component {
    render() {
        return (
            <div>
                <h1>Running</h1>
                <div>
                    <h1>{runner.name}</h1>
                    <p>{runner.team}</p>
                </div>
                {displayRunner}
            </div>
        )
    }
}

export default Running;