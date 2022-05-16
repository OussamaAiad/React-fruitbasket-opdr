import React from 'react';

const Counter = ({fruitName, setFruitName}) => {
    return (
        <div>
            <button
                type="button"
                onClick={() => setFruitName(fruitName -1)} disabled={fruitName === 0}> - </button>
            {fruitName}
            <button onClick={() => setFruitName(fruitName +1)}> + </button>
        </div>
    );
};

export default Counter;