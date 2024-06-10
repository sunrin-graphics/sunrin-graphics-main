import styled from '@emotion/styled'
import LinkIcon from '@assets/link.svg'
import LinkDisabled from '@assets/link-disabled.svg'

interface CardProps {
  year: number
  title: string
  description: string
  subtitle: string
  active?: boolean
}

const ExhibitionCard = (props: CardProps) => {
  return (
    <Container>
      <Image
        src={`
        https://cdn.sunrin.graphics/files/cover/exhibition/${props.year}.png
      `}
      />
      <CardBottom>
        <Contents>
          <Column>
            <Subtitle>{props.subtitle}</Subtitle>
            <Title>{props.title}</Title>
          </Column>
          <Description>{props.description}</Description>
        </Contents>
        {props.active ? (
          <WebButton
            href={`https://sunrin.graphics/${props.year}`}
            target={'_blank'}>
            <Icon>
              <img src={LinkIcon} alt="웹 아이콘" />
            </Icon>
            웹사이트
          </WebButton>
        ) : (
          <WebButtonDisabled>
            <Icon>
              <img src={LinkDisabled} alt="웹 아이콘" />
            </Icon>
            {props.year === 2024 ? '5/24 오픈 예정' : '현재 접속 불가능'}
          </WebButtonDisabled>
        )}
      </CardBottom>
    </Container>
  )
}

const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const WebButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 8px;
  background: var(--coolSurface);
  border-radius: 24px;
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  color: var(--deepDark);
  border: none;
  cursor: pointer;
  transition: filter 0.2s ease;
  &:hover {
    filter: brightness(0.9);
  }
  text-decoration: none;
`

const WebButtonDisabled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 8px;
  background: var(--coolSurface);
  border-radius: 24px;
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  color: var(--blueIshGray);
  border: none;
  transition: filter 0.2s ease;
  user-select: none;
`

const Icon = styled.div`
  display: inline-flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
`

const Description = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  color: var(--deepDark);
`

const Subtitle = styled.span`
  font-weight: 600;
  font-size: 15px;
  line-height: 150%;
  color: var(--blueIshGray);
`

const Title = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  color: var(--deepDark);
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Contents = styled.div`
  display: flex;
  height: 140px;
  padding: 0px 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  width: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 198px;
  object-fit: cover;
`

const Container = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  background: var(--justWhite);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 496px;
  min-width: 320px;
  padding: 16px 16px 24px 16px;
  gap: 24px;
  flex: 1 0 0;
`

export default ExhibitionCard
