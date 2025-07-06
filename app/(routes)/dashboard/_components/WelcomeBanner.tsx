import React from 'react';
import { Button } from '@/components/ui/button';

function WelcomeBanner() {
    return (
        <div className='p-5 bg-gradient-to-r from-[#006666] via-[#008080] to-[	#66b2b2] rounded-xl'>
            <h2 className='font-bold text-2xl'> Job Assistant Agent </h2>
            <p> Streamline your Job Search and Outline your Career Path with AI Insights </p>
            <Button variant={'outline'} className='mt-3'> Get Started </Button>
        </div>
    )

}

export default WelcomeBanner;