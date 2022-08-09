import React from 'react';
import HomescreenView from './homescreen-view';
// import useHomescreenViewController from './homescreen-view-controller';

interface IHomescreenProps {}

/**
 *
 * @param props
 * @returns
 */
const Homescreen: React.FunctionComponent<IHomescreenProps> = () => {
  //   const {} = useHomescreenViewController({});

  return <HomescreenView />;
};

export default Homescreen;
