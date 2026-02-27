import React from "react";
import './build.css';
import { Link } from "react-router-dom";
import { CardRow } from "../shared/cardRow";

// Example data for classes
const classOptions = [
  { id: 1, name: 'Fighter', description: 'A strong melee combatant.' },
  { id: 2, name: 'Wizard', description: 'A master of arcane magic.' },
  { id: 3, name: 'Rogue', description: 'A stealthy and agile character.' },
  // ...more options
];

const raceOptions = [
  { id: 1, name: 'Elf', description: 'Graceful, keen senses, and affinity for magic.' },
  { id: 2, name: 'Dwarf', description: 'Stout, resilient, and skilled with axes.' },
  { id: 3, name: 'Human', description: 'Versatile and ambitious.' },
  { id: 4, name: 'Halfling', description: 'Small, nimble, and lucky.' },
  { id: 5, name: 'Dragonborn', description: 'Draconic ancestry and breath weapon.' },
  { id: 6, name: 'Tiefling', description: 'Infernal heritage and innate magic.' },
];

const backgroundOptions = [
  { id: 1, name: 'Acolyte', description: 'Served in a temple and learned religious rites.' },
  { id: 2, name: 'Soldier', description: 'Trained in combat and military discipline.' },
  { id: 3, name: 'Criminal', description: 'Underworld contacts and stealth skills.' },
  { id: 4, name: 'Sage', description: 'Studied ancient lore and languages.' },
  { id: 5, name: 'Entertainer', description: 'Skilled in performance and social interaction.' },
  { id: 6, name: 'Hermit', description: 'Lived in isolation and discovered a secret.' },
];

const featOptions = [
  { id: 1, name: 'Alert', description: 'Always on the lookout for danger.' },
  { id: 2, name: 'Athlete', description: 'Improved physical abilities and mobility.' },
  { id: 3, name: 'Sharpshooter', description: 'Expert at ranged attacks.' },
  { id: 4, name: 'Tough', description: 'Extra hit points and resilience.' },
  { id: 5, name: 'Actor', description: 'Skilled at deception and mimicry.' },
  { id: 6, name: 'Healer', description: 'Can restore hit points to others.' },
];

export function Build() {
    return (
        <main>
            <div className="build-layout">
            {/* progress bar to see which section you are on */}
            <div className="list-group build-sidebar">
                <a href="#class-section" className="list-group-item list-group-item-action active" aria-current="true">
                Class
                </a>
                <a href="#race-section" className="list-group-item list-group-item-action">Race</a>
                <a href="#background-section" className="list-group-item list-group-item-action">Background</a>
                <a href="#feats-section" className="list-group-item list-group-item-action">Feats</a>
                <a href="#actions-section" className="list-group-item list-group-item-action">Actions</a>
            </div>
            <div className="build-content">
                {/* card to see options and details for character creation */}
                <label id="class-section" htmlFor="class-select" style={{fontSize: 25}}>Class:</label>
                <CardRow
                    items={classOptions}
                    renderCard={option => (
                        <>
                        <div className="card-img-wrapper">
                            <div className="card-overlay">
                                <p className="card-text">{option.description}</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{option.name}</h5>
                            <button className="btn btn-primary">Select</button>
                        </div>
                        </>
                    )}
                />
                <br />

                {/* card to see options and details for character creation */}
                <label id="race-section" htmlFor="race-select" style={{fontSize: 25}}>Race:</label>
                <CardRow
                    items={raceOptions}
                    renderCard={option => (
                        <>
                        <div className="card-img-wrapper">
                            <div className="card-overlay">
                                <p className="card-text">{option.description}</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{option.name}</h5>
                            <button className="btn btn-primary">Select</button>
                        </div>
                        </>
                    )}
                />
                <br />

                <label id="background-section" htmlFor="race-select" style={{fontSize: 25}}>Background:</label>
                <CardRow
                    items={backgroundOptions}
                    renderCard={option => (
                        <>
                        <div className="card-img-wrapper">
                            <div className="card-overlay">
                                <p className="card-text">{option.description}</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{option.name}</h5>
                            <button className="btn btn-primary">Select</button>
                        </div>
                        </>
                    )}
                />
                <br />

                <label id="feats-section" htmlFor="race-select" style={{fontSize: 25}}>Feats:</label>
                <CardRow
                    items={featOptions}
                    renderCard={option => (
                        <>
                        <div className="card-img-wrapper">
                            <div className="card-overlay">
                                <p className="card-text">{option.description}</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{option.name}</h5>
                            <button className="btn btn-primary">Select</button>
                        </div>
                        </>
                    )}
                />

                <div id="actions-section">
                    <Link to="/home" className="btn btn-primary btn-lg" style={{backgroundColor: '#1e4d2b', width: '190px', marginRight: '10px'}}>Create Character</Link>
                    <Link to="/build" className="btn btn-outline-danger" >Clear</Link>
                </div>
            </div>
            </div>
        </main>
    );
}