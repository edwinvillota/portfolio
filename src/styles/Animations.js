import { keyframes, css } from 'styled-components'

const fadeLeftKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%)
  }

  to {
    opacity: 1;
    transform: translateX(0)
  }
`

const fadeRightKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%)
  }

  to {
    opacity: 1;
    transform: translateX(0)
  }
`

const fadeUpKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }

  to {
    opacity: 1;
    transform: translateY(0)
  }
`

const fadeDownKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0)
  }
`

export const fade = ({ direction = 'left', duration = '1s', type = 'ease', delay = '0s' }) => {
  let keyframes

  switch (direction) {
    case 'left':
      keyframes = fadeLeftKeyframes
      break
    case 'right':
      keyframes = fadeRightKeyframes
      break
    case 'up':
      keyframes = fadeUpKeyframes
      break
    case 'down':
      keyframes = fadeDownKeyframes
      break
    default:
      keyframes = fadeLeftKeyframes
      break
  }

  return (
    css`
      animation: ${duration} ${keyframes} ${type} ${delay};
      animation-delay: ${delay}; 
    `
  )
}
