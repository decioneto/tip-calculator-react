import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  & > label {
    position: relative;
    width: 66px;
    height: 32px;
    background-color: ${props => props.theme.colors.backgroundSwitch};
    border-radius: 50px;
    cursor: pointer;

    & > input {
      visibility: hidden;
      opacity: 0;
      height: 0;
    }

    & > span.slider {
      position: absolute;
      top: 50%;
      left: 4px;
      transform: translateY(-50%);
      background-color: ${props => props.theme.colors.primary};
      height: 26px;
      width: 26px;
      border-radius: 50%;
      transition: left 500ms cubic-bezier(1,-0.15, 0.02, 1.26),
                  filter 200ms;
      &:hover {
        filter: brightness(0.9)
      }

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: 16px;
        height: 16px;
        background: url('../../src/assets/images/sunny-icon.svg');
        background-repeat: no-repeat;
        z-index: 2;

        transition: background 300ms ease;
      }
    }

    & > input:checked + span.slider {
      left: 37px;

      &::before {
        background: url('../../src/assets/images/moon-icon.svg');
      }
    }
  }
`;
