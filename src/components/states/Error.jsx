import { useNavigate } from 'react-router-dom';
import {ReactComponent as Refresh} from '../../assets/Refresh.svg'
import { ErrorWrapper,RefreshIcon } from './styled';
const Error = () => {
    const navigate = useNavigate();
    const refreshPage = () => {
        navigate(0);
    }
    return (
        <ErrorWrapper className="error-wrapper">
        <p>Something went wrong. Please try again</p>
        <RefreshIcon className="refresh-icon" onClick={refreshPage}>
          <Refresh />
        </RefreshIcon>
      </ErrorWrapper>
    );
}
 
export default Error;