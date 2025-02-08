import SheetRenderer from '@/src/component/view/sheetRenderer';
import React from 'react';

const Page: React.FC = () => {

    const randomBinary = Array.from({ length: 144 }, () => Math.floor(Math.random() * 2)).join('');

    const hex = parseInt(randomBinary, 2).toString(16)

    return (
        <div >
            <SheetRenderer data={hex}/>
        </div>
    );
};

export default Page;