import React, { Component } from "react";
import "./BurgerStyle.css";

export default class Burger extends Component {
    state = {
        lettuce: 0,
        tomato: 0,
        cheese: 0,
        meat: 0,
    };

    addRemoveContent = (action, ingredient) => {
        let { lettuce, tomato, cheese, meat } = this.state;

        let stateValue;
        switch (ingredient) {
            case "lettuce": {
                stateValue = lettuce;
                break;
            }
            case "tomato": {
                stateValue = tomato;
                break;
            }
            case "cheese": {
                stateValue = cheese;
                break;
            }
            case "meat": {
                stateValue = meat;
                break;
            }
            default:
                break;
        }
        if (action === "add") {
            stateValue = stateValue + 1;
        } else {
            stateValue = stateValue - 1;
        }
        this.setState({
            [ingredient]: stateValue >= 0 ? stateValue : 0,
        });
    };

    burgerContent = () => {
        let { lettuce, tomato, cheese, meat } = this.state;
        let burger = [];

        for (let i = 0; i < lettuce; i++) {
            burger.push(
                <div key={burger.length} className="lettuseSide"></div>
            );
        }

        for (let i = 0; i < tomato; i++) {
            burger.push(<div key={burger.length} className="tomatoSide"></div>);
        }

        for (let i = 0; i < cheese; i++) {
            burger.push(<div key={burger.length} className="cheeseSide"></div>);
        }

        for (let i = 0; i < meat; i++) {
            burger.push(<div key={burger.length} className="meatSide"></div>);
        }
        if (burger.length === 0)
            burger.push(
                <p key="0">O'zingiz uchun burger yasashni boshlang!</p>
            );
        return burger;
    };

    render() {
        let { lettuce, tomato, cheese, meat } = this.state;
        return (
            <>
                <div className="burgerContentBlock">
                    <div className="topSide"></div>
                    {this.burgerContent()}
                    <div className="bottomSide"></div>
                </div>
                <div className="menuContent">
                    <p>Lettuce</p>
                    <div className="buttons">
                        <button
                            className="tugma"
                            onClick={() =>
                                this.addRemoveContent("add", "lettuce")
                            }
                        >
                            Add
                        </button>
                        <p>{lettuce}</p>
                        <button
                            className="tugma"
                            onClick={() =>
                                this.addRemoveContent("remove", "lettuce")
                            }
                        >
                            Remove
                        </button>
                    </div>
                    <div className="pay">
                        <h3>
                            Lettuce 1$ * {lettuce} = {1 * lettuce}$
                        </h3>
                    </div>
                    <p>TOMATO</p>
                    <div className="buttons">
                        <button
                            className="tugma"
                            onClick={() =>
                                this.addRemoveContent("add", "tomato")
                            }
                        >
                            Add
                        </button>
                        <p>{tomato}</p>
                        <button
                            className="tugma"
                            onClick={() =>
                                this.addRemoveContent("remove", "tomato")
                            }
                        >
                            Remove
                        </button>
                    </div>
                    <div className="pay">
                        <h3>
                            Tomato 0.5$ * {tomato} = {0.5 * tomato}$
                        </h3>
                    </div>
                    <p>CHEESE</p>
                    <div className="buttons">
                        <button
                            className="tugma"
                            onClick={() =>
                                this.addRemoveContent("add", "cheese")
                            }
                        >
                            Add
                        </button>
                        <p>{cheese}</p>
                        <button
                            className="tugma"
                            onClick={() =>
                                this.addRemoveContent("remove", "cheese")
                            }
                        >
                            Remove
                        </button>
                    </div>
                    <div className="pay">
                        <h3>
                            Cheese 2$ * {cheese} = {2 * cheese}$
                        </h3>
                    </div>
                    <p>MEAT</p>
                    <div className="buttons">
                        <button
                            className="tugma"
                            onClick={() => this.addRemoveContent("add", "meat")}
                        >
                            Add
                        </button>
                        <p>{meat}</p>
                        <button
                            className="tugma"
                            onClick={() =>
                                this.addRemoveContent("remove", "meat")
                            }
                        >
                            Remove
                        </button>
                    </div>
                    <div className="pay">
                        <h3>
                            Meat 3$ * {meat} = {3 * meat}$
                        </h3>
                    </div>
                    <div>
                        <h3>
                            Jami:{" "}
                            {3 * meat + 1 * lettuce + 0.5 * tomato + cheese * 2}
                            $
                        </h3>
                    </div>
                </div>
            </>
        );
    }
}
