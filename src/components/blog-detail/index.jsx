import './index.scss';
import { FaGoogle ,FaFacebookF,FaTwitter,FaInstagram,FaPinterest } from "react-icons/fa";

function BlogDetail() {
    return (  
        <div className='blog-detail'>
            <div className="blog-detail__container">
                <div className="blog-detail__inner">
                    <div className="w-full lg:w-9/12 lg:px-5">
                        <div className='text-green mb-5 uppercase'>
                            Sport
                        </div>
                        <div className='text-[32px] uppercase mb-[25px] font-aldrich'>
                            Bill Cosby challenges prior victims' testimony in appeal of his assault
                        </div>
                        <div className='text-gray mb-[30px]'>
                            26th June, 2019
                        </div>
                        <div>
                            <img src="/img/blog/blog-big.jpg" alt="blog-detail" className='w-full mb-10' />
                        </div>
                        <p className='text-gray mb-[50px] leading-7'>Floodwaters from the Mississippi River cut off the roadway from Missouri into Illinois at the states' border on May 30, 2019 in Saint Mary, Missouri. The middle-section of the country has been experiencing major flood since mid-March especially along the Missouri, Arkansas, and Mississippi Rivers. Towns along the Mississippi River have been experiencing the longest stretch of major flooding from the river in nearly a century. President Donald Trump is greeted by Queen Elizabeth II at Buckingham Palace on June 3 in London. Some claimed on Twitter that the president fistbumped the queen when he arrived, but it was just a slightly awkward handshake.</p>
                        <h4 className='mb-5 text-2xl font-aldrich'>Photos: Royals welcome Trump to Britain</h4>
                        <p className='text-gray mb-[50px] leading-7'>Military re-enactors look on as 280 paratroopers take part in a parachute drop onto fields on June 5 in Sannerville, France, ahead of D-Day commemorations. The Normandy invasion was a pivotal moment in World War II, weakening the Nazis' hold on Western Europe after they suffered a punishing defeat in Stalingrad in the east. D-Day veteran Reg Charles, 96, the last surviving member of the heroic glider assault on Pegasus Bridge, salutes during a memorial ceremony at the Pegasus Bridge Museum on June 5 in Caen, France.</p>
                        <blockquote className='flex mb-10'>
                            <div className="text-green">
                                <svg fill="currentColor" width="42px" height="42px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <title>quote</title>
                                    <path d="M9.563 8.469l-0.813-1.25c-5.625 3.781-8.75 8.375-8.75 12.156 0 3.656 2.688 5.375 4.969 5.375 2.875 0 4.906-2.438 4.906-5 0-2.156-1.375-4-3.219-4.688-0.531-0.188-1.031-0.344-1.031-1.25 0-1.156 0.844-2.875 3.938-5.344zM21.969 8.469l-0.813-1.25c-5.563 3.781-8.75 8.375-8.75 12.156 0 3.656 2.75 5.375 5.031 5.375 2.906 0 4.969-2.438 4.969-5 0-2.156-1.406-4-3.313-4.688-0.531-0.188-1-0.344-1-1.25 0-1.156 0.875-2.875 3.875-5.344z"></path>
                                </svg>
                            </div>
                           <div className='ml-3'>
                                <p className='italic text-xl leading-7 text-gray mb-[30px]'>“Schoolchildren walk past wild sika deer on June 6 in Nara, Japan. Nara's free-roaming deer have become a huge attraction for tourists.”</p>
                                <h6 className='font-medium'>
                                    <span className='font-aldrich text-green'>John Smith</span>
                                    <span className='text-gray'>- CEO PIXA</span>
                                </h6>
                           </div>
                        </blockquote>
                        <h4 className='mb-5 text-2xl font-aldrich'>Remembering Tiananmen</h4>
                        <p className='text-gray mb-[50px] leading-7'>
                            As many as 180,000 people were expected to attend the candlelight vigil at Victoria Park in Hong Kong on June 4, the 30th anniversary of the Tiananmen Square massacre. Commemorations took place in cities around the world to remember those who died when Chinese troops cracked down on pro-democracy protesters. No one knows for sure how many people were killed as China continues to censor any coverage or discussion of the event that takes place during the anniversary.
                        </p>
                        <div className="flex flex-wrap gap-y-5 items-center">
                            <div className="w-full md:w-1/2">
                                <ul className='flex gap-x-3'>
                                    <li><a href="#" className='inline-block text-gray bg-gray-50 text-sm py-[5px] px-[21px]'>Creative</a></li>
                                    <li><a href="#" className='inline-block text-gray bg-gray-50 text-sm py-[5px] px-[21px]'>Unique</a></li>
                                    <li><a href="#" className='inline-block text-gray bg-gray-50 text-sm py-[5px] px-[21px]'>Photography</a></li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2">
                                <ul className='flex justify-end gap-x-6 text-gray'>
                                    <li><a href="#"><FaFacebookF /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                    <li><a href="#"><FaInstagram /></a></li>
                                    <li><a href="#"><FaGoogle /></a></li>
                                    <li><a href="#"><FaPinterest /></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="w-full md:w-7/12 lg:w-3/12 lg:px-5">
                        <h5 className='text-[22px] mb-[30px] font-aldrich'>RECENT NEWS</h5>
                        <div className="mb-[30px] border-b border-black border-opacity-10">
                            <div className='text-green mb-[15px] uppercase'>
                                Sport
                            </div>
                            <h6 className='font-aldrich uppercase mb-[30px]'>Is Meghan Markle</h6>
                            <div className='text-gray mb-[30px]'>
                                26th June, 2019
                            </div>
                        </div>  
                        <div className="mb-[30px] border-b border-black border-opacity-10">
                            <div className='text-green mb-[15px] uppercase'>
                                Sport
                            </div>
                            <h6 className='font-aldrich uppercase mb-[30px]'>5 SUMMER STYLE</h6>
                            <div className='text-gray mb-[30px]'>
                                26th June, 2019
                            </div>
                        </div>
                        <div className="mb-[60px] border-b border-black border-opacity-10">
                            <div className='text-green mb-[15px] uppercase'>
                                Sport
                            </div>
                            <h6 className='font-aldrich uppercase mb-[30px]'>PRINCESSES WITH THIS</h6>
                            <div className='text-gray mb-[30px]'>
                                26th June, 2019
                            </div>
                        </div>
                        <h5 className='text-[22px] mb-[30px] font-aldrich'>CATEGORIES</h5>
                        <ul className='list-disc pl-5 flex flex-col gap-y-3 text-gray mb-[60px]'>
                            <li>Life Style</li>
                            <li>Photography</li>
                            <li>Work</li>
                            <li>Travel</li>
                            <li>Sport</li>
                        </ul>
                        <h5 className='text-[22px] mb-[30px] font-aldrich'>POPULAR TAGS</h5>
                        <ul className='flex flex-wrap gap-2'>
                            <li><a href="#" className='inline-block text-gray bg-gray-50 text-sm py-[5px] px-[21px]'>Creative</a></li>
                            <li><a href="#" className='inline-block text-gray bg-gray-50 text-sm py-[5px] px-[21px]'>Unique</a></li>
                            <li><a href="#" className='inline-block text-gray bg-gray-50 text-sm py-[5px] px-[21px]'>Photography</a></li>
                            <li><a href="#" className='inline-block text-gray bg-gray-50 text-sm py-[5px] px-[21px]'>Music</a></li>
                            <li><a href="#" className='inline-block text-gray bg-gray-50 text-sm py-[5px] px-[21px]'>Workpress Template</a></li>
                            <li><a href="#" className='inline-block text-gray bg-gray-50 text-sm py-[5px] px-[21px]'>Ideas</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;