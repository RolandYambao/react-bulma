import React, { Component } from 'react';

// Shooting
const shooter = {
    name: 'Shootey',
    team: 'Sharpshooters',
};

const shootingPayload = [
    {
        name: 'Shooter 2',
        team: 'Team 2',
    },
    {
        name: 'Shooter 3',
        team: 'Team 3',
    },
    {
        name: 'Shooter 4',
        team: 'Team 4',
    },
    {
        name: 'Shooter 5',
        team: 'Team 5',
    },
];

const displayShooter = shootingPayload.map((shootingPlayer, idx) => {
    return (
        <div key={idx}>
            <h1>Name {shootingPlayer.name}</h1>
            <p> Team {shootingPlayer.team}</p>
        </div>
    );
});

class Shooting extends Component {
    render() {
        return (
            <div>
                <h1>Shooting</h1>
                <div>
                    <h1>{shooter.name}</h1>
                    <p>{shooter.team}</p>
                </div>
                {displayShooter}
            </div>
        )
    }
}

export default Shooting;