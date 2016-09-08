// @flow

import * as React from 'react';
import * as settings from '../settings.js';
// import SideBar from '../components/SideBar';
// import ProjectsContainer from '../components/ProjectsContainer';
// import Edit from '../../components/Edit';

import {Gallery} from '../../components/Gallery';
import { Link, browserHistory } from 'react-router';

const ProjectView = ({path, dirs, files}) => {
	if (path)
		path += '/';

	let backLink;
	if (path)
		backLink = <a href={ path + '..' }>
			<div className="close-project">
				<i className="fa fa-times fa-2x" aria-hidden="true" />
			</div>
		</a>;


	let images = files.map(f => ({
		src: 'content' + settings.CONTENT_ROOT + '/' + path + '/' + f.name,
		key: f.name,
		width: f.width || 100,
		height: f.height || 100,
		hidden: false
	}));

	return (
		<div className="project-page">
			<Gallery
				//selection={this.props.selection}
				// onImageClick={this.props.onImageClick}
				// onImageDoubleClick={this.props.onImageDoubleClick}
				layout="lines"
				rowHeight={640}
				title=''
				images={images}
			/>
			{backLink}
		</div>
	)
}

export default ProjectView;