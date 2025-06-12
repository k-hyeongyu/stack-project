import BodyChart from "./BodyChart";
import ConditionChart from "./ConditionChart";
import './Charts.css'

function Charts(props) {

    return (
        <div className="bodyConditionCharts">
            <div id="bodyChart">
                <BodyChart weightData={props.weightData} skeletalMuscleMassData={props.skeletalMuscleMassData} />
            </div>
            <div id="conditionChart">
                <ConditionChart />
            </div>
        </div>
    );
}

export default Charts;