/**
 * Header
 * Info is the applicaiton header section header can be configured:
 * TODO:
 * static: display the same text on every page,
 * title: display the page title as the page header for each page
 * hero: page header is hero, configure pages per links as to when to display hero.
 */
import React, { Component } from 'react';
import './header.scss';

const SubTitle = ({ display }) => {
	if (display) {
		return <h2>{display}</h2>
	} else {
		return <h2/>
	}
}

export default class Header extends Component {
	constructor(props) {
		// console.log('HEADER props: ', props);
		super(props)
		// console.log('HEADER props: ', props);
		this.state = {
			classes: this.props.classes,
			title: this.props.titles.title,
			subTitle: this.props.titles.subTitle,
		}
	}
	render() {

		return (
			<hgroup style={this.state.classes.main}>
				<div>
					<h1>{this.state.title}</h1>
				</div>
				<div>
					<SubTitle display={this.state.subTitle} />
				</div>
			</hgroup>
		)
	}
}