import styled from '@emotion/styled'
import Sunrin from '@assets/sunrin.svg'
import LinkIcon from '@assets/linkbold.svg'

const Footer = () => {
  return (
    <FooterLayout>
      <FooterContainer>
        <FooterLeft>
          <FooterContent>
            <img
       src={Sunrin}
              alt="선린 로고"
              width={13}
              height={16}
            />
            <H1>
              <Bold>선린인터넷고등학교</Bold> 콘텐츠디자인과
            </H1>
          </FooterContent>
          <CommonText>
            서울특별시 용산구 원효로97길 33-4 (04314) <br />
            본교 3호관 2층 콘텐츠디자인과 교무실
          </CommonText>
          <FooterContent>
            <CommonText>
              <Bold>전화</Bold>
            </CommonText>
            <CommonText>02-715-7749</CommonText>
          </FooterContent>
        </FooterLeft>
        <FooterColumn>
          <CommonText>
            <Bold>선린인터넷고등학교</Bold>
          </CommonText>
          <FooterSubColumn>
            <FooterContent>
              <img
                src={LinkIcon}
                alt="선린 로고"
                width={20}
                height={20}
              />
              <FooterLink href="https://sunrint.sen.hs.kr/" target="_blank">
                웹사이트
              </FooterLink>
            </FooterContent>
            <FooterContent>
              <img
             src={LinkIcon}
                alt="선린 로고"
                width={20}
                height={20}
              />
              <FooterLink
                href="https://www.youtube.com/@user-wi9bc4qg4g"
                target="_blank">
                유튜브
              </FooterLink>
            </FooterContent>
          </FooterSubColumn>
          <FooterSubColumn>
            <FooterContent>
              <CommonText>
                <Bold>전화</Bold>
              </CommonText>
              <CommonText>02-715-7749</CommonText>
            </FooterContent>
            <FooterContent>
              <CommonText>
                <Bold>팩스</Bold>
              </CommonText>
              <CommonText>02-715-7749</CommonText>
            </FooterContent>
          </FooterSubColumn>
        </FooterColumn>

        <FooterColumn>
          <CommonText>
            <Bold>졸업전시회</Bold>
          </CommonText>
          <FooterSubColumn>
            <FooterContent>
              <img
       src={LinkIcon}
                alt="선린 로고"
                width={20}
                height={20}
              />
              <FooterLink href="https://sunrin.graphics/2023" target="_blank">
                2023 졸업전시회
              </FooterLink>
            </FooterContent>
            <FooterContent>
              <img
                 src={LinkIcon}
                alt="선린 로고"
                width={20}
                height={20}
              />
              <FooterLink
                href="https://www.instagram.com/sr_design_exhibit/"
                target="_blank">
                인스타그램
              </FooterLink>
            </FooterContent>
          </FooterSubColumn>
        </FooterColumn>

        <FooterColumn>
          <CommonText>
            <Bold>시연회</Bold>
          </CommonText>
          <FooterSubColumn>
            <FooterContent>
              <img
             src={LinkIcon}
                alt="선린 로고"
                width={20}
                height={20}
              />
              <FooterLink
                href="https://genesis.sunrin.graphics"
                target="_blank">
                2024 시연회
              </FooterLink>
            </FooterContent>
            <FooterContent>
              <img
                src={LinkIcon}
                alt="선린 로고"
                width={20}
                height={20}
              />
              <FooterLink
                href="https://www.instagram.com/sunrin_contents/"
                target="_blank">
                인스타그램
              </FooterLink>
            </FooterContent>
          </FooterSubColumn>
        </FooterColumn>
      </FooterContainer>
    </FooterLayout>
  )
}

export default Footer

const FooterLayout = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--justWhite, #fff);
`

const FooterContainer = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  padding: 64px 20px;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  row-gap: 40px;
  flex-wrap: wrap;
`

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const H1 = styled.div`
  color: var(--deepDark, #30343d);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`

const Bold = styled.span`
  font-weight: 600;
`

const CommonText = styled.div`
  color: var(--deepDark, #30343d);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`

const FooterSubColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`

const FooterLink = styled.a`
  color: var(--deepDark, #30343d);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
