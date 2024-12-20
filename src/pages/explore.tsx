import React, {useEffect} from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';

import {GridLayout} from 'components/layout';
import {DaoExplorer} from 'containers/daoExplorer';
import {useNetwork} from 'context/network';
import {translateToNetworkishName} from 'utils/library';
import {SupportedNetworks} from '@aragon/osx-commons-configs';

export const Explore: React.FC = () => {
  const {network, setNetwork} = useNetwork();

  useEffect(() => {
    //FIXME: temporarily when network not supported by the SDK, default to ethereum
    const translatedNetwork = translateToNetworkishName(
      network
    ) as SupportedNetworks;

    // when network not supported by the SDK, don't set network
    if (!Object.values(SupportedNetworks).includes(translatedNetwork)) {
      console.warn('Unsupported network, defaulting to ethereum');
      setNetwork('ethereum');
    }
  }, [network, setNetwork]);

  return (
    <>
      {/*<Hero />*/}
      <GridLayout>
        <ContentWrapper>
          {/*<Carousel />*/}
          <DaoExplorer />
        </ContentWrapper>
      </GridLayout>
    </>
  );
};

/* STYLES =================================================================== */

const ContentWrapper = styled.div.attrs({
  className:
    'col-span-full xl:col-start-2 xl:col-end-12 space-y-10 xl:space-y-[72px] mb-10 xl:mb-20 pb-10',
})``;
