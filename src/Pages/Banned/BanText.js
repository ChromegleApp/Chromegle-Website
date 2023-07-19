import styled from "styled-components";
import BackButton from "./BackButton";

const TextContainer = styled.div`
  padding: 0 10% 0;
  width: 100%;
  margin-top: -15px;
  font-size: 18px;

  @media(max-width: 1100px) {
    font-size: 16px;
  }

  @media(max-width: 800px) {
    font-size: 14px;
  }
`;

const Header2Text = styled.h1`
  font-size: 30px;
  font-weight: bold;
  text-align: left;
  margin-top: 20px;
  margin-bottom: 10px;

  @media(max-width: 1100px) {
    font-size: 25px;
  }

  @media(max-width: 800px) {
    font-size: 20px;
  }
  
`;

const BodyText = styled.p`
`;

const SpecialText = styled.span`
  
  // noinspection CssInvalidPropertyValue
  background-clip: text;
  -webkit-background-clip: text;
  font-weight: bold;
  
  color: transparent;
  background-color: #017ffe;
  background-image: -o-linear-gradient(top, #80c0ff 0, #017ffe 100%);
  background-image: -moz-linear-gradient(top, #80c0ff 0, #017ffe 100%);
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#80c0ff), to(#017ffe));
  background-image: -webkit-linear-gradient(top, #80c0ff 0, #017ffe 100%);
  background-image: -ms-linear-gradient(top, #80c0ff 0, #017ffe 100%);
  background-image: linear-gradient(top, #80c0ff 0, #017ffe 100%);
`;

const SpecialText2 = styled.span`

  // noinspection CssInvalidPropertyValue
  background-clip: text;
  -webkit-background-clip: text;
  font-weight: bold;

  color: transparent;
  background-color: #d98100;
  background-image: -o-linear-gradient(top, #f1ba3a 0, #d98100 100%);
  background-image: -moz-linear-gradient(top, #f1ba3a 0, #d98100 100%);
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#f1ba3a), to(#d98100));
  background-image: -webkit-linear-gradient(top, #f1ba3a 0, #d98100 100%);
  background-image: -ms-linear-gradient(top, #f1ba3a 0, #d98100 100%);
  background-image: linear-gradient(top, #f1ba3a 0, #d98100 100%);
`;

const Li = styled.li`
  list-style-type: disc;
  margin-left: 20px;
`;

export default function BanText() {

    return (
        <TextContainer>
            <Header2Text style={{marginTop: 0}}>What do you mean!?</Header2Text>
            <BodyText>
                Let's get something straight. <SpecialText>Chromegle</SpecialText> didn't ban you, <SpecialText2>Omegle</SpecialText2> did.
                Omegle is an automated site, meaning it uses AI to ban malicious users. There are a number of reasons you might have been
                auto-banned by the site, and none have anything to do with Chromegle.
            </BodyText>
            <Header2Text>Typical Ban Reasons</Header2Text>
            <ul>
                <Li>Nudity/lewd behaviour in video chats</Li>
                <Li>Skipping users too quickly, being skipped to quickly</Li>
                <Li>Detected as a minor of &lt;18 years of age</Li>
                <Li>Repeatedly joining on new windows on the same IP</Li>
                <Li>Excessively posting links, including IP addresses</Li>
                <Li>Excessively using inappropriate words (especially sexual)</Li>
                <Li>Repeatedly sending socials (e.g. Snapchat, Instagram, Discord)</Li>
                <Li>Using a virtual camera, displaying videos over virtual camera</Li>
                <Li>Anyone on your network (or VPN) doing any of the above</Li>
            </ul>
            <Header2Text>How long are bans?</Header2Text>
            <BodyText>
                There are 3 types of bans: Short bans (7 days), normal bans (7 days-4 months), and long bans (permanent).
                There is no way to determine your ban type, and since Omegle is moderated by AI, they cannot be appealed.
            </BodyText>
            <Header2Text>How do I keep using Omegle?</Header2Text>
            <BodyText>
                The only way to continue using Omegle today is to use a VPN. We don't have any recommendation for specific VPNs. What we can say is that all browser-based VPNs are not
                "real" VPNs, they only proxy website traffic. Get a VPN desktop app that protects *all* traffic on
                your computer if you want to use video chat.
                <br/><br/>
                You will know if your VPN is not a "real" one if the stranger's video gets stuck loading. This means Omegle
                detected you are using a VPN. "Fake" VPNs do not tunnel the video connection, only the website.
            </BodyText>
            <Header2Text>Did Chromegle get me banned?</Header2Text>
            <BodyText>
                Chromegle does not "get you banned". If you were banned after installing Chromegle, you were likely
                already banned and refreshing your tab made it take effect.
                <br/><br/>
                That said, abusing Chromegle's features <strong>can cause</strong> bans.
                For example, combining auto-skip with auto-greetings can be used to bot
                Omegle, if you configure it in a particular way. We recommend you don't.
                <br/><br/>
                Chromegle is a tool, and it's up to you to use it appropriately.
            </BodyText>
            <BackButton />
        </TextContainer>
    )
}
