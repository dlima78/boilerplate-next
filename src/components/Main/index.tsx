import styled from 'styled-components'

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`

const H1 = styled.h1``

function Main() {
  return (
    <StyledMain>
      <H1>Main</H1>
    </StyledMain>
  )
}

export default Main
