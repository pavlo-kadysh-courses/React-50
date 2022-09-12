import { Component } from "react";
import Block from "./Block";
import VoteResults from "./VoteResults";
import VoteActions from "./VoteActions";
import styles from './vote.module.scss';

export default class Vote extends Component {
    state = {
        democrats: 0,
        republic: 0,
    }

    countTotal() {
        const { democrats, republic } = this.state;
        return democrats + republic;
    }

    countPercentage(propertyName) {
        const total = this.countTotal();
        if (!total) {
            return 0;
        }
        const value = this.state[propertyName];
        const result = (value / total) * 100;
        return Number(result.toFixed(2));
    }

    leaveVote = (propertyName) => {
        this.setState((prevState) => {
            const value = prevState[propertyName];
            return {
                [propertyName]: value + 1
            }
        })
    }

    render() {
        const { democrats, republic } = this.state;
        const total = this.countTotal();
        const democratsPercent = this.countPercentage("democrats");
        const republicPercent = this.countPercentage("republic");
        return (
            <div className={styles.wrapper}>
                <Block title="Віддати голос">
                    <VoteActions leaveVote={this.leaveVote} />
                </Block>
                <Block title="Результат">
                    {!total ? <div>Ніхто не проголосував</div> : <VoteResults 
                        democrats={democrats}
                        republic={republic}
                        total={total}
                        democratsPercent={democratsPercent}
                        republicPercent={republicPercent}
                    />}
                    
                </Block>                
            </div>
        )
    }
}