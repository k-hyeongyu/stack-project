import './UpdateGoalWeightModal.css'

function UpdateGoalWeightModal(props) {
    let inputKg;

    return (
        <div className="modal">
            <input type='number' placeholder='목표 체중(kg)' onChange={(event) => {
                inputKg = event.target.value;
            }}></input>
            <button onClick={() => {
                props.setTargetWeight(inputKg);
            }}>수정</button>
        </div>
    );
}

export default UpdateGoalWeightModal;