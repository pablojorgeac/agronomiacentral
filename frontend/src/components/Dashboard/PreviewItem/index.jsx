import React from 'react';

export const PreviewItem = ({columnOne, columnTwo, columnThree}) => {
    return (
        <div className="grid grid-cols-3 ">
            <p className="text-sm truncate">{columnOne}</p>
            <p className="text-sm truncate">{columnTwo}</p>
            <p className="text-sm truncate">{columnThree}</p>
        </div>
    );
};
