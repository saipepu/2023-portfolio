"use client"

import Image from 'next/image';
import { useRouter } from 'next/navigation'
import React from 'react'
import backLeft from '../../../../public/assets/icons/chevron-left.png'
import thumbnail_1 from '../../../../public/bikyhood/thumbnail-1.png'
import thumbnail_2 from '../../../../public/bikyhood/thumbnail-2.png'
import userflow from '../../../../public/bikyhood/userflow.png'
import wireframe from '../../../../public/bikyhood/wireframe.png'
import component from '../../../../public/bikyhood/components.png'
import tile_mockup from '../../../../public/bikyhood/tile-mockup.png'
import wireframe_mockup from '../../../../public/bikyhood/wireframe-mockup.png'
import survery from '../../../../public/bikyhood/survey.png'
import marketplace from '../../../../public/bikyhood/marketplace.png'
import bike_detail from '../../../../public/bikyhood/bike-detail.png'
import seller_profile from '../../../../public/bikyhood/seller-profile.png'
import logo from '../../../../public/bikyhood/logo.png'
import logo_mockup from '../../../../public/bikyhood/logo-mockup.png'
import color from '../../../../public/bikyhood/color.png'

const Bikyhood = () => {
  const router = useRouter();

  return (
    <div className="h-full w-full pt-[100px]">
      <div className="h-full w-full flex flex-col justify-start items-center">
        <div className="w-full px-[16px] md:px-[50px]">
          <div
            onClick={router.back}
            className="w-[35px] h-[35px] flex justify-center items-center bg-gray-600 rounded-lg cursor-pointer hover:bg-gray-400">
            <Image src={backLeft} alt="left-icon"/>
          </div>
        </div>
        <div className="w-full overflow-hidden flex flex-col md:flex-row justify-center items-start px-[16px] md:px-[50px] gap-[10px]">
          <div className="md:flex-1 w-full">
            <h1 className="text-[56px] font-bold leading-[110%]">Bikyhood</h1>
          </div>
          <div className="text-[18px] font-[200] overflow-scroll max-h-full w-full md:flex-1 flex flex-col justify-start items-start gap-[10px] md:py-[300px] pb-[50px]">
            <p>This is a UI design project that I completed for my friend.</p>
            <p>My friend(Ricky) is a bike enthusiast and he found out that many students like him face the problem of where to find and which bike should they buy for daily commute around the campus.</p>
            <div className="w-full h-[400px] bg-white">
              <Image
                src={thumbnail_1}
                alt="thumbnail_1"
                className="w-full h-full object-contain"
              />
            </div>
            <p>So, he came up with a marketplace application idea. As we met, we discussed about the project and he asked me if I could help him with the UI Design.</p>
            <p>That’s how ‘Bikyhood’ was started.</p>
            <div className="w-full h-[400px] bg-white">
              <Image
                src={thumbnail_2}
                alt="thumbnail_2"
                className="w-full h-full object-contain"
              />
            </div>
            <p>This is similar to Facebook Marketplace but specifically for Bike. The project was initially only targeted people around the hood, so I named it ‘Bikyhood’.</p>
            <div className="w-full h-[400px] bg-white">
              <Image
                src={userflow}
                alt="userflow"
                className="w-full h-full object-contain"
              />
            </div>
            <p>It is important to start with the minimal features that are just enough to complete the app idea and get the user achieve their goal.</p>
            <div className="w-full h-[400px] bg-white">
              <Image
                src={wireframe}
                alt="wireframe"
                className="w-full h-full object-contain"
              />
            </div>
            <p>After the wireframing, I created components and make them prototypable. Relying on components design in Figma can make the design more consistent and maintainable.</p>
            <div className="w-full h-[400px] bg-white">
              <Image
                src={component}
                alt="component"
                className="w-full h-full object-contain"
              />
            </div>
            <p>With the predefine and prototypable components, we can build the UI screen much much faster and better. It is easier to customzie to align with the company branding in any time.</p>
            <div className="w-full min-h-[250px] h-[250px] py-[10px] flex flex-row justify-start items-start gap-[10px]">
              <div className="w-full h-full">
                <Image
                  src={tile_mockup}
                  alt="tile_mockup"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full">
                <Image
                  src={wireframe_mockup}
                  alt="wireframe_mockup"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p>First of all we take Survey from the users.<br/>So that we can learn more about their interests and provide them with the best experience by showing the best matches for them.</p>
            <div className="w-full h-[400px] bg-white">
              <Image
                src={survery}
                alt="survery"
                className="w-full h-full object-contain"
              />
            </div>
            <p>Being able to search by the nearby location and Filter through various options for their tastes.</p>
            <div className="w-full h-[400px] bg-white">
              <Image
                src={marketplace}
                alt="marketplace"
                className="w-full h-full object-contain"
              />
            </div>
            <p>A Vehicle detail screen that shows not only different images of the bike and conditions but also the contact of the seller so that users can contact them right away from our platform or through social connections if they are interested.</p>
            <div className="w-full h-[400px] bg-white">
              <Image
                src={bike_detail}
                alt="bike_detail"
                className="w-full h-full object-contain"
              />
            </div>
            <p>The user profile that has a collection tab showing different vehicles he/she is selling, the review tab displaying past customers’ feedback, a photo(album) tab show casing his/her photos of bike collections.</p>
            <div className="w-full h-[400px] bg-white">
              <Image
                src={seller_profile}
                alt="seller_profile"
                className="w-full h-full object-contain"
              />
            </div>
            <p>As I have created all the features for the MVP version, I ought to create a Logo and Export the Color Palette as well so that they could be used for branding and marketing in the future.</p>
            <div className="w-full h-fit py-[10px] flex flex-row justify-start items-start gap-[10px]">
              <div className="w-full h-full">
                <Image
                  src={logo}
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full flex flex-col justify-between items-start gap-[10px]">
                <div className="w-full flex-1">
                  <Image
                    src={color}
                    alt="color"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-full flex-1">
                  <Image
                    src={logo_mockup}
                    alt="logo_mockup"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex-1 flex flex-col justify-start items-start gap-[10px] mt-[10px]">
              <p className="font-bold">Role 👨🏻‍💻</p>
              <div className="w-full flex flex-col justify-start items-start">
                <p>UI Designer</p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-[10px] mt-[10px]">
              <p className="font-bold">Tech 🚀</p>
              <div className="w-full flex flex-col justify-start items-start">
                <p>Figma</p>
                <p>Figma Auto Layout</p>
                <p>UI Component Driven</p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-[10px] mt-[10px]">
              <p className="font-bold">Client 💼</p>
              <div className="w-full flex justify-start items-center gap-[10px]">
                <p>Ricky</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bikyhood