import { exhibition } from '../../data/exhibition'
import ExhibitionCard from '../card/ExhibitionCard'
import {
  SectionWrapper,
  CardContainer,
  Container,
  Description,
  Introduce,
  SubTitleText,
  Title,
  TitleText,
  ViewButton
} from '@components/Atomic'

import InstagramIcon from '@assets/instagram.svg'
import { forwardRef } from 'react'

const ExhibitionSection = forwardRef<HTMLElement, object>((_,ref) => {
  return (
    <SectionWrapper ref={ref}>
      <Container>
        <Introduce>
          <Title>
            <SubTitleText>콘텐츠디자인과</SubTitleText>
            <TitleText>졸업전시회</TitleText>
          </Title>
          <Description>
            콘텐츠디자인과 졸업전시회는 2013년부터 매년 5월~6월에 진행되는 가장
            큰 콘텐츠디자인과 행사입니다. 3학년 학생들이 3년 간 배운 내용을
            바탕으로 다양한 종류의 작품을 전시하며, 매년 새로운 콘셉트와 높은
            수준의 작품을 만나볼 수 있습니다.
          </Description>
          <ViewButton
            href="https://www.instagram.com/sr_design_exhibit/"
            target="_blank">
            <img src={InstagramIcon} alt={'재생'} />
            졸업전시회 인스타그램
          </ViewButton>
        </Introduce>
        <CardContainer>
          {exhibition.map((v) => (
            <ExhibitionCard
              title={v.title}
              subtitle={v.subtitle}
              description={v.description}
              active={v.link}
              year={v.year}
            />
          ))}
        </CardContainer>
      </Container>
    </SectionWrapper>
  )
})

export default ExhibitionSection
