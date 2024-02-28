'use client'

import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import React from 'react'
import SearchInput from './search-input'
import InviteBtn from './invite-btn'
import { useOrganization } from '@clerk/nextjs'


const Navbar = () => {
    const { organization } = useOrganization()
    return (
        <div className='flex items-center gap-x-4 px-4 py-3 shadow-sm text-muted'>
            <div className="hidden md:flex md:flex-1">
                {/* TODO: add search */}
                <SearchInput />
            </div>
            <div className="block md:hidden flex-1">
                <OrganizationSwitcher
                    hidePersonal
                    appearance={{
                        elements: {
                            rootBox: {
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                maxWidth: '300px'
                            },

                            organizationSwitcherTrigger: {
                                padding: '6px',
                                width: '100%',
                                borderRadius: '8px',
                                border: '1px solid #E5E7Eb',
                                justifyContent: 'space-between',
                                backgroundColor: 'white'
                            }
                        }
                    }}
                />
            </div>
            {organization && (
                <InviteBtn />
            )}
            <UserButton afterSignOutUrl='/' />
        </div>
    )
}

export default Navbar