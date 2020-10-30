import React from 'react'
import styled from 'styled-components'
import TranslatedText from '../TranslatedText'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledAbsoluteLink href="https://hotswap.link/#swap" className="active" rel="noopener noreferrer">
        <TranslatedText translationId={8}>Swap</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://hotdog.cafe/farm" rel="noopener noreferrer">
        <TranslatedText translationId={2}>Pool</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://hotdog.cafe/home" rel="noopener noreferrer">
        <TranslatedText translationId={2}>Farming</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://info.hotswap.link" rel="noopener noreferrer">
        <TranslatedText translationId={4}>Chart & Info</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://nft.hotdog.cafe" rel="noopener noreferrer">
        <TranslatedText translationId={14}>NFT Collectibles</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://gift.hotswap.link" rel="noopener noreferrer">
        <TranslatedText translationId={12}>Gift</TranslatedText>
      </StyledAbsoluteLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  font-size: 18px;
  line-height: 45px;
  font-weight: 700;
  @media (max-width: 600px) {
    display: none;
  }
`

const StyledAbsoluteLink = styled.a`
  color: #80858a;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  &:hover {
    color: #FFB047;
  }
  &.active {
    color: #FFB047;
  }
  @media (max-width: 400px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

export default Nav
