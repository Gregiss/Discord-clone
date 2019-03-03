import React, { Component } from 'react'
import { Header, Segment, Input, Icon } from 'semantic-ui-react'
import Channels from './../SidePanel/Channels';

class MessagesHeader extends Component {
  render() {
	 return (
		<Segment clearing>
		{/* Channel Title */}
			<Header fluid="true" as="h2" floated="left" style={{ marginBottom: 0 }} >
			<span>
				Channels {'  '}
				<Icon name={"star outline"} color="black"/>
			</span>
				<Header.Subheader>2 Users</Header.Subheader>
			</Header>

			{/* Channel Search Input */}
			<Header floated="right">
				<Input 
					size="mini"
					icon="search"
					name="searchTerm"
					placeholder="Search Messages"
				/>
			</Header>
		</Segment>
	 )
  }
}

export default MessagesHeader
