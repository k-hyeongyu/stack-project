import './AddView.css';

const AddView = ({ onClick }) => {

    return (
        <div className="moreview-footer">
            <button className='add-view' onClick={onClick}>더보기</button>
        </div>
    );
}
export default AddView;