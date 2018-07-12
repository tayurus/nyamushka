import React from "react";
import "./Item.css";
export class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="Item">
                <div class="Item__title">{this.props.item.title}</div>
                <h3 class="Item__name">{this.props.item.name}</h3>
                <div class="Item__stuffing">{this.props.item.stuffing}</div>
                <div class="Item__portionCount">
                    <b>{this.props.item.portionCount}</b> порций
                </div>
                {this.props.item.gift.map(item => <div class="Item__gift">{item}</div>)}
                <div class="Item__nyamushka" />
                <div class="Item__weight">
                    <div class="Item__weight-value">
                        {this.props.item.weight}
                    </div>
                    <div class="Item__weight-kg">кг</div>
                </div>
            </div>
        );
    }
}
