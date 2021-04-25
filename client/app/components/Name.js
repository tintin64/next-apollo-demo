import { gql } from '@apollo/client'

const Component = ({ data }) => (
  <span>
    Now
  </span>
);

const query = gql`
  query name {
    name
  }
`;

export default Component;
