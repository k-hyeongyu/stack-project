import './Theme.css';

const Theme = ({ title, description }) => {
    return (
        <div className="theme-box">
            <p className='theme-title'>{title}</p>
            <br></br>
            <div className='theme-description'>{description}</div>
        </div>
    );
}
export default Theme;