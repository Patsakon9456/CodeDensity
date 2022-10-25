import './B.css';


function B(props) {
    const { color } = props;
    if (color.b <= 5) {
        return (
            <div className='GB'>Rooms
            </div>
        );
    }
    else if(color.b <= 10 ){
        return (
            <div className='YB'>Rooms
            </div>
        );
    }
    else {
        return (
            <div className='RB'>Rooms
            </div>
        );

    }

}


export default B;