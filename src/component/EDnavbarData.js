// import books from './../assets/icons/books.png';
import React from 'react';
import '../assets/EDSidebar.css'

import dashboard from './../assets/icons/dashboard.png';
import classes from './../assets/icons/classes.png';
import team from './../assets/icons/team.png';
import school from './../assets/icons/schools.png';
import resources from './../assets/icons/resources.png';
import assessments from './../assets/icons/assesments.png';
import rubrics from './../assets/icons/rubrics.png';
import reports from './../assets/icons/reports.png';
import vertical from './../assets/icons/vertical.png';
import standards from './../assets/icons/standards.png';

export const EDnavbarData = [
    {
        text: <p className='iconText'>Dashboard</p>,
        path: 'Dashboard',
        icon: <img src={dashboard} className="imgd" />,
        CNmae: 'dash',
        ENmae: 'dash1',
        hover: 'd'

    },
    {
        text: <p className='iconText'>My Classes</p>,
        path: 'classes',
        icon: <img src={classes} className="ED-icon" />,
        CNmae: 'class',
        ENmae: 'class1',
        hover: 'c'

    },
    {
        text: <p className='iconText'>My Teams</p>,
        path: 'Teams',
        icon: <img src={team} className="ED-icon" />,
        CNmae: 'team',
        ENmae: 'team1',
        hover: 't'

    },
    {
        text: <p className='iconText'>My School</p>,
        path: 'School',
        icon: <img src={school} className="ED-icon" />,
        CNmae: 'schoo',
        ENmae: 'schoo1',
        hover: 's'

    },
    {
        text: <p className='iconText'>My Resources</p>,
        path: 'Resources',
        icon: <img src={resources} className="ED-icon" />,
        CNmae: 'reso',
        ENmae: 'reso1',
        hover: 'r'

    },
    {
        text: <p className='iconText'>Assessments</p>,
        path: 'Assessments',
        icon: <img src={assessments} className="ED-icon" />,
        CNmae: 'assess',
        ENmae: 'assess1',
        hover: 'ass'

    },
    {
        text: <p className='iconText'>Rubrics</p>,
        path: 'Rubrics',
        icon: <img src={rubrics} className="ED-icon" />,
        CNmae: 'rubi',
        ENmae: 'rubi1',
        hover: 'rub'

    },
    {
        text: <p className='iconText'>Reports</p>,
        path: 'reports',
        icon: <img src={reports} className="ED-icon" />,
        CNmae: 'repo',
        ENmae: 'repo1',
        hover: 'rep'

    },
    {
        text: <p className='iconText'>Vertical Alignment Map</p>,
        path: 'vertical',
        icon: <img src={vertical} className="ED-icon" />,
        CNmae: 'vert',
        ENmae: 'vert1',
        hover: 'v'

    },
    {
        text: <p className='iconText'>Standards</p>,
        path: 'standards',
        icon: <img src={standards} className="ED-icon" />,
        CNmae: 'stand',
        ENmae: 'stand1',
        hover: 'st'

    }
]