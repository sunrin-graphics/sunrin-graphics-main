import styled from '@emotion/styled'
import Sunrin from '@assets/sunrin.svg'

const Header = ({
    scrollTo,
    refs
}: {
    scrollTo: (ref: React.RefObject<HTMLDivElement>) => void
    refs: React.RefObject<HTMLDivElement>[]
}) => {

  return (
    <Container>
      <Wrapper>
        <Row spacing={8}>
          <img
            src={Sunrin}
            alt="선린 로고"
            width={13}
            height={16}
          />
          <Logo>
            선린인터넷고등학교 <Regular>콘텐츠디자인과</Regular>
          </Logo>
        </Row>
        <Links>
          <li>
            <Link onClick={() => {
                scrollTo(refs[0])
            }}>소개</Link>
          </li>
          <li>
            <Link onClick={() => {
                scrollTo(refs[1])
            }}>졸업전시회</Link>
          </li>
          <li>
            <Link onClick={() => {
                scrollTo(refs[2])
            }}>시연회</Link>
          </li>
          <li>
            <Link onClick={() => {
                scrollTo(refs[3])
            }}>학과발표회</Link>
          </li>
        </Links>
      </Wrapper>
    </Container>
  )
}

const Links = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
  list-style: none;
  @media screen and (max-width: 600px) {
    display: none;
  }
`

const Link = styled.div`
  color: var(--deepDark);
  font-size: 15px;
  font-weight: 400;
  line-height: 150%;
    cursor: pointer;
`

const Logo = styled.span`
  color: var(--deepDark);
  font-size: 15px;
  font-weight: 600;
`

const Regular = styled.span`
  font-size: 15px;
  font-weight: 400;
`

const Row = styled.div<{ spacing: number }>`
  display: flex;
  align-items: center;
  gap: ${(props) => props.spacing}px;
`

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--transparent);
  backdrop-filter: blur(3px);
  z-index: 9999;
`

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  @media screen and (max-width: 480px) {
    padding: 0 20px;
  }
`

export default Header
