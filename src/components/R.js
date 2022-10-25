import './R.css';


function R(props) {
    const { color } = props;
    if (color.k <= 5) {
        return (
            <div className='G'>
                <p>Few of people</p>
                <p>{color.k}</p>
            </div>
        );
    }
    else if(color.k <= 10 ){
        return (
            <div className='Y'>
                <p>Medium of people</p>
                <p>{color.k}</p>
            </div>
        );
    }
    else {
        return (
            <div className='R'>
                <p>Full of people</p>
                <p>{color.k}</p>
            </div>
        );

    }

}


export default R;