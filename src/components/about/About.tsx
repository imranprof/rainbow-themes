import { TAboutSection } from '@/types';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

type Props = {
  aboutData: TAboutSection;
}

export default function About({ aboutData }: Props) {
  console.log(aboutData)
  return (
    <section className="relative py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div className="relative w-full">
          <Image
            src={aboutData.image1}
            alt="Business Leader"
            width={318}
            height={540}
            className="rounded-xl shadow-lg"
          />
          <div className="absolute bottom-0 left-20 w-40 h-40 rounded-xl shadow-lg overflow-hidden border-4 border-white">
            <Image
              src={aboutData.image2}
              alt="Team Meeting"
              width={308}
              height={360}
              className="object-cover"
            />
          </div>
          <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full border shadow text-xs font-medium">
            <span className="text-purple-600 font-bold">30+</span> Years of Experience
          </div>
        </div>

        {/* Right - Content */}
        <div className="space-y-6">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-purple-100 text-purple-700 rounded-full">
            Know about us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            All-in-one web solution<br />for your business
          </h2>
          <p className="text-gray-500">
            We are creative agency, we are here to helping your business growth consectetur adipiscing.
          </p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• There are many variations of passages available</li>
            <li>• Majority have suffered alteration in some form</li>
            <li>• Contrary to popular belief is not simply random</li>
          </ul>

          <div className="flex items-center space-x-4 mt-4">
            <Button className="bg-purple-600 text-white">More about us</Button>
            <div className="flex items-center space-x-2">
              <Image
                src="/images/ceo.png"
                alt="CEO"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-semibold">Bruno Ashik</p>
                <p className="text-xs text-gray-500">CEO at Company</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20 text-center">
        <div>
          <h3 className="text-3xl font-bold text-purple-600">99%</h3>
          <p className="text-sm text-gray-500">Business Strategy</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-purple-600">80%</h3>
          <p className="text-sm text-gray-500">Targeted Acquisition</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-purple-600">62k+</h3>
          <p className="text-sm text-gray-500">Complete Projects</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-purple-600">15k+</h3>
          <p className="text-sm text-gray-500">Happy Customers</p>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <h3 className="text-3xl font-bold text-purple-600">100+</h3>
          <p className="text-sm text-gray-500">Consultant Advisors</p>
        </div>
      </div>
    </section>
  );
}
