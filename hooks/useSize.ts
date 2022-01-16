import { useContext } from 'react';
import { SizeContext } from '../components/SizeProvider';

const useSize = () => useContext(SizeContext);

export default useSize;
