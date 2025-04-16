import * as React from "react";
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

const ThankyouEmail = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Html>
      <Head />
      <Preview>
        Thank you for joining the Xenon Notes waitlist - Your spot is confirmed
      </Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="max-w-[600px] mx-auto bg-white rounded-[8px] overflow-hidden">
            {/* Header with Logo */}
            <Section className="bg-white pt-[32px] pb-[24px] text-center border-b border-gray-200">
              <Row>
                <Column>
                  <Img
                    src="https://res.cloudinary.com/dwgsvtusk/image/upload/v1744824298/xenon-color_x5oflx.png"
                    alt="Xenon Notes"
                    width="140"
                    height="auto"
                    className="mx-auto"
                  />
                </Column>
              </Row>
            </Section>

            {/* Main Content */}
            <Section className="px-[48px] pt-[40px] pb-[32px]">
              <Heading className="text-[24px] font-bold text-gray-900 m-0 mb-[24px]">
                Your Waitlist Spot is Confirmed
              </Heading>

              <Text className="text-[16px] leading-[24px] text-gray-700 mb-[24px]">
                Hello,
              </Text>

              <Text className="text-[16px] leading-[24px] text-gray-700 mb-[24px]">
                Thank you for joining the Xenon Notes waitlist. We're delighted
                to confirm your spot in our exclusive group of early adopters.
              </Text>

              <Text className="text-[16px] leading-[24px] text-gray-700 mb-[32px]">
                Our team is working diligently to create a note-taking
                experience that will transform how you capture and organize your
                ideas. As a waitlist member, you'll receive:
              </Text>

              <Section className="bg-gray-50 px-[24px] py-[24px] rounded-[8px] mb-[32px]">
                <ul className="list-disc pl-[24px] m-0">
                  <li className="text-[16px] leading-[24px] text-gray-700 mb-[12px]">
                    <strong>Priority Access:</strong> Be among the first to
                    experience Xenon Notes
                  </li>
                  <li className="text-[16px] leading-[24px] text-gray-700 mb-[12px]">
                    <strong>Become a Beta:</strong> There are chances that you
                    might become a beta tester of Xenon Notes
                  </li>
                  <li className="text-[16px] leading-[24px] text-gray-700">
                    <strong>Direct Input:</strong> Opportunity to shape the
                    future of the product
                  </li>
                </ul>
              </Section>

              <Button
                className="bg-gray-900 text-white rounded-[4px] px-[32px] py-[12px] text-[16px] font-medium no-underline text-center box-border"
                href="https://xenonnotes.vercel.app/waitlist-status"
              >
                Check Waitlist Status
              </Button>
            </Section>

            <Hr className="border-t border-gray-200 my-[8px] mx-0" />

            {/* Testimonial/Social Proof */}
            <Section className="px-[48px] py-[32px] bg-gray-50">
              <Text className="text-[16px] leading-[24px] text-gray-700 italic text-center mb-[16px]">
                "Xenon Notes transforms traditional note-taking by combining AI,
                research, and visual generation - all in one seamless platform."
              </Text>
              <Text className="text-[14px] leading-[20px] text-gray-600 font-medium text-center">
                - Grenish Rai, Product Developer
              </Text>
            </Section>

            <Hr className="border-t border-gray-200 my-[8px] mx-0" />

            {/* FAQ Section */}
            <Section className="px-[48px] py-[32px]">
              <Heading className="text-[18px] font-bold text-gray-900 m-0 mb-[16px]">
                Frequently Asked Questions
              </Heading>

              <Text className="text-[16px] leading-[24px] text-gray-900 font-medium mb-[8px]">
                When will Xenon Notes launch?
              </Text>
              <Text className="text-[14px] leading-[22px] text-gray-700 mb-[16px]">
                We're targeting a launch in Q4 {currentYear}. Waitlist members
                will receive updates on our progress.
              </Text>

              <Text className="text-[16px] leading-[24px] text-gray-900 font-medium mb-[8px]">
                How can I move up the waitlist?
              </Text>
              <Text className="text-[14px] leading-[22px] text-gray-700 mb-[16px]">
                We're sorry to say this, but there's no way to do it.
              </Text>
            </Section>

            {/* Footer */}
            <Section className="bg-gray-100 px-[48px] py-[32px] text-center">
              <Text className="text-[12px] leading-[18px] text-gray-600 m-0">
                © {currentYear} Xenon Orgs
              </Text>
              <Text className="text-[12px] leading-[18px] text-gray-600 m-0 mt-[8px]">
                This email was sent to you because you signed up for the Xenon
                Notes waitlist.
              </Text>

              <Text className="text-[12px] leading-[18px] text-gray-600 m-0 mt-[16px]">
                <Link
                  href="https://xenonnotes.vercel.app/unsubscribe"
                  className="text-gray-600 underline"
                >
                  Unsubscribe
                </Link>{" "}
                •{" "}
              </Text>

              {/* Spam-proof identifier */}
              <Text className="text-[10px] leading-[14px] text-gray-500 m-0 mt-[24px]">
                Message ID: XN-{Math.random().toString(36).substring(2, 10)}-WL
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ThankyouEmail;
