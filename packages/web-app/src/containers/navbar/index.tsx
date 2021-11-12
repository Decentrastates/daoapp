import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import TestNetworkIndicator from 'components/testNetworkIndicator';
import {Dashboard, Community, Finance, Governance} from 'utils/paths';

const Navbar: React.FC = () => {
  const {t} = useTranslation();

  return (
    <NavContainer data-testid="nav">
      <TestNetworkIndicator />
      <NavigationBar>
        <Container>
          <DaoSelector>
            <TempDaoAvatar />
            <DaoIdentifier>Bushido DAO</DaoIdentifier>
          </DaoSelector>
          <LinksContainer>
            {/* TODO: Investigate string interpolation with react-i18next */}
            <StyledNavLink to={Dashboard} exact={true}>
              {t('navLinks.dashboard')}
            </StyledNavLink>
            <StyledNavLink to={Governance} exact={true}>
              {t('navLinks.governance')}
            </StyledNavLink>
            <StyledNavLink to={Finance} exact={true}>
              {t('navLinks.finance')}
            </StyledNavLink>
            <StyledNavLink to={Community} exact={true}>
              {t('navLinks.community')}
            </StyledNavLink>
          </LinksContainer>
        </Container>
        <AccountButton>
          <div>punk420.eth</div>
          <TempAvatar />
        </AccountButton>
      </NavigationBar>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.div.attrs({
  className: 'backdrop-filter backdrop-blur-xl',
})`
  background: linear-gradient(
    180deg,
    #f5f7fa 0%,
    rgba(245, 247, 250, 0.24) 100%
  );
`;

const NavigationBar = styled.nav.attrs({
  className:
    'flex justify-between items-center py-3 px-5 2xl:px-25 text-ui-600',
})``;

const Container = styled.div.attrs({
  className: 'flex space-x-6 items-center',
})``;

const LinksContainer = styled.div.attrs({
  className: 'flex space-x-1.5 items-center ',
})``;

const roundedButtonClasses = 'flex items-center h-6 py-1.5 px-2 rounded-lg';

// TODO: investigate NavLink for activeClassName
const StyledNavLink = styled(NavLink).attrs({
  className: `${roundedButtonClasses} `,
})`
  &.active {
    color: #003bf5;
    background: #ffffff;
  }
`;

const DaoSelector = styled.div.attrs({
  className: `${roundedButtonClasses} space-x-1.5 `,
})``;

const DaoIdentifier = styled.span.attrs({
  className: 'text-base leading-5 font-extrabold text-ui-800',
})``;

const TempDaoAvatar = styled.div.attrs({
  className: 'w-6 h-6 rounded-xl bg-primary-700',
})``;

const AccountButton = styled.button.attrs({
  className: `${roundedButtonClasses} space-x-1.5 bg-ui-0`,
})``;

const TempAvatar = styled.div.attrs({
  className: 'w-3 h-3 rounded-full bg-primary-700',
})``;