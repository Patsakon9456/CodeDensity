import './L.css';


function L(props) {
    const { color } = props;
    if (color.l <= 5) {
        return (
            <div className='GL'>Chairs
            </div>
        );
    }
    else if(color.l <= 10 ){
        return (
            <div className='YL'>Chairs
            </div>
        );
    }
    else {
        return (
            <div className='RL'>Chairs
            </div>
        );

    }

}


export default L;