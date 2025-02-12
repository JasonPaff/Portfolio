﻿import BlueHoverButton from "../General/BlueHoverButton";
import Github from "../Header/Github";
import {LinkIcon, VideoCameraIcon} from "@heroicons/react/solid";
import ImageTechBadge from "../General/ImageTechBadge";
import ImageModal from "../General/ImageModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import {useState} from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BlueHoverDemoButton from "../General/BlueHoverDemoButton";

export default function Splatter() {
    const [isShowing, setIsShowing] = useState(false);
    const [modalSource, setModalSource] = useState(' ');
    const [title, setTitle] = useState(' ');
    const [description, setDescription] = useState(' ');

    return (
        <>
            <div className="max-w-2xl mx-auto py-4 px-4 grid grid-cols-1 gap-y-16
                    gap-x-8 sm:px-6 sm:py-8 lg:max-w-screen-2xl lg:px-8 lg:grid-cols-2">
                <div>
                    <h2 className="mb-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                        Splatter
                    </h2>
                    <h2 className="text-lg text-sky-500 mb-2">
                        A bug/issue tracking software solution.
                    </h2>
                    <BlueHoverButton
                        icon={<Github/>}
                        link="https://github.com/JasonPaff/Splatter"
                        tooltip="https://github.com/JasonPaff/Splatter"
                        tooltipId="splatterGitHubTooltip"
                        text="Github Repo"
                    />
                    <BlueHoverButton
                        icon={<LinkIcon className="-ml-1 mr-2 h-5 w-5 text-sky-600" aria-hidden="true"/>}
                        link="https://splatter-app.herokuapp.com/"
                        tooltip="https://splatter-app.herokuapp.com/"
                        tooltipTwo="heroku server can take 5-10 seconds to spin up"
                        tooltipId="splatterLiveTooltip"
                        text="Live"
                    />
                    <BlueHoverDemoButton
                        icon={<VideoCameraIcon className="-ml-1 mr-2 h-5 w-5 text-sky-600" aria-hidden="true"/>}
                        text="Demo"
                        tooltip="animated demo gif modal"
                        tooltipId="splatterDemoTooltip"
                        click={() => {
                            setIsShowing(!isShowing);
                            setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/splatter/splatter_demo.gif');
                            setTitle('Splatter Demo');
                            setDescription('');
                        }}
                    />
                    <div className="mt-2">
                        <ImageTechBadge text={"Javascript"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"}/>
                        <ImageTechBadge text={"HTML"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"}/>
                        <ImageTechBadge text={"TailwindCSS"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"}/>
                        <ImageTechBadge text={"Node.js"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"}/>
                        <ImageTechBadge text={"Express"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"}/>
                        <ImageTechBadge text={"GraphQL"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"}/>
                        <ImageTechBadge text={"React"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"}/>
                        <ImageTechBadge text={"Redux"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"}/>
                        <ImageTechBadge text={"Mongodb"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"}/>
                        <ImageTechBadge text={"Auth0"} src={"https://jwt.io/img/pic_logo.svg"}/>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-white underline">What it is</h1>
                        <p className="text-gray-300">
                            Splatter is a role based, multi-user, bug tracking software solution intended to be used by a team of
                            developers during the software development process. Splatter was designed with a clean, professional
                            layout to streamline the process with great attention paid to usability and clarity.
                        </p>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-white underline">How it works</h1>
                        <p className="text-gray-300">
                            Splatter is a roles based account which means the role attached to your account (quality assurance, developer,
                            admin) determines which dashboard options are available to you. The quality assurance accounts are tasked
                            with finding bugs/issues and creating tickets. The admin (project manager) accounts then assign
                            those tickets to the developer accounts to be dealt with. Team members can use the internal messaging system
                            to communicate in real time through the app as well.
                        </p>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-white underline">How it was built</h1>
                        <p className="text-gray-300">
                            Splatter was a solo project built over the course of one and a half weeks for presentation during
                            a full stack development bootcamp. The front-end was built in javascript using the react framework with redux.
                            CSS stying was provided by TailwindCSS utilizing libraries such as headlessUI and HeroIcons. The ticket statistic
                            charts were created using the recharts react library. Drag and drop functionality for saving screenshots with a
                            ticket was provided by react dropzone. The back-end was built using apollo-server with node.js and utilized graphql for the
                            api endpoints connected to a mongodb database using mongoose odm. The auth0 api provided authentication and authorization
                            on both the front-end and back-end.
                        </p>
                    </div>
                </div>
                <div className="mt-20 ">
                    <Swiper
                        navigation={true}
                        loop={true}
                        grabCursor={true}
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper rounded-lg">
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/splatter/splatter_demo.gif"
                                alt="demo"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/splatter/splatter_demo.gif');
                                    setTitle('Live Demo');
                                    setDescription("");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/Splatter/login_page.png"
                                alt="login page"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/Splatter/login_page.png');
                                    setTitle('Login page');
                                    setDescription("Splatter utilizes the Auth0 api to manage authentication and authorization for its users.");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/Splatter/stats_page.png"
                                alt="stats page"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/Splatter/stats_page.png');
                                    setTitle('Statistics Page');
                                    setDescription("Splatter utilizes the recharts library to show various graphs and statistics for the bug reports.");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/Splatter/new_ticket_page.png"
                                alt="new ticket page"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/Splatter/new_ticket_page.png');
                                    setTitle('New Ticket Page');
                                    setDescription("The users with the quality assurance role are responsible for testing the software and submitting new bug reports.");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/Splatter/open_ticket_page.png"
                                alt="open ticket page"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/Splatter/open_ticket_page.png');
                                    setTitle('Ticket Viewer');
                                    setDescription("Every role has the ability to use the tickets viewer, admins can see every ticket in the " +
                                        "system while developers can only see tickets assigned to them and quality assurance personnel can only see the tickets they have created.");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/Splatter/messages_page.png"
                                alt="messages page"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/Splatter/messages_page.png');
                                    setTitle('Internal Messaging Page');
                                    setDescription("Users can send messages to any other member of the team from here. Messaging utilizes a graphQL endpoint" +
                                        " for real-time communications with no refreshing or reloading required.");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/Splatter/help_page.png"
                                alt="help page"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/Splatter/help_page.png');
                                    setTitle('Support Page');
                                    setDescription("Answers to common questions are found here.");
                                }}
                            />
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
            <div className="h-4/5">
                {isShowing && (<ImageModal imageSrc={modalSource} title={title} description={description} setClosed={setIsShowing}/>)}
            </div>
        </>
    );
}