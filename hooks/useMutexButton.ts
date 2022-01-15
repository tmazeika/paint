import { useContext } from 'react';
import { MutexButtonContext } from '../components/MutexButtonProvider';

const useMutexButton = () => useContext(MutexButtonContext);

export default useMutexButton;
