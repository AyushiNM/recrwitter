import React from "react";

const Home = () => {

    return (<div>
        <div class="s-promo-block-v4 g-fullheight--xs g-bg-position--center swiper-slide home">
            <div class="container g-ver-center--xs g-margin-t-50--xs">
                <div class="row">
                    <div class="col-md-6">
                        <div class="g-margin-b-20--xs">
                            <h1 class="g-font-size-60--xs g-font-size-65--sm g-font-size-75--md g-font-weight--700 g-color--dark">Find your <br /> Dream Job <br />now</h1>
                            <p class="g-font-size-22--xs g-font-size-24--sm g-color--dark g-font-weight--700">We pair new Twitter v2 APIs and advanced engineering solutions to help you find your next dream job anywhere.</p>
                        </div>
                        <a href="/jobs"
                            class="text-uppercase s-btn s-btn--sm s-btn--dark-bg g-radius--50 g-padding-x-30--xs">Explore now</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container g-padding-y-100--xs">
            <div class="row">
                <div class="col-md-6">
                    <h1 class="g-font-weight--700"><b>Think Twitter is just for memes, funny threads and overly aggressive opinions?</b></h1>
                    <p class="g-font-weight--700 g-color--dark g-font-size-22--xs g-margin-t-25--xs"> Oh no – it's actually a great tool for starting your career. </p>

                </div>
                <div className="col-md-2"></div>
                <div className="col-md-4"><img class="g-margin-t-50--xs" src="./img/twitter-logo.png" alt="Twitter Logo" height="180"/></div>
            </div>

        </div>
        <div class="g-bg-color--dark home-black">
            <div className="container g-padding-y-100--xs">
            <div className="row">
                <div className="col-md-6">
                    <p
                        className="text-uppercase g-font-size-14--xs g-font-weight--700 g-color--primary g-letter-spacing--2 g-margin-b-25--xs">
                        Features</p>
                    <p className="g-font-weight--600 g-font-size-50--xs g-color--white"><b>Real-time access to global job posting</b></p>
                    <p className="g-color--dark g-font-size-18--xs g-color--white g-margin-t-24--xs">With the support of Twitter APIs and Recrwitter, find jobs across the globe that suites your skill-sets, engage with people in twitter space and follow twitter accounts that can help you to land into your next job interview</p>

                </div>

            </div>

        </div>
        </div>
        <div class="container g-padding-y-100--xs">
            <h2 class="g-font-size-32--xs g-font-size-36--md g-font-weight--600 g-color--dark">Popular Domains</h2>
            <p class="g-font-size-16--xs g-color--dark g-margin-b-60--xs">Select a role and we'll show you relevant jobs for it!</p>
            <div class="row">
                <div class="col-md-4">
                    <a href="">
                        <div
                            className="g-margin-b-10--xs home-domain g-padding-y-20--xs g-padding-x-30--xs g-box-shadow__dark-lightest-v3 g-radius--10">
                            <h4 className="g-margin-b-0--xs"><b>Backend Developer</b> <i class="material-icons-outlined">chevron_right</i></h4>
                        </div>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="">
                        <div
                            className="g-margin-b-10--xs home-domain g-padding-y-20--xs g-padding-x-30--xs g-box-shadow__dark-lightest-v3 g-radius--10">
                            <h4 className="g-margin-b-0--xs"><b>Data Scientist</b> <i
                                className="material-icons-outlined">chevron_right</i></h4>
                        </div>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="">
                        <div
                            className="g-margin-b-10--xs home-domain g-padding-y-20--xs g-padding-x-30--xs g-box-shadow__dark-lightest-v3 g-radius--10">
                            <h4 className="g-margin-b-0--xs"><b>Frontend Developer</b> <i
                                className="material-icons-outlined">chevron_right</i></h4>
                        </div>
                    </a>
                </div>
            </div>
        </div>

    </div>)
}

export default Home;
