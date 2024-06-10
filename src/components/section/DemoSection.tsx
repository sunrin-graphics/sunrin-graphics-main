import Card from '../card/DemoCard'
import {
  CardContainer,
  Description,
  Introduce,
  Section,
  SectionWrapper,
  SubTitleText,
  Title,
  TitleText,
  ViewButton
} from '@components/Atomic'

import InstagramIcon from '@assets/instagram.svg'
import { demo } from '@data/demo'
import { forwardRef } from 'react'

const DemoSection = forwardRef<HTMLElement, object>((_,ref) => {
  return (
    <SectionWrapper ref={ref}>
      <Section>
        <Introduce>
          <Title>
            <SubTitleText>콘텐츠디자인과</SubTitleText>
            <TitleText>시연회</TitleText>
          </Title>
          <Description>
            콘텐츠디자인과 시연회는 2020년부터 매년 신입생들을 위해 준비하는
            행사입니다. 시연회를 통해 신입생들은 앞서 입학한 선배들의 작품을{' '}
            <br /> 감상하고, 앞으로의 동아리 선택부터 콘텐츠디자인과 생활까지에
            대해 힌트를 얻을 수 있습니다.
          </Description>
          <ViewButton
            href="https://www.instagram.com/sunrin_contents/"
            target="_blank">
            <img src={InstagramIcon} alt={'재생'} />
            시연회 인스타그램
          </ViewButton>
        </Introduce>
        <CardContainer>
          {demo.map((v) => (
            <Card
              title={v.title}
              subtitle={v.subtitle}
              description={v.description}
              link={v.link}
              image={`https://cdn.sunrin.graphics/files/cover/demo/${v.year}.png`}
            />
          ))}
        </CardContainer>
      </Section>
    </SectionWrapper>
  )
})

export default DemoSection
