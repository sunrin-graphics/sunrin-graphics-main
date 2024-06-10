import {
  CardContainer,
  Description,
  Introduce,
  Section,
  SectionWrapper,
  SubTitleText,
  Title,
  TitleText
} from '@components/Atomic'

import { presentation } from '../../data/presentation'
import PresentationCard from '../card/PresentationCard'
import { forwardRef } from 'react'


const PresentationSection = forwardRef<HTMLElement, object>((_,ref) => {
  return (
    <SectionWrapper ref={ref}>
      <Section>
        <Introduce>
          <Title>
            <SubTitleText>콘텐츠디자인과</SubTitleText>
            <TitleText>학과발표회</TitleText>
          </Title>
          <Description>
            콘텐츠디자인과 학과발표회는 매년도마다 12월달에 1회 진행되며,
            1,2,3학년의 모든 학생들이 직접 기획하고 제작한 프로젝트와 학과의
            올해 성과를 발표하는 자리입니다.
          </Description>
        </Introduce>
        <CardContainer>
          {presentation.map((v) => (
            <PresentationCard
              key={v.year}
              title={v.title}
              subtitle={v.subtitle}
              description={v.description}
              link={v.link}
              image={`https://cdn.sunrin.graphics/files/cover/presentation/${v.year}.png`}
            />
          ))}
        </CardContainer>
      </Section>
    </SectionWrapper>
  )
})

export default PresentationSection;
