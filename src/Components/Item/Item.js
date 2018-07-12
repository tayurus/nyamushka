import React from "react";
import "./Item.css";
export class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Item-wrapper">
                <div className="Item">
                    <div className="Item__title">{this.props.item.title}</div>
                    <h3 className="Item__name">{this.props.item.name}</h3>
                    <div className="Item__stuffing">{this.props.item.stuffing}</div>
                    <div className="Item__portionCount">
                        <b>{this.props.item.portionCount}</b> порций
                    </div>
                    {this.props.item.gift.map(item => <div className="Item__gift">{item}</div>)}
                    <div className="Item__nyamushka" />
                    <div className="Item__weight">
                        <div className="Item__weight-value">
                            {this.props.item.weight}
                        </div>
                        <div className="Item__weight-kg">кг</div>
                    </div>
                </div>
                <div className="Item__buy">
                     Чего сидишь? Порадуй котэ, 
                     <a className="Item__buy-link" href="#"> купи</a>
                </div>
            </div>


        );
    }
}
