import BodyChart from "./BodyChart";
import ConditionChart from "./ConditionChart";

function Charts(props) {

    return (
        <div className="bodyConditionCharts">
            <div id="bodyChart">
                <BodyChart weightData={props.weightData} />
            </div>
            <div id="conditionChart">
                <ConditionChart />
            </div>
        </div>
    );
}

export default Charts;