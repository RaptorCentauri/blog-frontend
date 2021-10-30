import { gql } from "@apollo/client";

const ALL_POSTS = gql`
	query {
		posts{
			id
			title
			content
		}
	}
`;

export {ALL_POSTS}