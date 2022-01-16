import { useContext } from 'react';
import { MutexButtonsContext } from '../components/MutexButtonsProvider';

const useMutexButtons = () => useContext(MutexButtonsContext);

export default useMutexButtons;
