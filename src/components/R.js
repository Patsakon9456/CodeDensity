import './R.css';


function R(props) {
    const { color } = props;
    if (color.k <= 5) {
        return (
            <div className='GM'>long tables
            </div>
        );
    }
    else if(color.k <= 10 ){
        return (
            <div className='YM'>long tables
            </div>
        );
    }
    else {
        return (
            <div className='RM'>long tables
            </div>
        );

    }

}


export default R;