import styled from "styled-components";

const Banner = styled.img`
  height: 140px;
  animation-name: grow2, fadein;
  animation-duration: 1000ms
`;

const BanContainer = styled.div`
  color: #d4d4d4;
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: Montserrat, "sans-serif";
`;

const TextContainer = styled.div`
  margin-top: 35px;
  max-width: 80%;
  width: 900px;
  animation: fadein 2000ms;
`;

const OmegleButton = styled.a`
  font-weight: 600;
  font-family: Montserrat, "sans-serif";
  background-color: #2470c1;
  color: white;
  padding: 20px;
  border-radius: 40px;
  width: 290px;
  text-align: center;
  text-decoration: none;
  transition: 200ms;
  margin-top: 50px;
  margin-bottom: 125px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: 200ms;
  }
  animation: fadein 2000ms;

`;
const Banned = () => {

    return (
        <BanContainer>
            <a href="/">
                <Banner src="/images/ExtensionLogo.png"/>
            </a>
            <TextContainer>
                <div>
                    <h1>So... you got banned.</h1>

                    Bans aren't uncommon on Omegle. In fact, they're very frequent! Omegle is an automated site; including moderation,
                    so specific actions you do on their website can cause you to be flagged and removed from the platform.

                    <h2>Typical Ban Reasons</h2>

                    <ul>
                        <li>Nudity/lewd/inappropriate activity (especially video)</li>
                        <li>Repeatedly joining on new windows on the same IP</li>
                        <li>Being skipped every single chat or skipping too quickly</li>
                        <li>Excessively posting links (by the way, they get filtered)</li>
                        <li>Excessively using inappropriate words (especially sexual)</li>
                        <li>Sending messages without typing, e.g. through botting</li>
                        <li>Anyone on your network (or VPN) doing any of the above</li>
                    </ul>

                    <h2>Chromegle: Did it get me banned?</h2>

                    Chromegle alone cannot get you banned. However, abusing its features <strong>can cause bans.</strong> Typically, this happens when
                    someone uses Chromegle to bot the Omegle website. For example, combining auto-skip with auto-message and setting them to really low intervals
                    is the <strong>definition of botting.</strong> You will likely get removed if you do it for too long.

                    <h2>How long do bans last?</h2>

                    They tend to last from <strong>7 days to 4 months.</strong> Because Omegle is a fully automated site, there is no way to appeal a ban.
                    The only way to continue using Omegle during this period is to bypass their ban system, by hiding your IP.

                    <h2>How can I bypass bans?</h2>

                    If you want to chat while banned, consider <strong>getting a VPN</strong> to continue using Omegle. A VPN will change your IP Address,
                    tricking Omegle into thinking you are someone else, who, hopefully isn't also banned. Public VPNs tend to be banned, so you should be
                    aware of that.

                </div>
            </TextContainer>
            <OmegleButton href="/omegle">Return to Omegle</OmegleButton>
        </BanContainer>
    )

}

export default Banned;
