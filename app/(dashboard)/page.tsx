'use client'

import React from 'react'
import EmptyOrg from './_component/EmptyOrg';
import BoardList from './_component/boardList';
import { useOrganization } from '@clerk/nextjs';

interface DashboardLayoutProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
};

const DashboardRootPage = ({
  searchParams,
}: DashboardLayoutProps) => {
  const { organization } = useOrganization();

  return (
    <div className='text-muted p-4 w-full flex-1 h-[calc(100%-80px)]'>
      {/* {JSON.stringify(searchParams)} */}

      {
        !organization ? (
        <EmptyOrg />
        ) : (
          <BoardList
            orgId={organization.id}
            query={searchParams}
          />
        )
      }
    </div>
  )
}

export default DashboardRootPage