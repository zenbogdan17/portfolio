import styled from 'styled-components';
import { Bio } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 20px 0px 60px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const H1 = styled.h1`
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;

  margin-top: 20px;
`;

const CustomButton = styled.button`
  background-color: ${({ theme }) => theme.card_light};
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  margin-top: 20px;
  padding: 15px 20px;
  font-weight: 600;
  text-decoration: none;
  font-size: 24px;
  transition: all 0.6s ease-in-out;
  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

const Contact = () => {
  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <H1>You can text me</H1>
        <Desc>
          Feel free to contact me if you have any questions or if there are
          opportunities you would like to discuss!
        </Desc>
        <ButtonContainer>
          <CustomButton>
            <img
              alt="logoTelegram"
              style={{ paddingRight: '5px' }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAvVBMVEUAAABHt/Qwpd43sOwzq+c3ruo4sOg/tO83sOc4rOk3r+c1rOg4r+g6r+kvo980quY4qOgzqOQ3p+c0p+QwqOAwpt9TsOaV0O7Y8Pgvpd8yqOJuwOfM6Pj///94w+oxpuFMsOCg0/Dw+PzA4PNArODi8Pi44PD4//8wpOAtotowpd5fuOOw3PCDyOgwoOAuo90qn9ctodswoNgsoNkqntUqndQrn9gnn9MooNgqntYontYqndUvn9konNQom9Nm6UXDAAAAPXRSTlMACEiYwN7wGJj/gP/IMBj/yP+A8P+Y////8P///////////////////9j////////E////8Jj/gP//4P8wnkXuQgAAAbhJREFUeAFsjgMCgEAQALNtu/9/sUWuOawhXIiSrKiapiqyJApfdEMzTzRDf4VFC8I2YNp7iiU+yh0Iv3BuTVwVwm9M1T3inur7ts9uUOCyVL19fuD/Ewa8R0SGH8I9IocS0YAYAxC9SJLET9AX45A0fJNkeVFkpKawQRlWYQU3RInUTQt05CtFQer7qq/gshzGqSXqipCEtD9J+npuDwb2pYJyxpd8xcjUbWXTRQKDMBAF0Kms2dTdWyweXO5/rM4UqT0smR8c7rh+TF334B4OY/Bc13dRED52JLxuqHGbUt33PVj5vu9O2ZJCrAdTzNGF+8Rd0QDB2/hxWnPK0QkHkBV4QggehHTt24BztmvsuXjxQDYNftwEiusmR0E7QMJMKWpgqJQ67jpr6qIZDFXD0Erf2/ymRVMewsBiZogi++ZBXqiGgR0AROaLH+7QwjQiet02/qC1DvCBzrXBjrEOoCT+ZIzW+01qYoNzAmQgs0acYY5Bljb9VA7gxcmLIisynAvSt3MHWmVeVEWFc0FbQpu8hJ4jqz/SgQ+DxGKtruqOTQbwzYls3bORA/8Gw0h61noy+vz9n00ab2KwYRKTAAAAAElFTkSuQmCC"
            />
            <a href={Bio.telegram} target="_blank" rel="noreferrer">
              Telegram
            </a>
          </CustomButton>
          <CustomButton>
            <img
              alt="logoEmail"
              style={{ paddingRight: '5px' }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACYklEQVR4Ae2XA6zlUBRF+21bY9u2bdtWNLYnHNu27Thj21Y49p6u8We/o9dkpzf3nrPXLt5ra9g2c7NtZewMY5i5H2tqTDppLEzYBLgfFWqvQe1dNK6vm0b3ck1TwYAFE7bh52mvcvlc1KKms85t9pau+0nXTF1NXeGJN4zmNZwFE7aRLdxRp2eGanJHXxXP46QZw9z15qSvdMVsuJQ6wgvPGUPdVDy3kyaZLJiwjaxhjrq7LFzal0HHp4WoVjFXcTYubPEWjbqcfDC9eJw3vZqbnjVNbxiwYMImgO4s/RUAvVwfqVGtfVTCPBvzR7vr3enknQ166J1neuCFJ95/ODCjB9ibQd/2ZNB3c//V3B+aFKxqhV3Vtq6zruyIeTasj5oeevHAC0+8YcCKN8AfkfLZmggNae6tkvmctHSCuz6cwTzho6aGWnroxQOvX75JCIBI/GV3Bu0ZF6xKBV3UuZGzbu7xka5GPxuMmWONGmrpoffPUSc5QMyz8WR1hLrX8lTuLA5aPdVDH89xxL/EmDnWqKE22lGnRoBXGyLVroqHapjXtGIBF/Vo5qK7+30QY+ZYo4ba1AuA0ct1kWpb2UOIO/nBigj1re9lXmdHxJg51v7U0UNvUgNYw5mj9uPODNo+KggxZo41ixCWAazhMWtizlmHsA7A2BIeXdYhovtb/BHRnCS4dQjGifsjYn9zcbhGt/HR87VWcOsQeOCFp5LwTxjtrzMlwuNrEm7C9FD0ALYAWf68kBzIKO3PkC6CBRO24e1uf58HCHfqqNbpI1gwYRu/Xo3T/7UcJmzbV5Ft+wGAMPtF/jKaMQAAAABJRU5ErkJggg=="
            />
            <a href={Bio.mail} target="_blank" rel="noreferrer">
              Email
            </a>
          </CustomButton>
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
