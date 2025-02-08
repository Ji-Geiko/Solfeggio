import SheetRenderer from '@/src/component/view/sheetRenderer';
import React, { ReactElement } from 'react';

interface ViewPageProps {
  params: {
    id: string
  }
}

const Page = ({ params }: ViewPageProps): ReactElement => {

  return (
    <div >
      <SheetRenderer data={params.id} />
    </div>
  );
};

export default Page;