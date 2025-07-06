import React from 'react';
import { Button } from '@/components/ui/button';

function WelcomeBanner() {
    return (
        <div className='p-5 bg-gradient-to-r from-[#008080] via-[#66b2b2] to-[#40E0D0] rounded-xl'>
            <h2 className='font-bold text-2xl'> Job Assistant Agent </h2>
            <p> Streamline your Job Search and Outline your Career Path with AI Insights </p>
            <Button variant={'outline'} className='mt-3'> Get Started </Button>
        </div>
    )

}

export default WelcomeBanner;