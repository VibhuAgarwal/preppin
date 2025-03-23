import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg capitalize">
          <h2 className='text-lg'>Get Interview Ready with AI powered Practice</h2>
          <p>Practice on real interview questions and get instant feedback</p>
          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href='/interview'>Start an Interview</Link>
            </Button>
        </div>
        <Image src='/robot.png' alt='robo-dude image' width={400} height={400}className='max-sm:hidden' />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        Your Interviews
        <div className='interview-section'>
          <p>You haven&apos;t taken any interviews yet</p>
        </div>
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Take and interview</h2>
        <div className="interviews">
          <p>There are no interviews available...</p>
        </div>
      </section>
    </>
  )
}

export default Page;