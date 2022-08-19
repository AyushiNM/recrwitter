import React from "react";
import { Bars } from 'react-loader-spinner';

const SpaceCard = (props) => {

    const formatDate = (date) => {
        date = new Date(date);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return date.toDateString() + " " + strTime;
    }

    return (<div className="g-bg-color--primary-to-blueviolet-ltr g-height-300--xs g-margin-b-20--xs space-card g-box-shadow__dark-lightest-v3 g-radius--10 g-padding-y-25--xs g-padding-x-30--xs">
        <div class="state g-margin-b-10--xs">
            {props?.space?.state === 'live' ?
                <div className="g-display-flex--xs">
                    <Bars height={20} width={20} color="white" />
                    <span className="g-margin-l-5--xs text-uppercase g-color--white-opacity">{props?.space?.state}</span></div>

                : <div>
                    <i className="material-icons-outlined g-color--white-opacity">calendar_month</i>
                    <span className="g-margin-l-5--xs g-color--white-opacity text-uppercase">{props?.space?.state}</span>
                    <span className="g-margin-l-5--xs g-font-size-13--xs g-color--white-opacity">{formatDate(props?.space?.scheduled_start)}</span>
                </div>}
        </div>
        <div className="title g-height-100--xs">
            <p className="g-font-size-17--xs g-margin-b-10--xs g-color--white g-font-weight--600">{props?.space?.title}</p>
        </div>
        <div className="title g-height-30--xs">{props?.space?.state === 'live' ?
            <div className="participants g-color--white-opacity g-margin-b-5--xs g-font-size-14--xs">{props?.space?.participant_count} Listening</div>
            : <div className="participants g-color--white-opacity g-margin-b-5--xs g-font-size-14--xs">{props?.space?.subscriber_count} Subscribers</div>}</div>

        <div className="join"><a target='_blank' rel="noreferrer" href={"https://twitter.com/i/spaces/" + props?.space?.id} className="g-margin-t-20--xs text-uppercase btn-block s-btn s-btn--sm s-btn--dark-bg g-radius--50 ">Listen Now</a></div>
        <div className="users"></div>
    </div>)
}

export default SpaceCard;
