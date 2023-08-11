import { Alert } from 'react-bootstrap';

export const MessageBox = (props) => {
  return <Alert variant={props.variant || 'info'}>{props.children}</Alert>;
};
