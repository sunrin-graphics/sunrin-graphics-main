import styled from '@emotion/styled'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  width: 100%;
`

export const SectionWrapper = styled(Wrapper)`
  background-color: var(--coolSurface);
`

export const Container = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  padding: 114px 20px;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  @media screen and (max-width: 600px) {
    padding: 64px 20px;
  }
  @media screen and (max-width: 480px) {
    padding: 64px 12px;
  }
`

export const Section = styled(Container)`
  padding-top: 0;
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  width: 100%;
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 730px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Introduce = styled.div`
  gap: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const SubTitleText = styled.div`
  font-weight: 600;
  font-size: 15px;
  line-height: 150%;
  text-align: center;
  color: var(--blueIshGray);
`

export const TitleText = styled.div`
  font-weight: 600;
  font-size: 36px;
  line-height: 150%;
  text-align: center;
  color: var(--deepDark);
  @media screen and (max-width: 730px) {
    font-size: 30px;
  }
`

export const Description = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  text-align: center;
  color: var(--deepDark);
`

export const ViewButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 8px;
  height: 47px;
  background: var(--justWhite);
  border-radius: 24px;
  border: none;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  color: var(--deepDark);
  text-decoration: none;
  cursor: pointer;
  transition: filter 0.2s ease;
  &:hover {
    filter: brightness(0.9);
  }
`
