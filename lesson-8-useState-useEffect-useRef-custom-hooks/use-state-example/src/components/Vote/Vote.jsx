import Block from "./Block";
import VoteResults from "./VoteResults";
import VoteActions from "./VoteActions";
import styles from './vote.module.scss';
import { useState } from "react";

export default function Vote() {
    const [democrats, setDemocrats] = useState(0);
    const [republic, setRepublic] = useState(0);

    const countTotal = () => {
        return democrats + republic;
    }

    const countPercentage = (property) => {
        const total = countTotal();
        if (!total) {
            return 0;
        }
        const value = property;
        const result = (value / total) * 100;
        return Number(result.toFixed(2));
    }


    const leaveVote = (propertyName) => {
        switch(propertyName) {
            case "democrats": 
                return setDemocrats((prev) => prev + 1);
            case "republic": 
                return setRepublic((prev) => prev + 1);
            default:
                return;
        }
    }

    const total = countTotal();

    const democratsPercent = countPercentage(democrats);
    const republicPercent = countPercentage(republic);

    return (
        <div className={styles.wrapper}>
            <Block title="Віддати голос">
                <VoteActions leaveVote={leaveVote} />
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


// export default class Vote extends Component {
//     state = {
//         democrats: 0,
//         republic: 0,
//     }

//     countTotal() {
//         const { democrats, republic } = this.state;
//         return democrats + republic;
//     }

//     countPercentage(propertyName) {
//         const total = this.countTotal();
//         if (!total) {
//             return 0;
//         }
//         const value = this.state[propertyName];
//         const result = (value / total) * 100;
//         return Number(result.toFixed(2));
//     }

//     leaveVote = (propertyName) => {
//         this.setState((prevState) => {
//             const value = prevState[propertyName];
//             return {
//                 [propertyName]: value + 1
//             }
//         })
//     }

//     render() {
//         const { democrats, republic } = this.state;
//         const total = this.countTotal();
//         const democratsPercent = this.countPercentage("democrats");
//         const republicPercent = this.countPercentage("republic");
//         return (
//             <div className={styles.wrapper}>
//                 <Block title="Віддати голос">
//                     <VoteActions leaveVote={this.leaveVote} />
//                 </Block>
//                 <Block title="Результат">
//                     {!total ? <div>Ніхто не проголосував</div> : <VoteResults 
//                         democrats={democrats}
//                         republic={republic}
//                         total={total}
//                         democratsPercent={democratsPercent}
//                         republicPercent={republicPercent}
//                     />}
                    
//                 </Block>                
//             </div>
//         )
//     }
// }